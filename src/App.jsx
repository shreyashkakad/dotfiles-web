import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import Upload from "./pages/Upload";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/upload" element={<Upload />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;