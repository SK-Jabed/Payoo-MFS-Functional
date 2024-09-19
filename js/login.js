// document.getElementById("id").addEventListener("click", function())
// document.getElementById("login-btn")
//     .addEventListener("click", function() {})

// search: form submit reloading the page

// Step-1: Set Event Handler
document.getElementById("login-btn")
    .addEventListener("click", function(event) {
        // Step-2: Prevent Default Behavior (Prevent Reloading Browser)
        event.preventDefault();

        // Step-3: Get The Phone Number
        const phoneNumber = document.getElementById("phone-number").value;
        const pinNumber = document.getElementById("Pin-number").value;
        console.log(phoneNumber, pinNumber);

        // Step-4: Validate Phone and Pin
        // This is not the perfect way (temporary)
        if (phoneNumber === "5" && pinNumber === "1234") {
            console.log("You are logged in");
            window.location.href = "/home.html"
            // step-5: allow user to the website
        }
        else {
            alert("Wrong Phone Number or Pin");
        }
    })