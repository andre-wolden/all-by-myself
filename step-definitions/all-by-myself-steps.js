import { client } from 'nightwatch-api';
import { Given, Then } from 'cucumber';

Given('I open all-by-myself', async () => {
    await client.url('http://localhost:9000');
});

Then('the header says {string}', async (string) => {
    await client.assert.equal(string, "My life, for Aiur");
});
