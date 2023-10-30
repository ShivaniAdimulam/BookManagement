const adminModel=require('../model/adminModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.addAdmin = async(req,res)=>{
    try{
        let userEmailExist=await adminModel.findOne({email:req.body.email})
        if(userEmailExist){
            return{
                success:false,
                message:"Entered email is already used by another member,please enter different email."
            }
        }

        let hash=bcrypt.hashSync(req.body.password,10);
        req.body.password=hash;
    
        let data = await adminModel.create(req.body);

    return {
        success: true,
        message: "User added successfully!",
        data: data
    };
    }catch(error){
        console.log(error);
        return {
            success: false,
            message: error.message,
        };  
    }
}

exports.login = async (req, res) => {
    
    try {
       
        const { email, password } = req.body;
       
        
         let   adminExist = await adminModel.findOne({ email, isdeleted: false });

            let chkBlock = await adminModel.findOne({ email, isdeleted: true });

            if (chkBlock) {
                return {
                    success: false,
                    message: `Your account has been suspended.Please contact superAdmin for further queries/assistance.`,
                    data: {}
                };
            }
       

        if (!adminExist) {
            return {
                success: false,
                message: "User not found!",
                data: {}
            };
        }
        console.log("l",adminExist)
        if (adminExist&& (bcrypt.compareSync(password, adminExist.password))) {
           console.log("f")
            const token = jwt.sign({ user_id: adminExist._id, email }, process.env.PRIVATE_KEY,{expiresIn:process.env.JWT_EXPIRY});

            adminExist.token = token;
            adminExist.loginStatus = true
            
            await adminExist.save();
            
           
            return {
                success: true,
                message: "User LoggedIn Successfully",
                data: adminExist
            };
        } else {
            return {
                success: false,
                message: "Password mismatch. Please enter correct password!",
                data: {}
            };
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: error.message,
        };
    };
};

exports.logout = async (req) => {
   
    try {
       
        let updateLoginStatus = await adminModel.findOneAndUpdate({ _id: req.user._id }, { loginStatus: false, token: "" }, { new: true });

        return {
            success: true,
            message: "Logged out successfully!",
            data: updateLoginStatus
        };

    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: error.message,
        };
    }
}
