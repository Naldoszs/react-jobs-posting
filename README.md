# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React + Vite + JSON Server

This project combines React with Vite and a mock REST API powered by [`json-server`](https://github.com/typicode/json-server). It allows easy frontend development with a simple backend for testing and prototyping.

---

## 🚀 Features

- Simulates a real API with full CRUD functionality (GET, POST, PUT, DELETE)
- Quick setup for local development
- Can be deployed or run locally

---

## 📌 Setup & Installation

### 1️⃣ Clone this repository

```sh
git clone https://github.com/your-username/json-server-project.git
cd json-server-project
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Start the JSON Server

```sh
npx json-server --watch db.json --port 3800
```

> This will start the server at `http://localhost:3800`

---

## 📡 API Endpoints

### 📌 Fetch all items

```http
GET /your-endpoint
```

### 📌 Fetch a single item

```http
GET /your-endpoint/:id
```

### 📌 Add a new item

```http
POST /your-endpoint
```

**Body:**

```json
{
  "name": "Sample Item",
  "description": "This is a sample item"
}
```

### 📌 Update an item

```http
PUT /your-endpoint/:id
```

**Body:**

```json
{
  "name": "Updated Item",
  "description": "Updated description"
}
```

### 📌 Delete an item

```http
DELETE /your-endpoint/:id
```

---

## 🌍 Deployment

### Deploying to Render

1. Create a new repository on GitHub and push your project.
2. Go to [Render](https://render.com/) and create a new service.
3. Select **Static Site** for React frontend and **Web Service** for JSON Server.
4. For JSON Server, set **Start Command** to:
   ```sh
   npx json-server --watch db.json --port 5000
   ```
5. Deploy and get your live API URL!

---

## 🛠 Notes

- Replace `/your-endpoint` with your actual API routes (e.g., `/users`, `/posts`).
- Update `db.json` with your data structure.
- Use `http://localhost:3800` for local testing or your Render API URL when deployed.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
