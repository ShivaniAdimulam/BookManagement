const {addAdmin,login,logout} = require('../service/adminService');


exports.addAdmin = async (req, res) => {
    try {
        const data = await addAdmin(req);
        res.status(200).json(data);
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
}

exports.login = async (req, res) => {
    try {
        const data = await login(req);
        res.status(200).json(data);
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
}

exports.logout = async (req, res) => {
    try {
        const data = await logout(req);
        res.status(200).json(data);
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
}