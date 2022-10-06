const UserShow = require('../models/userShows')

module.exports = {
    getUserShows: async (req,res)=>{
        console.log(req.user)
        try{
            const userShows = await UserShow.find({userId:req.user.id})
            const fireworkID = await UserShow.find({userId:req.user.id})
            const fireworkID1 = await UserShow.find({userId:req.user.id})
            const fireworkID2 = await UserShow.find({userId:req.user.id})
            const fireworkID3 = await UserShow.find({userId:req.user.id})
            const fireworkID4 = await UserShow.find({userId:req.user.id})
            const fireworkID5 = await UserShow.find({userId:req.user.id})
            const fireworkID6 = await UserShow.find({userId:req.user.id})
            const fireworkID7 = await UserShow.find({userId:req.user.id})
            const fireworkID8 = await UserShow.find({userId:req.user.id})
            const fireworkID9 = await UserShow.find({userId:req.user.id})
            const fireworkID10 = await UserShow.find({userId:req.user.id})
            res.render('userShows.ejs', {userShows: userShows, firework: fireworkID, firework: fireworkID1, firework: fireworkID2, firework: fireworkID3, firework: fireworkID4, firework: fireworkID5, firework: fireworkID6, firework: fireworkID7, firework: fireworkID8, firework: fireworkID9, firework: fireworkID10, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getSingleShow: async (req,res)=>{
        console.log(req.user)
        try{
            res.render('userShows.ejs', {user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createUserShow: async (req, res)=>{
        try{
            await UserShow.create({showName: req.body.showName, fireworkID1: req.body.fireworkID1, fireworkID2: req.body.fireworkID2, fireworkID3: req.body.fireworkID3, fireworkID4: req.body.fireworkID4, fireworkID5: req.body.fireworkID5, fireworkID6: req.body.fireworkID6, fireworkID7: req.body.fireworkID7, fireworkID8: req.body.fireworkID8, fireworkID9: req.body.fireworkID9, fireworkID10: req.body.fireworkID10, userId: req.user.id})
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