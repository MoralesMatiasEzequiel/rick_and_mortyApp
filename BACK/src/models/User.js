const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
      id: {
         type: DataTypes.UUID(),  
         defaultValue: DataTypes.UUIDV4(),
         primaryKey: true,
         autoincrement: true,
         allowNull: false
      },
      name: {
         type: DataTypes.STRING(),  
         allowNull: false
      },
      nickname: {
         type: DataTypes.STRING(),  
         allowNull: false
      },
      email:{
         type: DataTypes.STRING(),
         allowNull: false,
         isEmail: true  
         /*
         validate:{
              isEmail: true // REGEX. Aqui podemos poner una REGEX para hacer una validacion mas compleja 
         }

         */
      },
      emailVerified:{
         type: DataTypes.BOOLEAN(),
         // require: true
      },
      password:{
         type: DataTypes.STRING(),
         allowNull: false
         /*
         validate:{
            is: //Y aqui poner una REGEX.
         }
         */
     },
     active:{
      type: DataTypes.BOOLEAN(),
      defaultValue: true
     }
  }, { timestamps: false });
}