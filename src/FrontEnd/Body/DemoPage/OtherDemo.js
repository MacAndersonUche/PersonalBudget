import { Button, Container, HStack, Link } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ExpenseObject from "../../Utilities/ExpenseObject";
import { Link as ReachLink } from "react-router-dom";
const OtherDemoMethods = () => {
	const [expense, setExpense] = useState([]);
	const [show, setShow] = useState(false);

	async function getData() {
		try {
			const response = await fetch("https://wqwqz9vy34.execute-api.us-east-1.amazonaws.com/latest/expenses");

			if (response.ok) {
				const data = await response.json();
				console.log(data);
				setExpense(data);
				return data;
			}
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		getData();
	}, []);

	const handleClick = () => {
		setShow(true);
		getData();
	};

	return (
		<Container
			maxW='100%'
			h='100vh'
			centerContent
			// fontSize={{ base: "16px", md: "30px", lg: "36px" }}
		>
			<HStack>
				<Button 
					size="sm"
					colorScheme='teal'
					variant='solid'
					onClick={handleClick}
				>
					Get
				</Button>
				<Button 
					size="sm"
					colorScheme='teal'
					variant='solid'
				>
					<Link as={ReachLink} to="/demo/postDemo">POST</Link>
				</Button>
				<Button 
					size="sm"
					colorScheme='teal'
					variant='solid'
					onClick={handleClick}
				>
					<Link as={ReachLink} to="/demo/putDemo">PUT</Link>
				</Button>
				<Button 
					size="sm"
					colorScheme='teal'
					variant='solid'
					onClick={handleClick}
				>
					<Link as={ReachLink} to="/demo/deleteDemo">DELETE</Link>
				</Button>
			</HStack>
			{show && <ExpenseObject expenseData={expense} />}
		</Container>
	);
};

export default OtherDemoMethods;
