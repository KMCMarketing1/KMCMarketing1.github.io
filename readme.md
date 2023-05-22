// Create a new Netlify function
const netlify = require("netlify");

// Define the function
function handleFormSubmission(event, context) {
  // Get the form data
  const formData = event.body;

  // Do something with the form data
  console.log(formData);

  // Return a success response
  return {
    statusCode: 200,
    body: "Success!",
  };
}

// Export the function
module.exports = handleFormSubmission;
