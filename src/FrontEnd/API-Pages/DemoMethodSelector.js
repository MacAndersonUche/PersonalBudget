import { HStack } from "@chakra-ui/react";

const DemoMethodSelector = (params) => {
	return (
		<div>
			<Stack spacing={4} direction='row' align='center'>
				<Button colorScheme='teal' size='lg'>
					Get Envelopes
				</Button>
				<Button colorScheme='teal' size='lg'>
					Post Envelope
				</Button>
				<Button colorScheme='teal' size='lg'>
					Amend Envelope
				</Button>
				<Button colorScheme='teal' size='lg'>
					Delete
				</Button>
			</Stack>
			<FormControl>
                <HStack>
				<FormLabel htmlFor='email'>Email address</FormLabel>
				<Input id='email' type='email' />
                </HStack>
                <HStack>
				<FormLabel htmlFor='email'>Email address</FormLabel>
				<Input id='email' type='email' />
                </HStack>

			</FormControl>
		</div>
	);
};

export default DemoMethodSelector;
