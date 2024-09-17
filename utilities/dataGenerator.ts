import { faker } from '@faker-js/faker';

export const generateUserData = () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    country: 'Ukraine',
});