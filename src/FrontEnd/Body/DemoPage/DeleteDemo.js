import {
	Input,
	Flex,
	Box,
	Heading,
	FormControl,
	Button,
	FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import ExpenseObject from "../../Utilities/ExpenseObject";

const DeleteDemo = () => {
	const [idState, setIdState] = useState("");
	const [expense, setExpense] = useState([]);
	const [show, setShow] = useState(false);

	function onChangeHandler(e) {
		setIdState(e.target.value);
	}

	function submitHandler(e) {
		e.preventDefault();
		getData();
	}

	async function getData() {
		try {
			const response = await fetch(
				`https://wqwqz9vy34.execute-api.us-east-1.amazonaws.com/latest/expenses/${idState}`,
				{method: "DELETE",});

			if (response.ok) {
				const data = await response.json();
				// console.log(data);
				setExpense(data);
				setShow(true);
				return data;
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<Flex width='full' align='center' justifyContent='center'>
				<Box
					p={8}
					maxWidth='500px'
					borderWidth={1}
					borderRadius={8}
					boxShadow='lg'
				>
					<Box textAlign='center'>
						<Heading>Deleting Object Demo</Heading>
					</Box>
					<Box my={4} textAlign='left'>
						<form onSubmit={submitHandler}>
							<FormControl mt={6}>
								<FormLabel>Expense ID</FormLabel>
								<Input
									type='number'
									placeholder='Enter Id'
									onChange={onChangeHandler}
								/>
							</FormControl>
							<Button
								type='submit'
								variant='outline'
								width='full'
								mt={4}
							>
								Delete
							</Button>
						</form>
					</Box>
				</Box>
			</Flex>

			
            {show && <ExpenseObject expenseData={expense} />}
		</div>
	);
};

export default DeleteDemo;
