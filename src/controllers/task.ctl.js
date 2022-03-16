
const getHome = (req,res) => {
    res.json({message: "In Home"})    

}

const getContact= (req,res) => {
    res.json({message: "In Contact"})    

}

const getProfile = (req,res) => {
    res.json({message: "In Profile"})    

}


const getSignIn = (req,res) => {
    res.json({message: "In SignIn"})    

}

const getSignUp = (req,res) => {
    res.json({message: "In SignUp"})    

}


module.exports = {getHome,getContact,getProfile,getSignIn,getSignUp}