import { Button, Container } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ExpenseObject from "../../Utilities/ExpenseObject";
const DemoGet = () => {
	const [expense, setExpense] = useState([]);
    const [show, setShow] = useState(false)

	async function getData() {
		try {
			const response = await fetch("http://localhost:8080/expenses");

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
        setShow(true)
		getData();
	};

	return (
		<Container
			maxW='100%'
			h='100vh'
			centerContent
			fontSize={{ base: "16px", md: "30px", lg: "36px" }}
		>
			<Button
				colorScheme='teal'
				size='md'
				variant='solid'
				onClick={handleClick}
			>
				Click
			</Button>
			{show && <ExpenseObject expenseData={expense} />}
		</Container>
	);
};

export default DemoGet;
