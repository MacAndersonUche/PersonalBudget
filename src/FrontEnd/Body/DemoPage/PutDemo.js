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

const PutDemo = () => {
	const [expenseState, setExpenseState] = useState({ category: "", expenseBudget: "" , uniqueID: ""});
    const [show, setShow] = useState(false)
	const [expense, setExpense] = useState([]);



	function onChangeHandler(e) {
	
		const { name, value } = e.target;
		setExpenseState((prev) => ({
			...prev,
			[name]: value,
		}));

		// return expenseState
	}

	function submitHandler(e) {
        e.preventDefault();
        getData()
        // alert("Api updated")
		console.log(expenseState);
	}

	async function getData() {
		try {
			const response = await fetch(`https://wqwqz9vy34.execute-api.us-east-1.amazonaws.com/latest/expenses/${expenseState.uniqueID}?category=${expenseState.category}&expenseBudget=${expenseState.expenseBudget}`, {
                method: "PUT"
            });

			if (response.ok) {
				const data = await response.json();
				console.log(data);
				setExpense(data)
                setShow(true)
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
					<Heading>Creating Object Demo</Heading>
				</Box>
				<Box my={4} textAlign='left'>
					<form onSubmit={submitHandler}>
						<FormControl>
							<FormLabel>Expense ID</FormLabel>
							<Input
								type='number'
								name='uniqueID'
								value={expenseState.uniqueID}
								placeholder='Enter Unique ID'
								onChange={onChangeHandler}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Expense Title</FormLabel>
							<Input
								type='text'
								name='category'
								value={expenseState.category}
								placeholder='Enter category'
								onChange={onChangeHandler}
							/>
						</FormControl>
						<FormControl mt={6}>
							<FormLabel>Expense Cost</FormLabel>
							<Input
								type='number'
								name='expenseBudget'
								value={expenseState.expenseBudget}
								placeholder='Enter cost'
								onChange={onChangeHandler}
							/>
						</FormControl>
						<Button
							type='submit'
							// variantColor='teal'
							variant='outline'
							width='full'
							mt={4}
						>
                            Update API
						</Button>
					</form>
				</Box>
			</Box>
		</Flex>

            {show && <ExpenseObject expenseData={expense} />}
        </div>
	);
};

export default PutDemo;
