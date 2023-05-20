exports.handler = async (event) => {
  try {
    // Parse the incoming request body
    const data = JSON.parse(event.body);

    // Retrieve the name from the request body
    const name = data.name || 'Anonymous';

    // Prepare the response body
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello, ${name}! This is a serverless function response.`,
      }),
    };

    return response;
  } catch (error) {
    // Handle any errors and return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
