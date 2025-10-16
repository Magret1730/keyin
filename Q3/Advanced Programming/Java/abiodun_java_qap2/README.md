# Object-Oriented Programming Lab – Aggregation & Composition

## Overview
This repository contains four problems that progressively explore **object-oriented programming (OOP)** concepts such as **composition**, **aggregation**, **method overloading**, and **class relationships**.  

Each problem builds on the previous one, starting from simple classes (`Customer`, `Money`, `MyPoint`) to more complex aggregated structures like `CampusMap`.

---

## Problems Breakdown

### Problem 1 – Customer & Account Classes
- **Goal**: Implement a `Customer` class and an `Account` class that composes a `Customer` instance.
- **Concepts Covered**:  
  - Encapsulation of fields  
  - Composition (Account *has a* Customer)  
  - Methods for deposits, withdrawals, and balance checks  

**Files**:
- `Customer.java`
- `Account.java`
- `TestAccount.java`

---

### Problem 2 – CreditCard & Money Classes
- **Goal**: Build a `CreditCard` class that aggregates a `Person` and `Money` objects.
- **Concepts Covered**:
  - Aggregation (`CreditCard` *has a* `Person` and *has a* `Money`)  
  - Overloading with copy constructors  
  - `equals`, `compareTo`, and `toString` methods  
  - Safe object returning to avoid leaking references  

**Files**:
- `Money.java`
- `Person.java`
- `Address.java`
- `CreditCard.java`
- `CreditCardDemo.java`

---

### Problem 3 – MyLine & MyRectangle Classes
- **Goal**: Model geometric shapes with points and rectangles.
- **Concepts Covered**:
  - Composition with `MyPoint` objects  
  - Methods to compute lengths, midpoints, perimeters, and areas  

**Files**:
- `MyPoint.java`
- `MyLine.java`
- `TestMyLine.java`
- `MyRectangle.java`
- `TestMyRectangle.java`

---

### Problem 4 – CampusMap Class
- **Goal**: Create a `CampusMap` class that aggregates shapes to represent a campus.
- **Concepts Covered**:
  - Aggregation of multiple object types (`MyRectangle`, `MyLine`, `MyCircle`)  
  - Management of collections (buildings, walkways, fountains)  
  - Methods to calculate totals (walkway length, fountain area)  
  - Relationship checks between buildings  

**Files**:
- `MyCircle.java`
- `CampusMap.java`
- `TestCampusMap.java`
