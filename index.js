const app = require('./app');
const Port = 5050;
app.listen(Port, () => {
    console.log(`App running on @ ${Port}`)
})