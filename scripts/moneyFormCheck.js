document.getElementById("honestMoneyForm").addEventListener("submit", function(event) {
    
    event.preventDefault(); // prevent page from refreshing when form submits

    let isValid = true; // form is valid until it's not

    // Retrieve values from the form
    const routingNumber = document.getElementById("routingNumber").value;
    const accountNumber = document.getElementById("accountNumber").value;

    // Select the messages in the <p> elements
    const routingError = document.getElementById("routingError");
    const accountError = document.getElementById("accountError");
    const submitSuccess = document.getElementById("submitSuccess");

    // Reset error messages
    routingError.style.display = "none";
    accountError.style.display = "none";
    submitSuccess.style.display = "none";

    // Validate Routing Number
    if (routingNumber === "") {
        routingError.style.display = "block";
        isValid = false;
    }

    // Validate Account Number
    if (accountNumber === "") {
        accountError.style.display = "block";
        isValid = false;
    }

    // If the form is complete show success message and confetti
    if(isValid) {
        submitSuccess.style.display = "block"
    
        confetti({
            particleCount:40,
            spread: 80,
            origin: { y: 0.5 } // Adjusts where confetti begins
        });
    }    
});