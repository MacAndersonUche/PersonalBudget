import { Container, Text } from "@chakra-ui/react";
import ButtonSelector from "./ButtonSelector";

const HomePage = () => {
	return (
		<Container
			maxW='100%'
			h='100vh'
			centerContent
			fontSize={{ base: "16px", md: "30px", lg: "36px" }}
		>
			<Text>Welcome to Macs Budget Planner. Choose your action</Text>
			<ButtonSelector path1="/demo" title1="Create Demo"
            path2="/envelope" title2="Create Envelope"/>
		</Container>
	);
};

export default HomePage;
