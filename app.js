let express = require('express');
let path = require('path');

const PORT=process.env.PORT||3000;
const publicPath=path.resolve(__dirname,'./public');

let app = express();
app.use(express.static(publicPath));
        app.listen(PORT,()=>console.log(`Express ejecutandose en el puerto ${PORT}`));


        app.get('/', (req, res)=> {
                res.sendFile(path.resolve(__dirname,'./views/home.html'));
              })
        app.get('/register', (req, res)=> {
                res.sendFile(path.resolve(__dirname,'./views/register.html'));
              })

              app.get('/login', (req, res)=> {
                res.sendFile(path.resolve(__dirname,'./views/login.html'));
              })

