import { Container, Heading } from "@chakra-ui/react";
import HeadingTitle from "../../Utilities/HeadingTitle";
import ButtonSelector from "./ButtonSelector";

const HomePage = () => {
	return (
		<Container
			maxW='100%'
			h='100vh'
			centerContent
		>
			<HeadingTitle/>
			<ButtonSelector path1="/demo" title1="Create Demo"
            path2="/envelope" title2="Create Envelope"/>
		</Container>
	);
};

export default HomePage;
