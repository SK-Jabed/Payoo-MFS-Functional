document.getElementById("withdraw-money-btn")
    .addEventListener("click", function(event) {
        event.preventDefault();
        const cashOut = getInputFieldValueById("input-cash-out")
        const pinNumber = getInputFieldValueById("input-cash-out-pin");
        // console.log("inside the click handler", cashOut, pinNumber);

        if (isNaN(cashOut)) {
            alert("Failed To Cash Out")
            return;
        }

        if (pinNumber === 1234) {
            const balance = getTextFieldValueById("account-balance");

            if (cashOut > balance) {
                alert("You do not have enough money to cash out");
                return;
            }

            const newBalance = balance - cashOut;
            document.getElementById("account-balance").innerText = newBalance;

            // add to transaction history
            const div = document.createElement("div");
            div.classList.add("bg-yellow-300");
            div.innerHTML = `
                <h4>Cash Out</h4>
                <p>${cashOut}TK Withdraw, New Balance ${newBalance}</p>
            `

            document.getElementById("transaction-container").appendChild(div);
        }
        else {
            alert("No money for you");
        }
    })