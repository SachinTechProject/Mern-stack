var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var conString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


app.get("/get-users", (req, res)=>{
    mongoClient.connect(conString).then(clientObject=>{
        var database = clientObject.db("react-video");
        database.collection("tblusers").find({}).toArray().then(documents=>{
             res.send(documents);
             res.end();
        });
    });
});


// app.post("/register-user",(req, res)=>{

//     var user = {
//         UserId: req.body.UserId,
//         UserName: req.body.UserName, 
//         Password: req.body.Password, 
//         Email: req.body.Email, 
//         Mobile: req.body.Mobile
//     };

//     if (!user.UserId || !user.UserName || !user.Password || !user.Email || !user.Mobile) {
//         return res.status(400).json({ message: "All fields are required" });
//     }

//     if (user.UserName.length >= 5) {
//         return res.status(400).json({ message: "UserName must be less than 5 characters" });
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(user.Email)) {
//         return res.status(400).json({ message: "Invalid Email" });
//     }

//     mongoClient.connect(conString).then(clientObject=>{

//         var database = clientObject.db("react-video");
//         database.collection("tblusers").insertOne(user).then(()=>{
//             console.log('User Registered');
//             res.end();
//         });
//     });

// });


app.post("/register-user", (req, res) => {
    console.log(req.body); // Log the request body to check the incoming data

    var user = {
        UserId: req.body.UserId,
        UserName: req.body.UserName, 
        Password: req.body.Password, 
        Email: req.body.Email, 
        Mobile: req.body.Mobile
    };
    // Proceed to insert user if validation passes
    mongoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("react-video");
        database.collection("tblusers").insertOne(user).then(() => {
            console.log('User Registered');
            res.json({ message: "User Registered Successfully" });
        });
    }).catch(error => {
        console.error(error);
        res.status(500).json({ message: "Database Connection Failed" });
    });
});


app.post("/register-admin", (req, res) => {
    console.log(req.body); // Log the request body to check the incoming data

    var user = {
        UserId: req.body.UserId,
        UserName: req.body.UserName, 
        Password: req.body.Password, 
        Email: req.body.Email, 
    };
    // Proceed to insert user if validation passes
    mongoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("react-video");
        database.collection("tbladmin").insertOne(user).then(() => {
            console.log('User Registered');
            res.json({ message: "admin Registered Successfully" });
        });
    }).catch(error => {
        console.error(error);
        res.status(500).json({ message: "Database Connection Failed" });
    });
});

app.get("/get-admin", (req, res)=>{
    mongoClient.connect(conString).then(clientObject=>{
        var database = clientObject.db("react-video");
        database.collection("tbladmin").find({}).toArray().then(documents=>{
             res.send(documents);
             res.end();
        });
    });
});

app.get("/get-categories", (req, res)=>{
    mongoClient.connect(conString).then(clientObject=>{
        var database = clientObject.db("react-video");
        database.collection("tblcategories").find({}).toArray().then(documents=>{
             res.send(documents);
             res.end();
        });
    });
});

app.get("/get-videos", (req, res)=>{
    mongoClient.connect(conString).then(clientObject=>{
        var database = clientObject.db("react-video");
        database.collection("tblvideos").find({}).toArray().then(documents=>{
             res.send(documents);
             res.end();
        });
    });
});

app.get("/get-video/:id", (req, res)=>{
    mongoClient.connect(conString).then(clientObject=>{
        var database = clientObject.db("react-video");
        database.collection("tblvideos").find({VideoId:parseInt(req.params.id)}).toArray().then(documents=>{
             res.send(documents);
             res.end();
        });
    });
});

app.post("/add-video", (req, res)=>{

    var video = {
        VideoId: parseInt(req.body.VideoId),
        Title: req.body.Title,
        Url: req.body.Url,
        Description: req.body.Description,
        Likes: parseInt(req.body.Likes),
        Dislikes: parseInt(req.body.Dislikes),
        Views: parseInt(req.body.Views),
        CategoryId: parseInt(req.body.CategoryId)
    }

    mongoClient.connect(conString).then(clientObject=>{
        var database = clientObject.db("react-video");
        database.collection("tblvideos").insertOne(video).then(()=>{
             console.log('Video Added Successfully..');
             res.end();
        })
    });
});

app.put("/edit-video/:id", (req, res)=>{

    var id = parseInt(req.params.id);

    var video = {
        VideoId: parseInt(req.body.VideoId),
        Title: req.body.Title,
        Url: req.body.Url,
        Description: req.body.Description,
        Likes: parseInt(req.body.Likes),
        Dislikes: parseInt(req.body.Dislikes),
        Views: parseInt(req.body.Views),
        CategoryId: parseInt(req.body.CategoryId)
    }

    mongoClient.connect(conString).then(clientObject=>{
        var database = clientObject.db("react-video");
        database.collection("tblvideos").updateOne({VideoId:id},{$set:video}).then(()=>{
            console.log(`Video Updated`);
            res.end();
        })
    });
});

app.delete("/delete-video/:id", (req, res)=>{

    var id = parseInt(req.params.id);

    mongoClient.connect(conString).then(clientObject=>{
        var database = clientObject.db("react-video");
        database.collection("tblvideos").deleteOne({VideoId:id}).then(()=>{
            console.log(`Video Deleted`);
            res.end();
        })
    });
});


app.listen(4000);
console.log(`Server Started : http://127.0.0.1:4000`);