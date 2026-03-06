# URL Shortener

A URL Shortener web application that generates a unique short ID for long URLs. Users can use the generated short ID to redirect to the original website through the application.

---

## 🚀 Features

- Shorten long URLs instantly
- Redirect users using generated short ID
- Track number of clicks for each URL
- Store URLs in MongoDB database
- Simple and clean user interface
- User authorization support
- Secure middleware for login and authentication

---

## 🛠 Tech Stack

**Frontend**

- HTML
- Tailwind CSS
- EJS (Embedded JavaScript Templates)

**Backend**

- Node.js
- Express.js

**Database**

- MongoDB
- Mongoose

**Libraries & Tools**

- NanoID
- Cookie Parser
- JWT (for authentication)
- Git & GitHub

---

## ⚙️ Installation

### 1. Clone the repository

```
git clone https://github.com/your-username/url-shortener.git
```

### 2. Go to the project directory

```
cd url-shortener
```

### 3. Install dependencies

```
npm install
```

### 4. Create environment variables

Create a `.env` file in the root folder and add:

```
PORT=8000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Application

Start the server:

```
npm start
```

or

```
node app.js
```

The application will run on:

```
http://localhost:8000
```

---

## 🔄 How It Works

1. User enters a **long URL**
2. Server generates a **short unique ID** using NanoID
3. URL and ID are stored in **MongoDB**
4. When the short URL is visited:
   - Server finds the original URL
   - Redirects the user
   - Increments the click count

---

## 📊 Example

**Original URL**

```
https://www.example.com/very-long-url-example
```

**Short URL**

```
http://localhost:8000/abc123
```

---

## 🔮 Future Improvements

- QR code generation for URLs
- Custom short URLs
- Analytics dashboard
- URL expiration feature
- Rate limiting
- User accounts and dashboards
