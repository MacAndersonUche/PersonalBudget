import { Button, Link, Stack } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const ButtonSelector = ({path1,path2,title1,title2}) => {
	return (
		<div>
			<Stack spacing={4} direction='row' align='center'>
				<Button colorScheme='teal' size='md' variant='solid'>
					<Link as={ReachLink} to={path1}>
						{title1}
					</Link>
				</Button>
				<Button colorScheme='teal' size='md' variant='solid'>
					<Link as={ReachLink} to={path2}>
						{title2}
					</Link>
				</Button>
			</Stack>
		</div>
	);
};

export default ButtonSelector;
