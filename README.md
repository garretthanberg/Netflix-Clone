<h1 align="center">
  Netflix Clone with React, Firebase, Redux, Stripe, Google Auth and TMDB API.
  <br>
</h1>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#features">Features</a> •
  <a href="#prerequisites">Prerequisites</a> •
  <a href="#installation">Installation</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://github.com/garretthanberg/Netflix-Clone/assets/115447682/72dffe34-beab-4670-a313-bb0d22368c2b" alt="screenshot">
</p>

## Introduction

This project is a Netflix clone built using a combination of modern web development technologies. It aims to replicate the core functionalities of the Netflix streaming service, including user authentication, payment processing using Stripe, and more. The project utilizes React, Redux, Firebase, Stripe Checkout & Webhooks, Google Authentication, TMDB API, and Yarn.

This project was crafted with a focus on learning and skill development, serving as an educational exercise. It's important to clarify that it's not intended for commercial use, but rather designed to showcase the integration of various technologies within a real-world context.

## Features

* User authentication using Google Authentication.
* Dynamic content fetching from TMDB API.
* Secure payment processing using Stripe Checkout & Webhooks.
* State management with Redux for efficient data handling.
* Real-time data storage and retrieval using Firestore/Firebase.

<a id="prerequisites"></a>
## Prerequisites

Before you proceed, make sure you have the following tools and technologies installed on your system:

    Node.js (https://nodejs.org)
    Yarn package manager (https://yarnpkg.com)
    Firebase account for authentication and database setup (https://firebase.google.com)
    Stripe account to get the publishable and secret API keys for payment processing (https://stripe.com/)
    TMDB API Key for movie/tv show data by signing up for a developer account on the TMDB website (https://www.themoviedb.org/)

## Installation

To run the Netflix clone on your local machine, follow these steps:

```bash
# Clone this repository:
$ git clone https://github.com/garretthanberg/Netflix-Clone.git


# Go into the repository:
$ cd Netflix-Clone 


# Install dependencies using Yarn:
$ yarn install


# Create a Firebase project and set up the necessary configurations (authentication, Firestore, and set up the Stripe extention).
# Replace the Firebase config in firebase.js with your credentials.
# Add your TMDB API Key in Requests.js.
# And your Stripe Publishable Key in PlansScreen.js.


# Run the development server:
$ yarn start
```

<p align="center">
  <img src="https://github.com/garretthanberg/Netflix-Clone/assets/115447682/470ded6b-ff60-4958-8e6b-ef2bdf808038" alt="screenshot">
</p>

## Contributing

Contributions to the project are welcome and encouraged! If you find any bugs or want to add new features, please create an issue or submit a pull request. Please make sure to follow the project's code of conduct.

1. Fork the repository
2. Create your branch: git checkout -b feature/YourFeature
3. Commit your changes: git commit -m 'Add YourFeature'
4. Push to the branch: git push origin feature/YourFeature
5. Open a pull request

## License

This project is licensed under the MIT License.

---

I hope you enjoy using my Netflix clone! If you have any questions or need assistance, feel free to contact me.

> Portfolio [garretthanberg.com](https://www.garretthanberg.com) &nbsp;&middot;&nbsp;
> GitHub [@garretthanberg](https://github.com/garretthanberg) &nbsp;&middot;&nbsp;
> LinkedIn [Garrett Hanberg](https://www.linkedin.com/in/garrett-hanberg/) 
