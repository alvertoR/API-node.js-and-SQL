import express   from 'express';
import cors      from 'cors';
import morgan    from 'morgan';
import dbConnection from './config/connection';

//import rutes
import carsRute  from './rutes/carros.js'

const app = express();

//test conecction
dbConnection.authenticate()
.then(() => console.log(`We are in database`))
.catch(error => console.log(`${error}`));

//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutes
app.use('/carros', carsRute);

//start server
app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), () => {
    console.log(`server is ready on port ${app.get('puerto')}`);
});