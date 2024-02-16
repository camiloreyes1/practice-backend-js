const isProfileOwner = (req,res,next)  =>{

    if(req.user === req.params.userId){
        next()
    } else {
        res.status(401).json({message: "This is not your profile"})
    }
}

module.export = isProfileOwner