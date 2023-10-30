const bookModel=require('../model/bookModel')

exports.addBook=async(req,res)=>{
    try{
             let data=await bookModel.create(req.body);

             return{
                success:true,
                message:"Book added successfully",
                data:data
             }
    }catch(err){
        console.log(err)
        return{
            success:false,
            message:err.message
        }
    }
}

exports.getBooksList=async(req,res)=>{
    try{
             let data=await bookModel.find({isdeleted:false});

             if(data.length==0){
                return{
                    success:true,
                    message:"No books available right now"
                }
             }

             return{
                success:true,
                message:"Books List is here",
                data:data
             }
    }catch(err){
        console.log(err)
        return{
            success:false,
            message:err.message
        }
    }
}


exports.getBookDetailsById=async(req,res)=>{
    try{
             let data=await bookModel.findOne({_id:req.query.bookId,isdeleted:false});

             if(data==null){

                return{
                    success:false,
                    message:"Book Not Found"
                }
             }

             return{
                success:true,
                message:"Book details are here",
                data:data
             }
    }catch(err){
        console.log(err)
        return{
            success:false,
            message:err.message
        }
    }
}


exports.updateBook=async(req,res)=>{
    try{
             let exist=await bookModel.findOne({_id:req.body.bookId,isdeleted:false});
             if(exist==null){
                return{
                    success:false,
                    message:"Book Not Found"
                }
             }

             let data=await bookModel.findOneAndUpdate({_id:req.body.bookId},req.body,{new:true});
             
             return{
                success:true,
                message:"Book updated successfully",
                data:data
             }

    }catch(err){
        console.log(err)
        return{
            success:false,
            message:err.message
        }
    }
}


exports.deleteBook=async(req,res)=>{
    try{
        let exist=await bookModel.findOne({_id:req.body.bookId,isdeleted:false});
        if(exist==null){
           return{
               success:false,
               message:"Book Not Found"
           }
        }

        let data=await bookModel.findOneAndUpdate({_id:req.body.bookId},{isdeleted:true},{new:true});
        
        return{
           success:true,
           message:"Book deleted successfully",
           data:data
        }
    }catch(err){
        console.log(err)
        return{
            success:false,
            message:err.message
        }
    }
}