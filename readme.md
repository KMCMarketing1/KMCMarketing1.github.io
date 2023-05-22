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
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }
    .form-group {
      margin-bottom: 20px;
    }
    .form-group label {
      display: block;
      font-weight: bold;
    }
    .form-group input {
      width: 100%;
      padding: 5px;
    }
    .form-group select {
      width: 100%;
      padding: 5px;
    }
    .form-group button {
      background-color: yellow;
      color: black;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
    }
    .result {
      font-weight: bold;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Service Price Calculator</h1>
    <form id="priceCalculatorForm" netlify>
      <div class="form-group">
        <label for="serviceSelect">Service:</label>
        <select id="serviceSelect" name="service">
          <option value="Instagram Followers | No Refill">Instagram Followers | No Refill</option>
          <!-- Rest of the options -->
        </select>
      </div>
      <div class="form-group">
        <label for="linkInput">Link:</label>
        <input type="text" id="linkInput" name="link">
      </div>
      <div class="form-group">
        <label for="quantityInput">Quantity:</label>
        <input type="number" id="quantityInput" name="quantity">
      </div>
      <button type="button" onclick="calculatePrice()">View Price</button>
    </form>
    <div class="result" id="priceResult"></div>
  </div>

  <script>
    function calculatePrice() {
      var serviceSelect = document.getElementById("serviceSelect");
      var selectedService = serviceSelect.options[serviceSelect.selectedIndex].value;
      var linkInput = document.getElementById("linkInput").value;
      var quantityInput = document.getElementById("quantityInput").value;
      var price = 0;

      // Price calculation code...

      // Calculate total price...

      // Display the result...
    }
  </script>
</body>
</html>
