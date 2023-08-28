const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://shraddhavedre606:sh1234@cluster0.n0ojbet.mongodb.net/BlogsData?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("MongoDB Connected successfully!")
})

//for Category 
const categoryData = require('./Modal/category.js');
app.get('/cat', (req,res)=>{
    categoryData.find().then((data)=>{
        res.json(data);
    })
})

app.post('/catAdd', jsonParser, (req, res)=>{
    const catData = new categoryData({
        _id: new mongoose.Types.ObjectId,
        cat_id: req.body.cat_id,
        cat_name: req.body.cat_name
    })


    catData.save().then((data)=>{
        res.json(data);
    })
})


app.delete('/catDelete/:id', (req, res)=>{
    categoryData.deleteOne({
        _id:req.params.id
    }).then((data)=>{
        res.json(data);
    })
})


app.put('/catUpdate/:id',  jsonParser, (req,res)=>{
    categoryData.updateOne({_id:req.params.id},{
        $set:{
            cat_name: req.body.cat_name
        }
    }).then((data)=>{
        res.json(data);
    })
})

//for Blogs

const blogDatas = require('./Modal/blog.js');

app.get('/getBlogs', (req,res)=>{
    blogDatas.find().then((data)=>{
        res.json(data);
    })
})


app.post('/addBlogs', jsonParser, (req, res)=>{
    const newBlogData = new blogDatas({
        _id: new mongoose.Types.ObjectId,
        blog_id: req.body.blog_id,
        blog_name: req.body.blog_name,
        blog_disc: req.body.blog_disc,
        blog_date: req.body.blog_date,
        blog_author: req.body.blog_author,
        blog_category: req.body.blog_category
    })

    newBlogData.save().then((data)=>{
        res.json(data);
    })
})


app.delete('/deleteBlogs/:id', (req,res)=>{
    blogDatas.deleteOne({
        _id: req.params.id
    }).then((data)=>{
        res.json(data);
    })  
})


app.put('/updateBlogs/:id', jsonParser, (req,res)=>{
    blogDatas.updateOne({_id:req.params._id},{
        $set :{
            blog_id: req.body.blog_id,
            blog_name: req.body.blog_name,
            blog_disc: req.body.blog_disc,
            blog_date: req.body.blog_date,
            blog_author: req.body.blog_author,
            blog_category: req.body.blog_category
        }
    }).then((data)=>{
        res.json(data);
    })
})


//For Subscriber

const newSub = require('./Modal/subscriber.js');



app.get('/getSubscriber', (req, res)=>{
    newSub.find().then((data)=>{
        res.json(data);
    })
})

app.delete('/deleteSubscriber/:id', (req, res)=>{
    newSub.deleteOne().then((data)=>{
        res.json(data);
    })
})

app.listen(3600, ()=>{
    console.log("server is running on port 3600")
})

