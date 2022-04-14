// import { ChakraProvider } from "@chakra-ui/react"

import { Container, Text } from "@chakra-ui/react";
import ButtonSelector from "./FrontEnd/Body/ButtonSelector";
import Navabar from "./FrontEnd/Navigation/Navbar";

function App() {
	return (
		<Container maxW='100%' bg='blue.400' h='100vh'>
			<Navabar />

			<Container
				maxW='100%'
				h='100vh'
				centerContent
				fontSize={{ base: "18px", md: "40px", lg: "40px" }}
			>
				<Text>Welcome to Macs Budget Planner. Choose your action</Text>
				<ButtonSelector />
			</Container>
		</Container>
	);
}

export default App;
