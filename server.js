const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Visitor = require('./models/VisitorSchema');
const router = require('./Routes/Routes');
const buildingRouter = require('./Routes/BuildingRoutes')

const app = express();

dotenv.config();

const { DB_URI } = process.env;

app.use(express.json());
app.use(router);
app.use(buildingRouter);

const test = async () => {
    const visitor = await new Visitor({
        userId: 1,
        firstName: 'John',
        lastName: 'Doe',
		address: '123 Main St',
		visitation: {
			department: 'IT',
			checkinTime: new Date(),
			doors: 	[{
				building: 'A',
				department: 'Accounting',
				floor: 1,
				gate: 'A1',
				checkinTime: new Date(),
			}]
		}
    });
}

const start = () => {
	// Connect to MongoDB
	mongoose
		.connect(DB_URI)
		.then(() => {
			console.log('✅ Connected to database');
		})
		.catch((err) => {
			console.log('Error connecting to MongoDB: ', err);
		});

	app.listen(3000, () => {
		console.log('🔴 Server started on port 3000');
	});
};

start();
test();
