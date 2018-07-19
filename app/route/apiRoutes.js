var friendData = require("../data/friends");

module.export = function(app){

  app.get("/api/friends", function(res, req){
res.json(friendData);
});

  app.post("/api/friends", function(res, req){
    friendData.push(req.body);
    res.json(true);
  })
}