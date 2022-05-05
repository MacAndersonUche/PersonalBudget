import { Container, Text } from "@chakra-ui/react";
import OtherDemoMethods from "./OtherDemo";

const DemoPage = () => {
	return (
		<Container
			maxW='100%'
			h='100vh'
			centerContent
			fontSize={{ base: "16px", md: "30px", lg: "36px" }}
		>
			<Text>Welcome to the Demo. Choose your request type</Text>

			<OtherDemoMethods />
		</Container>
	);
};

export default DemoPage;
