const express = require("express");
const { expensesEnvelopeMock } = require("../mocks/expenses");
const { globalExpenseCreator } = require("./globalExpenseCreator");
const { getIndexById, updateElement } = require("./utils");
const cors = require("cors");

const app = express();
const port = 8080;


const corsOptions = {
	origin: "*"
};


app.use(cors(corsOptions));


//Send back the entire expenses
app.get("/expenses", (req, res) => {
	
	res.status(200).json({ data: expensesEnvelopeMock });
	// res.status(400).send("Bad Request");
});

//Filtering the expenses array
app.get("/expenses/:name", (req, res) => {
	const filtered = expensesEnvelopeMock.filter(
		(item) => item.category.toLowerCase() === req.params.name.toLowerCase()
	);
	if (filtered.length > 0) {
		res.status(200).send({ data: filtered });
	} else {
		res.status(400).send("Bad Request");
	}
});

//Adding new expenses to the array
app.post("/expenses", (req, res) => {
	globalExpenseCreator(req, res);
});

//Deleting unwanted expenses
app.delete("/expenses/:id", (req, res) => {
	const indexToDelete = getIndexById(req.params.id, expensesEnvelopeMock);
	console.log(indexToDelete);
	if (indexToDelete !== -1) {
		expensesEnvelopeMock.splice(indexToDelete, 1);
		res.send({data: expensesEnvelopeMock});
	} else {
		res.status(404).send("Id  not found");
	}
});

//Add logic to be able to update items in the box
app.put("/expenses/:id", (req, res) => {
	const indexToDelete = getIndexById(req.params.id, expensesEnvelopeMock);
	if (indexToDelete !== -1) {
		updateElement(req.params.id, req.query, expensesEnvelopeMock);
		res.send({data: expensesEnvelopeMock});
	} else {
		globalExpenseCreator(req, res);
	}
});

//Transfer budget from one category to another
app.post("/expenses/transfer/:from/:to", (req, res) => {
	//Take away £10 from the first envelope to the second envelope
	const findObjectFrom = expensesEnvelopeMock.find(
		(item) => item.uniqueID === Number(req.params.from)
	);
	const findObjectTo = expensesEnvelopeMock.find(
		(item) => item.uniqueID === Number(req.params.to)
		);
		console.log(findObjectFrom, findObjectTo);
		
	if (findObjectFrom && findObjectTo) {
		findObjectFrom.expenseBudget -= 10
		findObjectTo.expenseBudget += 10

		res.status(201).send(expensesEnvelopeMock)
	} else {
		res.status(401).send("Error invalid uniqueID")
	}

});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
