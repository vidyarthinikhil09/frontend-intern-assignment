# Mini Product Dashboard

This is a frontend application built for the Frontend Internship Assignment. It fetches product data from a public API and presents it in a responsive, filterable, and interactive dashboard.

## 🚀 Live Demo

**[Click here to view the live application](https://frontend-intern-assignment-ruddy.vercel.app/)**

---

## 📸 Screenshots


[Image of Desktop View]
<img width="1842" height="887" alt="image" src="https://github.com/user-attachments/assets/fe2ab57d-26a1-4dc1-94e7-8e365224112f" />


[Image of Mobile View]
(https://github.com/user-attachments/assets/1adde10d-e96a-40e4-a097-d48739696f00)


[Cart Dropdown]
<img width="639" height="487" alt="image" src="https://github.com/user-attachments/assets/74371838-4403-4297-ae38-4419189355bf" />

---

## ✨ Features

This project includes all the core requirements from the assignment, as well as several bonus features to enhance the user experience.

### Core Features
* [cite_start]**Product Fetching:** Fetches product data from the `fakestoreapi.com` API. [cite: 8]
* [cite_start]**Search:** Instantly filter products by title. [cite: 9]
* [cite_start]**Filter:** Filter products by category using a dropdown. [cite: 9]
* [cite_start]**Sort:** Sort products by price (Low to High / High to Low). [cite: 9]
* [cite_start]**Responsive Design:** The layout is fully responsive, adjusting from a 3-column grid on desktops to a single column on mobile. [cite: 10]
* **Pagination:** Displays 9 products per page with "Next" and "Previous" buttons for navigation.
* **Loading & Error States:** A skeleton loader is shown while data is fetching, and an error message appears if the API call fails.

### Bonus & Advanced Features
* [cite_start]**Product Detail Modal:** Clicking a product card opens a detailed modal with the full description, rating, and price. [cite: 11]
* **Shopping Cart:**
    * "Add to Cart" functionality from the product modal.
    * A cart icon in the header updates with a live item count.
    * Clicking the cart icon reveals a dropdown summary.
* **Cart Dropdown:**
    * Lists all items in the cart.
    * Shows the total price.
    * Allows users to "Remove" items from the cart.

---

## 💻 Tech Stack

* [cite_start]**React:** Used for building the UI with components and managing state with `useState` and `useEffect` hooks. [cite: 12]
* **Vite:** For a fast, modern build environment.
* **Tailwind CSS:** For all utility-first styling and the custom dark mode theme.

---

## ⚙️ Setup and Run Locally

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YourUsername/frontend-intern-assignment.git](https://github.com/YourUsername/frontend-intern-assignment.git)
    ```

2.  **Navigate into the project directory:**
    ```bash
    cd frontend-intern-assignment
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open **`http://localhost:5173`** (or the port shown in your terminal) in your browser.
