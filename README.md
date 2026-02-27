📄 Module 4 Solution:

This repository contains the Module 4 Coding Assignment Solution for the “HTML, CSS, and JavaScript for Web Developers” course. The goal of this assignment was to demonstrate JavaScript functionality and modular coding by processing a list of names and generating appropriate greetings (“Hello” or “Good Bye”) based on specific rules.

🚀 Overview:

In this assignment, you will:

- Loop through an array of names using JavaScript.

- Print either “Hello <Name>” or “Good Bye <Name>” to the console.

- If the name starts with the letter J/j, output a “Good Bye” greeting.

- Otherwise, output a “Hello” greeting.

- This repository implements the solution using plain JavaScript modular files.

📁 Repository Structure:

module4-solution/

│
├── SpeakGoodBye.js         # Module that handles goodbye greetings

├── SpeakHello.js           # Module that handles hello greetings

├── script.js               # Main JavaScript that uses the modules

├── index.html              # Page that loads the scripts

└── README.md               # Documentation

🛠 Features:

- Modular JavaScript – greet functions separated into reusable files.

- Console Output – greeting messages printed to the developer console.

- Language Logic – determines greeting type based on the first character of each name.

📥 How to Run:

Clone the repository

- git clone https://github.com/Esdra-Fontes/module4-solution.git
- Open the project
- Open index.html in your web browser.
- View output
- Open your browser’s developer console (e.g., press F12) to see the greeting messages.

💡 How It Works:

- SpeakHello.js exports a method to generate “Hello” greetings.
- SpeakGoodBye.js exports a method to generate “Good Bye” greetings.
- script.js iterates over the list of names and chooses which greeting function to call.
- The results are printed to the console.

🧠 Coding Best Practices:

This solution

✔ Uses Immediately Invoked Function Expressions (IIFEs) to avoid polluting global scope

✔ Separates logic into clean, readable modules

✔ Follows consistent naming and JavaScript standards
