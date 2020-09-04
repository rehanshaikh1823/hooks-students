var mongoDb=require('mongodb');

var shared={};

shared.getMongoCon=function(res,cb){
     var mongoClient=mongoDb.MongoClient;
     var url="mongodb+srv://nit:nit@cluster0-f7thw.mongodb.net/test?retryWrites=true&w=majority"
     mongoClient.connect(url,function(err,cluster){
        if(err){
            res.send('db con error'+err);
        }
        var db=cluster.db('sms');
         cb(db);
     });
}

module.exports=shared;