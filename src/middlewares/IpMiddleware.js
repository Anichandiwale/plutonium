const data = function (req, res, next){
    console.log("middleware just for practice")
    next()
}

module.exports.data= data