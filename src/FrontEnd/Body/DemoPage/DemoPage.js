import { Container, Heading } from "@chakra-ui/react";
import HeadingTitle from "../../Utilities/HeadingTitle";
import OtherDemoMethods from "./OtherDemo";

const DemoPage = () => {
	return (
		<Container maxW='100%' h='100vh' centerContent>
			<HeadingTitle/>

			<OtherDemoMethods />
		</Container>
	);
};

export default DemoPage;
