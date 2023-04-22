import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Index';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <>
			<Header/>

			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='contact' element={<Contact />}/>
			</Routes>

			<Footer/>
		
		</>
    
  );
}

export default App;
