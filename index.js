import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import ReviewsDAO from "./dao/reviewsDAO.js";
import RestaurantsDAO from "./dao/restaurantsDAO.js";
dotenv.config(); //Load npm environmentals
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000; //if 5000 cannot be accessed we use 8000

MongoClient.connect(
  //connecting to database
  process.env.RESTREVIEWS_DB_URI,
  {
    maxPoolSize: 50, //Only 50 people can connect at a time
    wtimeoutMS: 2500, // after 2500ms request will timeout
    useNewUrlParser: true,
  }
)
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await RestaurantsDAO.injectDB(client);
    await ReviewsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`Listeninig at port ${port}`);
    });
  });
