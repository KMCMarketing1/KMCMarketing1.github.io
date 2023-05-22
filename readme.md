<!DOCTYPE html>
<html>
<head>
    <title>Service Price Calculator</title>
    <style>
        body {
            background-color: black;
            color: yellow;
            font-family: Arial, sans-serif;
        }

        .container {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
        }

        label {
            display: block;
            margin-bottom: 10px;
        }

        input[type="text"], select {
            width: 100%;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid yellow;
            margin-bottom: 10px;
        }

        button {
            background-color: yellow;
            color: black;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 4px;
            font-weight: bold;
        }

        button:disabled {
            background-color: gray;
            cursor: not-allowed;
        }

        #result {
            margin-top: 20px;
            font-size: 18px;
            font-weight: bold;
        }

        #bank-info {
            background-color: yellow;
            color: black;
            border: 1px solid black;
            padding: 10px;
            margin-top: 20px;
            text-align: left;
        }

        #payment-option {
            margin-top: 20px;
        }

        #payment-option p {
            margin-bottom: 5px;
        }

        #payment-screenshot {
            margin-top: 20px;
        }

        #submit-payment-btn {
            margin-top: 20px;
        }

        #payment-review-info {
            margin-top: 20px;
            font-size: 18px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>KMC SM Marketing</h2>
        <form name="price-calculator">
            <label for="service">Select a Service:</label>
            <select id="service" name="service">
                <option value="instagram_followers_no_refill">Instagram Followers | No Refill</option>
                <option value="instagram_impressions">Instagram Impressions</option>
                <option value="instagram_followers_stable_instant">Instagram Followers | Stable | Instant</option>
                <!-- Add more options as needed -->
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
           
