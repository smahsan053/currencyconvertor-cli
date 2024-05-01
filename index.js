#! /usr/bin/env node
import inquirer from "inquirer";
import fetch from "node-fetch";
const currencyApi = async (currency) => {
    const data = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
    const response = await data.json();
    return response;
};
const fromCurrency = await inquirer.prompt({
    type: "input",
    name: "from",
    message: "Select your currency to convert From: "
});
const from = await currencyApi(fromCurrency.from.toLowerCase());
const toChoices = from[fromCurrency.from.toLowerCase()];
let choiceArr = [];
for (let currency in toChoices) {
    choiceArr.push(currency);
}
const initApp = async () => {
    const answer = await inquirer.prompt([
        {
            type: "rawlist",
            name: "to",
            choices: choiceArr,
            message: "Select your currency to convert To: ",
            default: 'usd'
        },
        {
            type: "number",
            name: "amount",
            message: "Enter amount to convert: "
        }
    ]);
    const { to, amount } = answer;
    const obj = await currencyApi(fromCurrency.from.toLowerCase());
    const value = obj[fromCurrency.from.toLowerCase()][to.toLowerCase()] * amount;
    console.log(value);
};
initApp();
