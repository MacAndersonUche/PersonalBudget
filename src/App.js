// import { ChakraProvider } from "@chakra-ui/react"

import { Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DemoPage from "./FrontEnd/Body/DemoPage/DemoPage";
import EnvelopePage from "./FrontEnd/Body/EnvelopesPage/EnvelopePage";
import HomePage from "./FrontEnd/Body/HomePage/HomePage";
import PostDemo from "./FrontEnd/Body/DemoPage/PostDemo";

import Navabar from "./FrontEnd/Navigation/Navbar";
import PutDemo from "./FrontEnd/Body/DemoPage/PutDemo";
import DeleteDemo from "./FrontEnd/Body/DemoPage/DeleteDemo";

function App() {
	return (
		<Router>
			<Container maxW='100%' bg='blue.400' h='100vh'>
			<Navabar />
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route exact path='/demo' element={<DemoPage />} />
				<Route exact path='/envelope' element={<EnvelopePage />} />
				<Route exact path="/demo/postDemo" element= {<PostDemo/>}/>
				<Route exact path="/demo/putDemo" element={<PutDemo/>} />
				<Route exact path="/demo/deleteDemo" element={<DeleteDemo/>}/>
			</Routes>

			</Container>
		</Router>
	);
}

export default App;
