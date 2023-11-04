const axios = require("axios");
const { db } = require("../utils/admin");

const shortUrl = async (req, res, next) => {
  try {
    const LongUrl = req.query.url; // This should be the long URL you want to shorten
    console.log(req);
    console.log(req.query);
    console.log(req.query.url);
    // Make an Axios request to the shortening service
    const axiosResponse = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${LongUrl}`
    );

    if (axiosResponse.data && axiosResponse.data.result) {
      // Get the shortened URL from the API response
      const new_short_link = axiosResponse.data.result.full_short_link;

      // Save the shortened URL in the database
      await db.collection("Urls").add({ new_short_link });

      res.send(new_short_link);
    } else {
      // Handle the case where the API response does not contain the shortened URL
      res.status(500).send("Failed to shorten the URL.");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  shortUrl,
};
