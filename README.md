# 📚 Library Management System (LMS)
A practical project for the **JavaScript 101** course provided by **Satr Platform**.

## 📝 Project Description
This project is a lightweight console-based system designed to manage library operations. It focuses on implementing core programming concepts in JavaScript, such as **2D Arrays** and **Conditional Logic**, to handle inventory and sales transactions.

## 🚀 Key Features
* **Inventory Management:** Add, store, and manage book data (ID, Title, Author, Price, and Quantity).
* **Flexible Search Engine:** Query books by ID, Title, or Author using efficient loops.
* **Smart Sales System:** * Verifies book availability and stock levels.
    * Validates customer balance before processing transactions.
    * Automatically updates stock levels (decrements quantity) after a successful sale.
* **Invoice Generation:** Prints transaction details, including the total cost and remaining balance, directly to the console.

## 🛠️ Tech Stack
* **Language:** JavaScript (ES6+).
* **Data Structures:** 2D Arrays (Matrix).
* **Logic:** Conditional Statements (If-else), Loops, and Object manipulation.

## 📖 Data Structure
Each book is stored as a sub-array within the main `Library` array in the following format:
`[Book ID, Book Title, Author, Price, Quantity]`

## 💻 Usage Example

```javascript
// Adding books to the library
AddToBooks(Library, 1, "Start with Why", "Simon Sinek", 80, 13);
AddToBooks(Library, 3, "Clean Code", "Robert Cecil Martin", 50, 5);

// Executing a purchase (Title, Requested Quantity, Customer Balance)
BuyBook(Library, 'Start with Why', 2, 1000);
```

## 💡 Technical Refactoring
To improve performance and code readability, I implemented:
1.  **Object Return Strategy:** The search function returns an object containing both the book data and its **Index**. This avoids redundant searches when updating the library array.
2.  **Robust Validation:** Added multiple guard clauses to handle edge cases like empty libraries, insufficient funds, or out-of-stock items.
