import User from "../Model/user.model.js";
import Admin from "../Model/admin.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {

    try {
        const {fullname, email, password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message : 'User already exists'});
        }

        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname : fullname,
            email : email,
            password : hashPassword,
        });

        await createdUser.save();
      res.status(201).json({message : 'User created successfully', 
        user:{
            id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email
        },
      });

    } catch (error) {
        console.log('Error: ' +  error.message)
        res.status(500).json({message : 'Internal server error.'});

    }
}


export  const login = async (req, res)=>{

    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})
        const passMatch = await bcryptjs.compare(password, user.password)
        if(!user || !passMatch){
            return res.status(400).json({message:'Invalid user and password'})
        }else{
            res.status(200).json({
                message:'Login successful',
                user: {
                    id:user._id,
                    fullname:user.fullname,
                    email:user.email,


                }
            })
        }
        
    } catch (error) {
        console.log('Error: ' + error.message)
        res.status(500).json({message: "Invalid user"})
    }
}






export  const adminlogin = async (req, res)=>{

    try {
        const {email, password} = req.body;
        const user = await Admin.findOne({email})
        const passMatch = await  Admin.findOne({password});
        if(!user || !passMatch){
            return res.status(400).json({message:'Invalid user and password'})
        }else{
            res.status(200).json({
                message:'Login successfully as a admin',
                user: {
                    id:user._id,
                    fullname:user.fullname,
                    email:user.email,


                }
            })
        }
        
    } catch (error) {
        console.log('Error: ' + error.message)
        res.status(500).json({message: "Invalid user"})
    }
}