require("dotenv").config();
const {db} = require("./src/db.js");
const server = require("./src/app.js");

const {PORT} = process.env;

db.sync({force: true}).then(() => {
    server.listen(PORT, () => {
        console.log(`server is running at port ${PORT}`);
    })
}).catch((error) => console.log(error))

