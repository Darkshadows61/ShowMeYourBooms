const UserShow = require('../models/userShows')

module.exports = {
    getUserShows: async (req,res)=>{
        console.log(req.user)
        try{
            const userShows = await UserShow.find({userId:req.user.id})
            const fireworkID = await UserShow.find({userId:req.user.id})
            res.render('userShows.ejs', {userShows: userShows, firework: fireworkID, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createUserShow: async (req, res)=>{
        try{
            await UserShow.create({showName: req.body.showName, fireworkID: 0, userId: req.user.id})
            console.log('Show has been added!')
            res.redirect('/userShows')
        }catch(err){
            console.log(err)
        }
    },
    deleteUserShow: async (req, res)=>{
        console.log(req.body.userShowIdFromJSFile)
        try{
            await UserShow.findOneAndDelete({_id:req.body.userShowIdFromJSFile})
            console.log('Deleted User Show')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    addFireworkToShow: async (req, res)=>{
        try{
            await UserShow.create({showName: req.body.showName, fireworkID: req.body.fireworkId, userId: req.user.id})
            console.log('Show has been added!')
            res.redirect('/userShows')
        }catch(err){
            console.log(err)
        }
    }
}