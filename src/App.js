import React from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/Scroll/ScrollToTop';



//Pages
import Home from './pages/Home';
import Contact from './pages/ContactPage';
import Pricing from './pages/PricingPage';
import About from './pages/Aboutpage'



function App() {
	return (
		<Router>
			<GlobalStyle />
		 <Navbar />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/contact" exact element={<Contact />} />
				<Route path="/pricing" exact element={<Pricing />} />
				<Route path="/about" exact element={<About />} />
			</Routes>
			<Footer />
			<ScrollToTop />
		</Router>
	);
}

export default App;

