(function () {
    "use strict";

    module.exports = function(app){

        app.get("/test", function(req, res) {
                res.status(201).send(
                    {
                        title:"test"
                    }
                )
            }
        );

        app.get("/*", function (req, res) {
            res.status(200).sendFile('index.html', { root: './client/public'});
        });




    }

}());