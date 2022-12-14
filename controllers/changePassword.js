const bcryptjs =  require ('bcryptjs');
const User = require('../models/user')
async function changePassword(req, res, next) {
    try {
      const {email} = req.params;
      const salt = await bcryptjs.genSalt(10)
      const password = await bcryptjs.hash(req.body.password,salt)
      const userPassword = await User.findOneAndUpdate({email:email },{password: password}, {new:true} )
      return res.status(200).json({status: true, data: userPassword})
      
      
    } catch (error) {
     
      res.send("Error al cambiar la contraseña del usuario");
    }
  }

  module.exports = changePassword
