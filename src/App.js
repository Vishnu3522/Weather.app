import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Landing Page/Navbar';
import FAQSection from './components/Landing Page/FAQSection';
import Footer from './components/Landing Page/Footer';
import About from './components/AboutPage';
import Contact from './components/ContactPage';
import Feedback from './components/FeedbackForm';
import Home from './components/Landing Page/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<React.Fragment>
          <Home/>
          <FAQSection />
        </React.Fragment>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
