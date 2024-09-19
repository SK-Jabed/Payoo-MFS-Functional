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