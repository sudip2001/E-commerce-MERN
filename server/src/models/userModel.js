const {schema,model, Schema}=require('mongoose');
const bcrypt=require('bcrypt');
const{defaultImagePath}=require("../secret");
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,'user name is required'],
        trim:true,
        minlength:[3,'the length of user name can be minimum 31 charecters'],
        maxlength:[31,'the length of user name can be maximum 31 charecters']
    },

    email:{
        type:String,
        required:[true,'user name is required'],
        trim:true,
        unique:true,
        lowercase:true,
        validate: {
            validator:function(v){
               return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v); 
            },
            message:'please enter a valid email'
        }
    },

    password:{
        type:String,
        required:[true,'user password is required'],
        minlength:[8,'the length of user name can be minimum 31 charecters'],
       set:(v)=>bcrypt.hashSync(v,bcrypt.genSaltSync(10))
    },

    image:{
      type:String, 
      default: defaultImagePath
    },
    adress:{
        type:String, 
        required:[true,'user adress is required'], 
      },
      phone:{
        type:String, 
        required:[true,'user phone number is required'], 
      },
      isAdmin:{
        type:Boolean,
        default:false
      },
      isBanned:{
        type:Boolean,
        default:false
      },

},{timestamps:true});


const User=model('User',userSchema);

module.exports=User;