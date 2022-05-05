import { HStack } from "@chakra-ui/react";

const ExpenseObject = ({ expenseData }) => {
	return (
		<HStack fontSize={{ base: "16px", md: "30px", lg: "35px" }} spacing="10">
			{expenseData.data &&
				expenseData.data.map((item) => {
					return (
						<div key={item.uniqueID}>
							<h3>Title: {item.category}</h3>
							<p>Expense Id: {item.uniqueID}</p>
							<p>Cost: £{item.expenseBudget}</p>
						</div>
					);
				})}
		</HStack>
	);
};

export default ExpenseObject;
