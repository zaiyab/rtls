const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to accept POST requests and display the received JSON
app.post('/json', (req, res) => {
    const receivedJson = req.body;
   // console.log(req.body)
   let a ='';
   let r1,r2,r3
    if (Array.isArray(receivedJson)) {
    receivedJson.forEach(item => {
        
        if (item.type === 'Gateway') {
            if (item.mac==='AC233FC00718'){
                a = "Router A"
         //  console.log("Router A "+item.mac );
        }
           else if(item.mac==='AC233FC006B0'){
            a = "Router C"
          //  console.log("Router C "+item.mac);
        }
        else if(item.mac==='AC233FC006C1'){
            a = "Router D"
          //  console.log("Router D "+item.mac);
        }
        }
       if (item.type === 'iBeacon') {
        if(a==='Router A'){
            r1=parseInt(item.rssi, 10)
            console.log("RA"+r1)
        }else if(a==='Router D'){
            r2=parseInt(item.rssi, 10)
            console.log("RD"+r2)
        }else if(a==='Router C'){
            r3=parseInt(item.rssi, 10)
            console.log("RC"+r3)
        }
           console.log(a , item.rssi,'\n');
        }
        if (r1 > r2 && r1 > r3) {
            console.log("Device is in room A");
        } else if (r2 > r1 && r2 > r3) {
            console.log("Device is in room D");
        } else if (r3 > r1 && r3 > r2) {
            console.log("Device is in room C");
        }
        
       
    });}
    res.send(`
        <html>
            <body>
                <h1>Received JSON</h1>
                <pre>${JSON.stringify(receivedJson, null, 2)}</pre>
            </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
