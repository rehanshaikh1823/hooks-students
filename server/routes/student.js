var express=require('express');
var router=express.Router();
var mongodb=require('mongodb');
var objId=mongodb.ObjectID;
var shared=require('./shared');
router.post('/std-reg',function(req,res){
           var data=req.body.data;
           shared.getMongoCon(res,function(db){
            var collection=db.collection('student');
            collection.insertOne(data,function(e,r){
                 if(e){
                     res.send(e);
                 }else{
                     res.send(r);
                 }
            })
           });

         
})

router.get('/get-std',function(req,res){
     shared.getMongoCon(res,function(db){
           var collection=db.collection('student');
           collection.find({}).toArray(function(e,r){
                if(e){
                    res.send(e);
                }else{
                    res.send(r);
                }
           })
     })
})

router.post('/update-std',function(req,res){
      var id=  req.body._id;
      var uid=req.body.uid;
      var pwd=req.body.pwd;
      var email=req.body.email;
      var phone=req.body.phone;

      var condtionObj={
            _id:objId(id)
      }

      var updatedDataObj={
        "uid": uid,
        "pwd": pwd,
        "email": email,
        "phone": phone
      }

      shared.getMongoCon(res,function(db){
             var collection=    db.collection('student');
             collection.updateOne(condtionObj,{$set:updatedDataObj},function(e,r){
                 if(e){
                     res.send(e);
                 }else{
                     res.send(r);
                 }
             })
      })
})

router.get('/delete-std',function(req,res){
     var id=req.query.id;

     var condtionObj={
         _id:objId(id)
     }

     shared.getMongoCon(res,function(db){
        var collection=db.collection('student');
        collection.deleteOne(condtionObj,function(e,r){
            if(e){
                res.send(e);
            }else{
                res.send(r);
            }
        })
     })
})

module.exports=router;