
## 1. Difference between `var`, `let`, and `const`

- **`var`**
  - Function-scoped.
  - Can be redeclared and updated.
  - Hoisted (moved to the top of its scope) but initialized as `undefined`.

- **`let`**
  - Block-scoped (only available inside `{ }`).
  - Can be updated but not redeclared in the same scope.
  - Hoisted but not initialized (exists in the *Temporal Dead Zone* until declared).

- **`const`**
  - Block-scoped.
  - Cannot be reassigned after declaration.
  - Must be initialized when declared.
  - If assigned an object or array, the reference cannot change, but properties/elements inside can be modified.

---

## 2. Difference between `map()`, `forEach()`, and `filter()`

- **`map()`**
  - Creates a new array by transforming each element.
  - Returns a new array of the same length.
  - Example:  
    ```js
    const nums = [1, 2, 3];
    const doubled = nums.map(x => x * 2);
    console.log(doubled); // [2, 4, 6]
    ```

- **`forEach()`**
  - Executes a function for each array element.
  - Does **not** return a new array (returns `undefined`).
  - Example:  
    ```js
    const nums = [1, 2, 3];
    nums.forEach(x => console.log(x * 2)); 
    // Output: 2, 4, 6
    ```

- **`filter()`**
  - Creates a new array with elements that match a condition.
  - Returns a subset of the original array.
  - Example:  
    ```js
    const nums = [1, 2, 3, 4];
    const evens = nums.filter(x => x % 2 === 0);
    console.log(evens); // [2, 4]
    ```

---

## 3. Arrow Functions in ES6

- Provide a shorter syntax for writing functions.
- Do not have their own `this` (they inherit from the enclosing scope).
- Cannot be used as constructors.
  
## 4. How does destructuring assignment work in ES6?
 - Destructuring assignment in ES6 allows you to unpack values from arrays or properties from objects and assign them to variables in a simpler, cleaner way.
 - 
## 5. Explain template literals in ES6. How are they different from string concatenation?

 - Template literals are a new way to create strings in ES6 using backticks (`) instead of quotes.
 - They allow you to embed variables and expressions directly into a string with ${ }.



## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-006

### 📅 Deadline For 60 marks: 9th September, 2025 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks : 13th September , 2025 (6:00 pm⏱️)

### 📅 Deadline For 30 marks: Any time after 13the September , 2025 (6:01 pm⏱️).

---

# Green Earth

## Private Repository: https://classroom.github.com/a/nVZrg5R9

## Alternative Private Repository: https://classroom.github.com/a/KCGI14ST

## Alternative Private Repository: https://classroom.github.com/a/JMuIYqgK

---

## 🌴 API Endpoints

1. Get 🌴All Plants

```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>

```bash
https://openapi.programming-hero.com/api/categories
```

3. Get 🌴plants by categories <br/>

```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```

---

## ✅ Main Requirements

#### 1) Navbar

- Website **logo/name** on the **left**
- **Menu items** in the **center**
- **Plant a Tree button** on the **right**

#### 2) Banner

- A **background image**
- A **title** and **subtitle**
- A **centered button**

#### 3) About Campaign

- **Section heading**
- **Image on the left**, **text on the right**

#### 4) Our Impact Section

- Show **3 cards** with campaign **statistics**

#### 5) Plant a Tree Today Section & Footer

- **Form**: Name, Email, Number of Trees
- **Footer** with copyright info

#### 6) Responsiveness

- Website must be **mobile responsive**

---

#### 7) Create a README file to answer the following question-

#### 1) What is the difference between var, let, and const?

#### 2) What is the difference between map(), forEach(), and filter()?

#### 3) What are arrow functions in ES6?

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?

## ⚙️ Functionalities

1. Category Loading
   Load Tree Categories dynamically on the left side.

2. Category Click → Tree Data
   On clicking a category: load trees of that category.

Display in a 3-column card layout.

3.  Card Contents
    Each card includes:

           - Image

           -  Name

           - Short description

           - Category

           - Price

           - Add to Cart button

4.  Modal on Card Click
    Clicking a tree name on a card opens a modal with full tree details.

## 🧪 Challenges

    1) Add to Cart
    Clicking Add to Cart: - Adds the tree to Cart List
                          - Shows tree name

    2) Total Calculation
    Calculate total price of trees in cart.

    3) Remove from Cart
    Clicking ❌ removes tree and deducts price from total.

    4) Loading Spinner
    Show spinner while data is loading.

    5) Active Button State
    Highlight active category button when selected.

🧰 Technology Stack:

        HTML

        CSS (Vanilla / Tailwind / DaisyUI)

        JavaScript (Vanilla only, no frameworks)

📌 Rules
✅ At least 5 meaningful commits

❌ No dummy text or Lorem Ipsum — must use relevant content

## 🔗 Submission

- **Live Link :** YOUR_DEPLOYED_URL_HERE
- **GitHub Private Repository:** YOUR_REPO_URL_HERE

---
