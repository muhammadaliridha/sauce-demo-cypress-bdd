# SauceDemo Cypress BDD Automation

This project contains end-to-end test automation for [SauceDemo](https://www.saucedemo.com/) using **Cypress** with **Cucumber BDD**.

## 🚀 Features
- 📝 **BDD (Behavior-Driven Development)** using Gherkin syntax  
- ✅ **Cypress for automation** testing  
- 📋 **Test Scenarios Covered**:
  - Login tests
  - Adding products to the cart
  - Removing products from the cart
  - Checkout flow (positive & negative scenarios)
  - Validations on checkout page

## 📌 Tech Stack
- **Cypress** 🛠️ (JavaScript-based test framework)
- **Cucumber BDD** 📜 (`@badeball/cypress-cucumber-preprocessor`)
- **Mochawesome Reporter** 📊 (for test reports)

## 🛠 Setup & Installation

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-username/sauce-demo-cypress-bdd.git
cd sauce-demo-cypress-bdd
```

### 2️⃣ **Install Dependencies**
Make sure you have Node.js installed. If not, download and install it from Node.js official site.

Install Cypress & Required Packages
Run the following command to install all necessary dependencies:
```sh
npm install cypress @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor cypress-mochawesome-reporter --save-dev
```


**Dependency Breakdown**

✔ Cypress → Main testing framework

✔ @badeball/cypress-cucumber-preprocessor → Enables BDD with Cucumber syntax

✔ @bahmutov/cypress-esbuild-preprocessor → Required for handling ESBuild with Cypress

✔ cypress-mochawesome-reporter → Generates test reports
