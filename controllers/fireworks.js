const Fireworks = require('../models/usershow')

module.exports = {
    getUserShow: async (req,res)=>{
        console.log(req.user)
        try{
            const userShowList = await Fireworks.find({userId:req.user.id})
            const userShowItems = await Fireworks.countDocuments({userId:req.user.id, showName: req.body.userShowName})
            res.render('fireworks.ejs', {userShows: userShowItems, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    addUserShowItem: async (req, res)=>{
        try{
            await Fireworks.create({showName: req.body.userShowName, userId: req.user.id})
            console.log('Firework has been added!')
            res.redirect('/fireworks')
        }catch(err){
            console.log(err)
        }
    },
    //previewShow: async (req, res)=>{
        //try{
            //await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                //completed: true
            //})
            //console.log('Marked Complete')
            //res.json('Marked Complete')
        //}catch(err){
            //console.log(err)
        //}
    //},
    deleteUserShowItem: async (req, res)=>{
        console.log(req.body.IdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted ShowItem')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    