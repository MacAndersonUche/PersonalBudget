const { expensesEnvelopeMock } = require("../mocks/expenses");
const { createElement } = require("./utils");

function globalExpenseCreator(req, res) {
	const recievedExpense = createElement(req.query, expensesEnvelopeMock);
	if (recievedExpense) {
		expensesEnvelopeMock.push(recievedExpense);
		res.status(201).send({ data: expensesEnvelopeMock });
	} else {
		res.status(401).send("Invalid Params");
	}
}
exports.globalExpenseCreator = globalExpenseCreator;
