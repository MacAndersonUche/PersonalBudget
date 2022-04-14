
const getIndexById = (id, elementList) => {
	return elementList.findIndex((element) => {
	  return element.uniqueID === Number(id);
	});
  };
const createElement = (queryArguments, originalArray) => {
    const lastObj = originalArray.slice(-1).pop()

	if (
		queryArguments.hasOwnProperty("category") &&
		queryArguments.hasOwnProperty("expenseBudget")
	) {
		return {
			category: queryArguments.category,
			uniqueID: lastObj.uniqueID + 1,
			expenseBudget: queryArguments.expenseBudget,
		};
	} else {
		return false;
	}
};

const updateElement = (id, queryArguments, elementList) => {
	const elementIndex = getIndexById(id, elementList);
	if (elementIndex === -1) {
	  throw new Error('updateElement must be called with a valid id parameter');
	}
	// if (queryArguments.id) {
	//   queryArguments.id = Number(queryArguments.id);
	// }
	Object.assign(elementList[elementIndex], queryArguments);
	return elementList[elementIndex];
  };


module.exports = { createElement, getIndexById, updateElement };
