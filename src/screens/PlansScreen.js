import React, { useEffect, useState } from "react";
import "./PlansScreen.css";
import db from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";

function PlansScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchProducts = async () => {
      const q = query(collection(db, "products"), where("active", "==", true));
      const querySnapshot = await getDocs(q);

      const productsData = {};
      querySnapshot.forEach(async (productDoc) => {
        productsData[productDoc.id] = productDoc.data();
        const priceQ = query(collection(productDoc.ref, "prices"));
        const priceSnap = await getDocs(priceQ);

        productsData[productDoc.id].prices = priceSnap.docs.map((price) => ({
          priceId: price.id,
          priceData: price.data(),
        }));
      });

      console.log("Fetched products data:", productsData);
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const loadCheckout = async (priceId) => {
    try {
      const userDocRef = doc(db, "customers", user.uid);
      const checkoutSessionsCollectionRef = collection(
        userDocRef,
        "checkout_sessions"
      );

      const docRef = await addDoc(checkoutSessionsCollectionRef, {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

      console.log("Document reference:", docRef);

      const stripe = await loadStripe("");

      const sessionId = docRef.id;

      console.log("Session ID:", sessionId);

      if (window.location.protocol !== "https:") {
        console.warn("Stripe requires HTTPS for secure transactions.");
        return;
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error("An error occurred during checkout:", error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="plansScreen">
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className="plansScreen__plan" key={productId}>
            <div className="plansScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices[0].priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
