const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

// Routes
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

connectDB(); // connected to DB

const app = express();

app.use(cors()); // The cors middleware
// Use cookie-parser middleware
app.use(cookieParser());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Custom Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
console.log(process.env.PORT);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
