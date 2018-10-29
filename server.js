const express = require('express');

const app = express();

const port = 5000;

app.get('/api/customers', (req, res) => {
	const customers = [
		{
			id:1, 
			firstName: 'John', 
			lastName: 'Doe'
		},
		{
			id:2, 
			firstName: 'Henrique', 
			lastName: 'Lyra'
		},
		{
			id:3, 
			firstName: 'Éric', 
			lastName: 'Lyra'
		}
	];

	res.json(customers);
});

app.listen(port, () => console.log(`server started on port ${port}`));