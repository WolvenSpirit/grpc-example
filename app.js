const client = require('./client.js');

let user = { name: 'WolvenSpirit', password: 'password' }

client.login(user,
    (err, response) => {
        if (!err) {
            console.table(response);
        } else {
            console.log(err);
        }
    }
)