//       Create a HTTP server

// http server that support 4 routes (/sum, /sub, /div, /mul)
// exprese, hono, elysiajs, trpc 

const express = require("express");

const app = express();

app.use(express.json()); 

app.get("/", function(req, res) {
    res.sendFile("c:/Users/kumar/100xDevs/WebDev/class-8/index.html")
})

//http://localhost:3000/sum?a=1&b=2
// app.get("/sum", function (req, res) {
//     const a = parseInt(req.query.a); //string 1
//     const b = parseInt(req.query.b); //string 2

//     const sum = a + b;

//     res.json({
//         ans: sum
//     })

    //plain text
    // res.send(sum.toString())

    //html
    // res.send("<b><u> " + sum.toString() + "</u></b>")

// path params

    // //http://localhost:3000/sum/1041/2      //dynamic parameter
    // app.get("/sum/:a/:b", function (req, res) {
    //     const a = parseInt(req.params.a); //string 1
    //     const b = parseInt(req.params.b); //string 2

    //     const sum = a + b;

    //     res.json({
    //         ans: sum
    //     });
    // });

    // //http://localhost:3000/multiply/6/2
    // app.get("/multiply/:a/:b", function (req, res) {
    //     const a = parseInt(req.params.a); //string 1
    //     const b = parseInt(req.params.b); //string 2

    //     const ans = a * b;

    //     res.json({
    //         ans: ans
    //     })

    // })

// What if  method is Post not Get and the data will come in payload or body

app.post("/sum", function (req, res) {
    const a = parseInt(req.body.a); //string 1
    const b = parseInt(req.body.b); //string 2

    const sum = a + b;

    res.json({
        ans: sum
    });
});
    app.listen(3000);
