const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://Festeradam86:Festeradam86@cluster0.noxhk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true})
mongoose.connection.once('open', () =>{
    console.log('connected to database')
})



app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))





app.listen(4000, () =>{
    console.log('running on port 4000')
})