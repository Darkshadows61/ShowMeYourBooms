const UserShows = require('../models/userShows')

module.exports = {
    getIndex: (req,res)=>{
        res.render('userShows.ejs')
    }
}