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
    <form id="priceCalculatorForm">
      <div class="form-group">
        <label for="serviceSelect">Service:</label>
        <select id="serviceSelect" name="service">
          <option value="Instagram Followers | No Refill">Instagram Followers | No Refill</option>
          <option value="Instagram Impressions">Instagram Impressions</option>
          <option value="Instagram Followers | Stable | Instant">Instagram Followers | Stable | Instant</option>
          <option value="Instagram Likes (fast speed)">Instagram Likes (fast speed)</option>
          <option value="Instagram Likes > [SpeedMedium]">Instagram Likes > [SpeedMedium]</option>
          <option value="Facebook Profile Followers">Facebook Profile Followers</option>
          <option value="TikTok Followers | slow |">TikTok Followers | slow |</option>
          <option value="TikTok Likes [fastStart]">TikTok Likes [fastStart]</option>
          <option value="TikTok live streams + likes + Shares + Comments">TikTok live streams + likes + Shares + Comments</option>
          <option value="TikTok Views [fastStart]">TikTok Views [fastStart]</option>
          <option value="TikTok Shares [fastStart]">TikTok Shares [fastStart]</option>
          <option value="TikTok Saves">TikTok Saves</option>
          <option value="YouTube Subscribers [Guaranteed subscribers]">YouTube Subscribers [Guaranteed subscribers]</option>
          <option value="YouTube Views - Guaranteed views">YouTube Views - Guaranteed views</option>
          <option value="Youtube Likes">Youtube Likes</option>
          <option value="Youtube Comments Targeted">Youtube Comments Targeted</option>
          <option value="Youtube USA Social Shares">Youtube USA Social Shares</option>
          <option value="Telegram Channel Subscribers / Group (Fast)">Telegram Channel Subscribers / Group (Fast)</option>
          <option value="Telegram Post Views [fastStart]">Telegram Post Views [fastStart]</option>
          <option value="Telegram Post Reaction / Comments">Telegram Post Reaction / Comments</option>
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

      // Prices for each service
      switch (selectedService) {
        case "Instagram Followers | No Refill":
          price = 100 / 1000;
          break;
        case "Instagram Impressions":
          price = 50 / 5000;
          break;
        case "Instagram Followers | Stable | Instant":
          price = 400 / 1000;
          break;
        case "Instagram Likes (fast speed)":
          price = 100 / 5000;
          break;
        case "Instagram Likes > [SpeedMedium]":
          price = 70 / 5000;
          break;
        case "Facebook Profile Followers":
          price = 400 / 1000;
          break;
        case "TikTok Followers | slow |":
          price = 500 / 1000;
          break;
        case "TikTok Likes [fastStart]":
          price = 70 / 1000;
          break;
        case "TikTok live streams + likes + Shares + Comments":
          price = 150 / 1000;
          break;
        case "TikTok Views [fastStart]":
          price = 10 / 1000;
          break;
        case "TikTok Shares [fastStart]":
          price = 20 / 1000;
          break;
        case "TikTok Saves":
          price = 25 / 1000;
          break;
        case "YouTube Subscribers [Guaranteed subscribers]":
          price = 1500 / 1000;
          break;
        case "YouTube Views - Guaranteed views":
          price = 300 / 1000;
          break;
        case "Youtube Likes":
          price = 100 / 1000;
          break;
        case "Youtube Comments Targeted":
          price = 2500 / 1000;
          break;
        case "Youtube USA Social Shares":
          price = 350 / 1000;
          break;
        case "Telegram Channel Subscribers / Group (Fast)":
          price = 350 / 1000;
          break;
        case "Telegram Post Views [fastStart]":
          price = 30 / 1000;
          break;
        case "Telegram Post Reaction / Comments":
          price = 500 / 1000;
          break;
      }

      // Calculate total price
      var totalPrice = price * quantityInput;

      // Display the result
      var priceResult = document.getElementById("priceResult");
      priceResult.innerHTML = "Total Price: " + totalPrice.toFixed(2) + " Birr";
    }
  </script>
</body>
</html>
