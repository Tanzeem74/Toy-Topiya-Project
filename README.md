# 🧸 ToyTopia – A Local Kids Toy Store Platform

---

## 📘 Project Overview

**ToyTopia** is a vibrant and playful online marketplace for kids' toys, designed to help families discover and support local toy sellers.  
Users can log in, browse toys, view detailed info, and leave feedback or ratings for toys they want to buy for their kids.  

This project emphasizes **user engagement, responsiveness, and secure authentication**, creating a friendly experience for families.  

**Live Site:** `https://toytopiya-project.web.app/`  

---

## 🚀 Key Features

### User Authentication
- Email/password login and registration using Firebase Authentication.
- Google login integration.
- Protected routes for private pages like **Toy Details** and **My Profile**.
- "Forgot Password" feature with email reset.

### Navbar & Footer
- Responsive Navbar showing active routes.
- User image and name shown when logged in.
- Login/logout button functionality.
- Footer with links to terms & conditions, privacy policy, and social media.

### Home Page
- Slider showcasing toys (using **Swiper slider** or **Daisy UI slider**).
- Popular toys section with at least 6 toy cards.
- Cards display: thumbnail, toy name, rating, price, available quantity, and a “View More” button.
- Two extra content sections to enhance UX.

### Toy Details Page (Protected)
- Displays full details of the selected toy.
- "Try Now" form with Name & Email fields and success notification upon submission.
- Private route redirects to login if user is not authenticated.
- Maintains session on page reload.

### User Profile
- Protected route showing user's **name, email, and photoURL**.
- Form to edit name and photoURL using `Firebase updateProfile()`.

### Registration & Login Page
- Registration form with Name, Email, PhotoURL, Password.
- Login form with Email, Password, Google login.
- Password validation:
  - At least 1 uppercase letter
  - At least 1 lowercase letter
  - Minimum 6 characters
- Show/hide password toggle implemented.
- Error and success messages via **toast** or **SweetAlert**.

### Other Features
- Dynamic page titles per route.
- Fully responsive layout for mobile, tablet, and desktop.
- Extra private route with meaningful content.
- 404 Page / Not Found page for invalid URLs.
- Firebase configuration secured using environment variables.
- Images hosted on **ImgBB / Postimages**.
- Optional animation using **AOS** or slider using **Swiper**.

---

## 📦 JSON Data Structure (Example)

```json
{
  "toyId": 1,
  "toyName": "Lego Classic Bricks",
  "sellerName": "Toys R Us Local",
  "sellerEmail": "contact@toysruslocal.com",
  "price": 49.99,
  "rating": 4.7,
  "availableQuantity": 75,
  "description": "A timeless set of colorful Lego bricks that encourages creativity and problem-solving. Kids can build anything they imagine, from houses to vehicles.",
  "pictureURL": "https://cdn.pixabay.com/photo/2016/03/31/20/11/lego-1297582_1280.png",
  "subCategory": "Building Blocks"
}

````

## 💻 Installation

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/Tanzeem74/Toy-Topiya-Project.git
cd Toy-Topiya-Project
```
### 2. Install Dependencies
Install all required packages using npm:

```bash
npm install
```


