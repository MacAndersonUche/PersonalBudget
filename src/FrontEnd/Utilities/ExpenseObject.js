import {  Box, Flex, Spacer } from "@chakra-ui/react";

const ExpenseObject = ({ expenseData }) => {
	return (
		<Flex
			fontSize={{base:"10px",sm: "12px", md: "20px", lg: "25px" }}
			alignItems='center'
			flexWrap='wrap'
			justifyContent="center"
		>
			{expenseData.data &&
				expenseData.data.map((item) => {
					return (
						<Box>
							<Box
								key={item.uniqueID}
								w={{base:"80px", sm: "150px", md: "220px", lg: "250px" }}
								p={{base:"10px", sm: "30px", md: "35px", lg: "40px" }}
							>
								<h3> <strong>Name: </strong>{item.category}</h3>
								<p><strong>UniqueID:</strong> {item.uniqueID}</p>
								<p><strong>Cost: £</strong>{item.expenseBudget}</p>
							</Box>
							<Spacer />
						</Box>
					);
				})}
		</Flex>
	);
};

export default ExpenseObject;
