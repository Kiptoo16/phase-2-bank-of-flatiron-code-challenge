BANK OF FLATIRON TRANSACTIONS MANAGEMENT APP

WEEK 2 CODE CHALLENGE

Vercel Link [https://phase-2-bank-of-flatiron-code-challenge-one.vercel.app/]

Usage
To run the application locally:

Clone the repository: git clone [git@github.com:Kiptoo16/phase-2-bank-of-flatiron-code-challenge.git] 
Navigate to the project directory: cd repository Open index.html in your browser.


Overview
This React application allows users to manage financial transactions. Users can view transactions in a table, add new transactions, search through them, and sort them by category or description.

Features

1. View Transactions: Displays a list of transactions in a table format.
2. Search Transactions: Filters transactions based on a search term.
3. Sort Transactions: Sorts transactions by category or description.
4. Add Transactions: Allows users to add new transactions.
4. Delete Transactions: Provides functionality to delete transactions.

Components
Home
The main component of the application, which integrates various functionalities:

State Management:

transactions: Holds the list of transactions.
term: Holds the search term for filtering transactions.
sortType: Tracks the current sorting type.
Effects:

Fetches transactions from an API on component mount.
Functions:

fetchTransaction(): Fetches transactions from the backend and updates the state.
handleSearch(searchValue): Updates the search term and filters transactions.
addTransaction(newTransaction): Adds a new transaction to the backend.
handleDelete(id): Deletes a transaction by ID.
handleSort(type): Sorts transactions by category or description.
TransactionTable
Displays a table of transactions with options to delete and edit transactions.

Props:

transactions: Array of transaction objects.
onDelete: Function to handle transaction deletion.
AddTransactionForm
Form for adding new transactions.

Props:

onAdd: Function to handle adding a new transaction.
SearchBar
A search input component for filtering transactions based on the description.

Props:

onSearch: Function to handle search input changes.
API Endpoints
GET /transactions: Fetches all transactions.
POST /transactions: Adds a new transaction.
DELETE /transactions/
: Deletes a transaction by ID.
Styling
The application uses Bootstrap for styling. Ensure you have Bootstrap included in your project.

Contributing
Feel free to submit issues or pull requests if you find bugs or have suggestions for improvements.

License
This project is licensed under the MIT License. See the LICENSE file for details.

@Kevin Kiptoo 2024
