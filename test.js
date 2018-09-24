// test.js

const {
    createSession,
    closeSession,
    startWebDriver,
    stopWebDriver,
    client
} = require('nightwatch-api');

async function setup(env = 'default') {
    await startWebDriver(env);
    await createSession(env);
}

async function shutdown() {
    await closeSession();
    await stopWebDriver();
}

async function run() {
    await client.url('http://localhost:9000/');
    let title;
    await client.getTitle(t => (title = t));

    const expectedHeader = "My life, for Aiur.";

    await client.getText("#main h1", (text) => {
        client.assert.equal(text.value, expectedHeader)

    });
}

(async function() {
    try {
        await setup('chrome');
        await run();
    } catch (err) {
        console.log(err.stack);
    } finally {
        await shutdown();
    }
})();
