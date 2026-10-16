# WanderLust 🏡

A full-stack property rental web application inspired by Airbnb, where users can explore property listings, create their own listings, and share reviews.

## ✨ Features

- Browse property listings
- Create, edit, and delete listings
- User authentication and authorization
- Add and delete reviews
- Image uploads using Cloudinary
- Interactive maps and location-based listings
- Responsive user interface
- MongoDB database integration
- Session-based authentication and flash messages

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, EJS, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Authentication:** Passport.js
- **Image Storage:** Cloudinary
- **Deployment:** Render

## ⚙️ Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/bhumikarawal1111/Wanderlust.git
   cd Wanderlust
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and configure the following environment variables:

   ```env
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SECRET=your_session_secret
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the application:

   ```bash
   node app.js
   ```

5. Open `http://localhost:8080/listings` in your browser.

## 🔐 Environment Variables

Keep your database credentials, session secret, and Cloudinary API keys private. Never commit your `.env` file to GitHub.

## 🚀 Deployment

The application can be deployed using Render with MongoDB Atlas as the database and Cloudinary for image storage. Configure the required environment variables in the deployment dashboard.

## 👩‍💻 Author

**Bhumika Rawal**

- GitHub: [bhumikarawal1111](https://github.com/bhumikarawal1111)

## 🤖 Acknowledgements

- **ChatGPT** — Assisted with documentation and development guidance.

---

*WanderLust — Discover places, create experiences.*
