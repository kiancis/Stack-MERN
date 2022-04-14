import { connectionDB } from './db.js';
import  app  from './app.js';
import { PORT } from './config.js';

connectionDB();
app.listen(PORT,()=>{
    console.log('Server is running on port '+ PORT);
});