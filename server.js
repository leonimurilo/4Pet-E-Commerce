(function () {
    "use strict";

    const express = require("express"),
        app = express(),
        path = require("path"),
        bodyParser = require("body-parser"),
        cors = require("cors"),
        port = process.env.PORT || 3000;

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use(express.static(path.join(__dirname + '/client/public')));

    // app.engine("html", engines.ejs);
    app.set("view engine", "ejs");
    app.set("views", __dirname + "/client");
    app.disable("x-powered-by");


    require("./server/routes/index")(app);

    app.listen(port, function () {
        console.log('Server running on port: %d', port);
    });

}());