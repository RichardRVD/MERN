import { faker } from '@faker-js/faker';
// const faker = require("@faker-js/faker")
import express from 'express';
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const User = () => {
    const createUser = {
        // id: faker.random.id(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return createUser;
}
const Company = () => {
    const createCompany = {
        // id: faker.random.number(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return createCompany;
}

app.get("/api/users/new", ( req, res ) => {
    res.json({ user: User() });
});

app.get("/api/companies/new", ( req, res ) => {
    res.json({ company: Company() });
});

app.get("/api/user/company", ( req, res ) => {
    res.json({ user: User(), company: Company() })
});

app.listen(port, () => console.log(`Welcome to Star Destroyer: ${port}. Please do not disturb the Emperor, as he is on board.`));

