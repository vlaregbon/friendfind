var path = require("path");

// I am setting up the this funtion to be exported/routed.
// When hitting the /survey the response will be to send the file under the public/survey.html

module.exports = function(app){
  app.get("/survey",function(req, res){
    res.sendFile(path.join(__dirname,"../public/survey.html"));
  });
  app.get("*", function(req, res){
    res.sendFile(path.join(_dirname,"../public/home.html"))
  });
}