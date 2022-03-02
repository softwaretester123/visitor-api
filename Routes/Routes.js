const { Router } = require('express');
const Visitor = require('../models/VisitorSchema');

const router = new Router();

router.post('/new_entry', async (req, res) => {
	if (req.body.id) {
        const existing_visitor = await Visitor.findOne({id : '1'});

        if (existing_visitor) {

        } else {
            const visitor = await new Visitor({
                userId: 1,
                firstName: 'John',
                lastName: 'Doe',
                email: '',
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

        res.status(200).json({ message: 'successful' });
	} else {
		return res.status(400).json({
			message: 'Please provide a valid user id',
		});
	}
});

router.post('/login', )

module.exports = router;
