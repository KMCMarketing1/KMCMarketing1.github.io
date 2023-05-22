<!DOCTYPE html>
<html>
<head>
    <title>Service Price Calculator</title>
    <style>
        /* CSS styles here */
        /* ... */
    </style>
</head>
<body>
    <div class="container">
        <h2>KMC SM Marketing </h2>
        <div class="instruction-bar">
            <p><strong>Instructions:</strong> Please follow the steps below to calculate the price and submit your payment:</p>
            <ol>
                <li>Select a service from the dropdown menu.</li>
                <li>Enter quantity, profile link, and phone number.</li>
                <li>Click the "View Price" button.</li>
                <li>Pay the corresponding amount to the provided bank information below.</li>
                <li>Submit a screenshot of your payment on Telegram @Ksmmmet.</li>
            </ol>
        </div>

        <form>
            <label for="service">Select a Service:</label>
            <select id="service" name="service">
                <!-- Options here -->
            </select>

            <label for="link">Insert Social Media Link:</label>
            <input type="text" id="link" name="link">

            <label for="quantity">Quantity:</label>
            <input type="text" id="quantity" name="quantity">

            <label for="phone">Phone Number:</label>
            <input type="text" id="phone" name="phone">

            <button type="button" onclick="calculatePrice()">View Price</button>
        </form>

        <div id="result"></div>

        <div id="bank-info">
            <p>Bank Name: Commercial Bank of Ethiopia</p>
            <p>Account: 1000452219305</p>
            <p>Name: Sofonyas Solomon</p>
        </div>

        <div id="payment-option">
            <p>Second Payment Option:</p>
            <p>Telebirr</p>
            <p>Account: 0911812380</p>
        </div>

        <div id="payment-screenshot">
            <label for="screenshot">Upload Payment Screenshot:</label>
            <input type="file" id="screenshot" name="screenshot">
        </div>

        <div id="submit-payment-btn">
            <button type="button" onclick="submitPayment()" disabled>Submit Payment</button>
        </div>

        <div id="payment-review-info"></div>
    </div>

    <script>
        function calculatePrice() {
            // JavaScript code for calculating the price
            // ...
        }

        function submitPayment() {
            // JavaScript code for submitting the payment
            // ...
        }

        function toggleSubmitButton() {
            // JavaScript code for enabling/disabling the submit button
            // ...
        }

        // Enable/disable submit button based on link and screenshot inputs
        document.getElementById("link").addEventListener("input", toggleSubmitButton);
        document.getElementById("screenshot").addEventListener("input", toggleSubmitButton);
    </script>
</body>
</html>
