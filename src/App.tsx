import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";

function App() {
    return (
        <Routes>
            {/* <Route path="/" element={<LandingPage />} /> */}
            {/* <Route path="/auth/login" element={<LoginForm />} /> */}

            <Route path="/" element={<RootLayout />}>
                <Route index element={<LandingPage />} />
                <Route path="about" element={<About />} />
                {/* <Route path="auth/signup" element={<Signup />} /> */}
                {/* <Route path="about" element={<AboutPage />} />{" "}
                {/* Renders at /about */}
                {/* <Route path="contact" element={<ContactPage />} />{" "} */}
                {/* Renders at /contact */}
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
