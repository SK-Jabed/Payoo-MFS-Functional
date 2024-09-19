/**
 * Common Shared Functions Here
 */

// function getInputFieldValueById() {
//     const addMoney = document.getElementById("input-add-money").value;
//     return addMoney;

// }


function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function showSectionById(id) {
    // Hide All The Sections 
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("transaction-section").classList.add("hidden");

    // Show the with the provided id 
    document.getElementById(id).classList.remove("hidden");
}