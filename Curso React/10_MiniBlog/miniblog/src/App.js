// CSS
import "./App.css";

// components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// firebase (apenas inicializa)
import "./firebase/config";

// routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// context
import { AuthProvider } from "./context/AuthContext";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreatePost from "./pages/CreatePost/CreatePost";
import EditPost from "./pages/CreatePost/EditPost";
import Post from "./pages/CreatePost/Post";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/posts/create" element={<CreatePost/>} />
              <Route path="/posts/edit/:id" element={<EditPost />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
