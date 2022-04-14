import { connectionDB } from './db.js';
import  app  from './app.js';

connectionDB();
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});