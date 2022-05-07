import { Heading } from "@chakra-ui/react";

const HeadingTitle = (params) => {
	return (
		<Heading
			as='h3'
			fontSize={{ base: "12px", sm: "20px", md: "25px", lg: "30px" }}
		>
			Welcome to the Demo. Choose your request type
		</Heading>
	);
};

export default HeadingTitle