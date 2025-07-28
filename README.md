# Cool Storage Cost Saving with IOPS Calculator

## Introduction

Optimizing cloud storage costs while ensuring adequate performance is a critical challenge for businesses. This project presents a React-based "Cool Storage Cost Saving with IOPS Calculator" tool designed to help users make informed decisions about their data center storage strategies. By providing real-time cost comparisons and tailored IOPS subscription recommendations across various Azure storage options, this tool empowers users to optimize data center IOPS and identify significant cooling access cost savings across different geographical regions.

Whether you're managing a 100 TB dataset in Australia and aiming to save $126 monthly ($1,520 annually), or handling a scenario with 1,000 users each requiring 100 IOPS, this calculator helps visualize potential savings and select the most suitable storage tier.

<br/>

## Table of Contents

1.  Key Technologies and Skills
2.  Features
3.  Installation
4.  Usage
5.  Contributing
6.  License

<br/>

## Key Technologies and Skills

* **React:** Frontend development for a dynamic and interactive user interface.
* **JavaScript:** Core language for the application logic.
* **HTML/CSS:** Structuring and styling the web application.
* **IOPS (Input/Output Operations Per Second) Calculation:** Logic for determining IOPS requirements based on user input.
* **Cost Calculation Logic:** Algorithms for estimating storage and cooling costs across different Azure storage tiers and regions.
* **Data Visualization:** Presenting cost comparisons and recommendations clearly.

<br/>

## Features

* **Real-time Cost Comparison:** Instantly view the difference in monthly and annual costs with and without "cool access" storage options.
* **Regional Cost Analysis:** Calculate cost savings for various Azure regions (e.g., Australia, US, Europe, Asia, etc.), accounting for regional pricing variations.
* **Tailored IOPS Recommendations:** Receive personalized IOPS subscription suggestions based on your data size, user count, and per-user IOPS requirements.
* **Multiple Storage Options:** Compare costs and performance across 5 distinct Azure storage options:
    * **Standard Storage**
    * **Premium Storage**
    * **Ultra ANF (Azure NetApp Files)**
    * **Azure Files**
    * **Azure Files Premium**
* **Scalability Scenarios:** Handle complex scenarios, such as calculating costs for a large number of users with specific IOPS demands (e.g., 1,000 users each needing 100 IOPS).
* **Intuitive User Interface:** A user-friendly interface makes it easy to input parameters and understand the results.

<br/>

## Installation

To get a local copy up and running, follow these simple steps.

**Prerequisites:**

* Node.js (LTS version recommended)
* npm or yarn

**Steps:**

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/cool-storage-iops-calculator.git](https://github.com/your-username/cool-storage-iops-calculator.git)
    cd cool-storage-iops-calculator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```

<br/>

## Usage

To run the application locally:

1.  **Start the development server:**
    ```bash
    npm start
    # OR
    yarn start
    ```
2.  Open your web browser and navigate to `http://localhost:3000`.

The application will guide you through entering your dataset size, number of users, per-user IOPS requirements, and desired region to calculate and compare storage costs and receive IOPS recommendations.

<br/>
