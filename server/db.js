const mongoose = require("mongoose");
const colors = require("colors");

const dbConnect = async () => {
  try {
    const connectionString = await mongoose.connect("mongodb://127.0.0.1:27017/WhatsApp", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      colors.brightMagenta(
        `\nDB connected: ${connectionString.connection.host}\n`
      )
    );
  } catch (error) {
    console.log(colors.brightRed("\nConnection to link DB failed\n"));
  }
};

module.exports = dbConnect;
