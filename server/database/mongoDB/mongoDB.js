const mongoose = require('mongoose');
const {
  MONGO_USER,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_PASSWORD,
  MONGO_NAME
} = require('../../config/mongoSettings');

let mongoDB = null;

try {
  const connectDB = async () => {
    mongoDB = await mongoose.connect(
      `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_NAME}`,
      {
        useNewUrlParser: true
      }
    );
    console.info('Mongodb has been connected');
    return mongoDB;
  };

  connectDB();
} catch {
  console.error('Error while trying to connect with mongodb');
}

module.exports = {
  mongoDB
};
