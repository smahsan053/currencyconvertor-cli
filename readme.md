# Currency Converter CLI

This is a simple command-line tool built with Node.js that allows users to convert currency values. It utilizes the Inquirer.js library for interactive prompts and the node-fetch library for making HTTP requests to fetch currency conversion data from an external API.

## Installation

// For Global Installation

npm install -g exchangexpert-cli

OR

// For Local Installation

npm i exchangexpert-cli

OR

// For running package without installation

npx exchangexpert-cli

## Features

- Select the currency you want to convert from.
- Choose the currency you want to convert to from a list of available options.
- Enter the amount to convert.
- Get the converted currency value.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.

## Usage

1. Run `node index` in your terminal to start the application.
2. Follow the prompts to select the currency to convert from, choose the currency to convert to, and enter the amount to convert.
3. The converted currency value will be displayed in the console.

## Example

? Select your currency to convert From: USD
? Select your currency to convert To: EUR
? Enter amount to convert: 100
250.97

## Technologies Used

- Node.js
- Inquirer.js
- node-fetch

## Credits

- [Inquirer.js](https://www.npmjs.com/package/inquirer)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- Currency data provided by [Fawaz Ahmed's Currency API](https://www.npmjs.com/package/@fawazahmed0/currency-api)

## License

This project is licensed under the [MIT License](LICENSE).
