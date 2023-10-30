const jwt = require("jsonwebtoken")
const adminModel = require('../model/adminModel');

module.exports = async (req, res, next) => {
  try {
   
    if (req.headers.authorization) {
    
      const token = req.headers.authorization.split(" ").pop()
      
      const { user_id } = jwt.verify(token, process.env.PRIVATE_KEY)
      req.user = await adminModel.findOne({ _id: user_id, isdeleted:false})
      if (req.user.verificationStatus !=false) {
        next()
      } else {
        return res.status(403).json({
          success: false,
          message: "Unauthorized",
          data: []
        })
      }
    } else {
      return res.status(401).json({
        success: false,
        message: "Token Not Found",
        data: []
      })
    }
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Invalid Token",
      data: []
    })
  }
}