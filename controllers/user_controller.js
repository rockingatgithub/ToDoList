module.exports.home = function(req, res){
    return res.render('user_profile', {
        title: "Profile"
    });
}