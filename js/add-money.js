/**
 * How to get a number from an input field
 * 1. create a variable 
 * 2 Right side document.getElementById(id)
 * 3. .value
 * 4. parseFloat
 */


document.getElementById("add-money-btn")
    .addEventListener("click", function(event) {
        event.preventDefault();

        // const addMoney = document.getElementById("input-add-money").value;
        // const addMoneyNumber = parseFloat(addMoney);
        // getInputFieldValueById();
        // const addMoney = getInputFieldValueById();
        // console.log("add money value", addMoney);

        const addMoney = getInputFieldValueById("input-add-money");
        const pinNumber = getInputFieldValueById("input-pin-number");

        if (isNaN(addMoney)) {
            alert("Failed To Add Money");
            return;
        }
        
        // Wrong Way to verify. Don't try this at your serious website
        if (pinNumber === 1234) {
            const balance = getTextFieldValueById("account-balance");
            const newBalance = balance + addMoney;

            document.getElementById("account-balance").innerText = newBalance;

            // Add to transaction history
            const paragraph = document.createElement("p");
            paragraph.innerText = `Added: ${addMoney}TK Balance: ${newBalance}`
            console.log(paragraph);

            // Should be a common function 
            document.getElementById("transaction-container").appendChild(paragraph);
        }
        else {
            alert("Failed to add the money. Try again later");
        }
    });