const envelope = [];


function SingleEnvelope(name, id, budget) {
	envelope.push({ name, id, budget });

	return envelope;
}


function returnEnvelop(envelopeArray) {
	
}

SingleEnvelope("mac", 1, 0);
SingleEnvelope("andy", 3, 0);
//console.log(SingleEnvelope("mac", 1, 0));
console.log(SingleEnvelope("mac", 2, 0));
