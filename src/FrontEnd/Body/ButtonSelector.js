import { Button, Stack } from "@chakra-ui/react";

const ButtonSelector = () => {
	return (
		<div>
			<Stack spacing={4} direction='row' align='center'>
				<Button colorScheme='teal' size='md' variant='solid'>
					Create Envelope
				</Button>
				<Button colorScheme='teal' size='md' variant='solid'>
					Use Demo Envelope
				</Button>
			</Stack>
		</div>
	);
};

export default ButtonSelector;
