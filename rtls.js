const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
let a = '';
let r1 = -999
let r2 = -999
let r3 = -999
let r4 = -999
let r5 = -999
let r6 = -999
let r7 = -999
// Route to accept POST requests and display the received JSON
app.post('/json', (req, res) => {
  const receivedJson = req.body;
  // console.log(req.body)


  if (Array.isArray(receivedJson)) {
    receivedJson.forEach(item => {

      if (item.type === 'Gateway') {
        if (item.mac === 'AC233FC00718') {
          a = "Router A"
           console.log("Router A "+item.mac );
        }
        if (item.type === 'Gateway') {
          if (item.mac === 'AC233FC006E7') {
            a = "Router B"
             console.log("Router B "+item.mac );
          }
          else if (item.mac === 'AC233FC006B0') {
            a = "Router C"
             console.log("Router C "+item.mac);
          }
          else if (item.mac === 'AC233FC006C1') {
            a = "Router D"
            //  console.log("Router D "+item.mac);
          }
        }


        if (item.type === 'iBeacon') {
          if (a === 'Router A') {
            r1 = parseInt(item.rssi, 10)

          } else if (a === 'Router B') {
            r2 = parseInt(item.rssi, 10)

          }
          else if (a === 'Router C') {
            r3 = parseInt(item.rssi, 10)
          } else if (a === 'Router D') {
            r4 = parseInt(item.rssi, 10)
          }
          else if (a === 'Router E') {
            r5 = parseInt(item.rssi, 10)
          }
          else if (a === 'Router F') {
            r6 = parseInt(item.rssi, 10)
          }
          else if (a === 'Router G') {
            r7 = parseInt(item.rssi, 10)
          }
          // console.log(a , item.rssi,'\n');
        }
       // console.log(r2)
        if (r1 > r2 && r1 > r3 && r1 > r4 && r1 > r5 && r1 > r6 && r1 > r7 && r1 !== 0) {
          console.log("Device is in room A");

        } else if (r2 > r1 && r2 > r3 && r2 > r4 && r2 > r5 && r2 > r6 && r2 > r7 && r2 !== 0) {
          console.log("Device is in room B");
        } else if (r3 > r1 && r3 > r2 && r3 > r4 && r3 > r5 && r3 > r6 && r3 > r7 && r3 !== 0) {
          console.log("Device is in room C");
        }
        else if (r4 > r1 && r4 > r2 && r4 > r3 && r4 > r5 && r4 > r6 && r4 > r7 && r4 !== 0) {
          console.log("Device is in room D");
        } else if (r5 > r1 && r5 > r2 && r5 > r3 && r5 > r4 && r5 > r6 && r5 > r7 && r5 !== 0) {
          console.log("Device is in room E");
        } else if (r6 > r1 && r6 > r2 && r6 > r3 && r6 > r4 && r6 > r5 && r6 > r7 && r6 !== 0) {
          console.log("Device is in room F");
        } else if (r7 > r1 && r7 > r2 && r7 > r3 && r7 > r4 && r7 > r5 && r7 > r6 && r7 !== 0) {
          console.log("Device is in room G");
        }
          console.log(r1,r2,r3)

      }});
  }
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
