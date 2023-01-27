import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import ProjectPage from "./pages/Project-Page";
import ScrollToTop from "./utils/scrollToTop";

import "./styles/reset.css";
import "./styles/main.css";

function App() {
    return (
        <div className="App">
            
            <Router>       
                
                <ScrollToTop />

                <Navbar />
                <Routes>
                    <Route path="/" element={<Projects />}/>
                    <Route path="/skills" element={<Skills />}/>
                    <Route path="/contacts" element={<Contacts />}/>
                    <Route path="/project-page/:id" element={<ProjectPage />}/>
                </Routes>
                <Footer />

            </Router>
        </div>
    );
}

export default App;
