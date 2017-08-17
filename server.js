(function () {
    "use strict";

    const express = require("express"),
        app = express(),
        path = require("path"),
        bodyParser = require("body-parser"),
        cors = require("cors"),
        port = process.env.PORT || 6010;

    app.use(express.static(path.join(__dirname + '/client/public')));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json({limit: "50mb"}));
    app.use(cors());

    app.get("/login", function(req, res) {
            res.status(201).send(
                {
                    title:"leoni"
                }
            )
        }
    );

    app.listen(port, function () {
        console.log('Server running on port: %d', port);
    });

}());