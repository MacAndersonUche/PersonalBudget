// import { ChakraProvider } from "@chakra-ui/react"

import { Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DemoGet from "./FrontEnd/Body/DemoPage/DemoGet";
import DemoPage from "./FrontEnd/Body/DemoPage/DemoPage";
import EnvelopePage from "./FrontEnd/Body/EnvelopesPage/EnvelopePage";
import HomePage from "./FrontEnd/Body/HomePage/HomePage";

import Navabar from "./FrontEnd/Navigation/Navbar";

function App() {
	return (
		<Router>
			<Container maxW='100%' bg='blue.400' h='100vh'>
			<Navabar />
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route exact path='/demo' element={<DemoPage />} />
				<Route exact path='/envelope' element={<EnvelopePage />} />
				<Route exact path='/demo/get' element={<DemoGet />} />
			</Routes>

			</Container>
		</Router>
	);
}

export default App;
