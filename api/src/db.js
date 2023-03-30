require("dotenv").config();
const {Sequelize} = require("sequelize");
const modelRecipe = require("./models/Recipe.js");
const modelDiet  = require("./models/Diet.js");
const modelUser  = require("./models/User.js");

const {DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY, DATABASE} = process.env;

const sequelize = new Sequelize('postgres://food_proyect_user:4FAcp96NdZJspFeSCH5iREu43O8rffNs@dpg-cghmnd02qv2772mssnb0-a.oregon-postgres.render.com/food_proyect?ssl=true', {logging: false,});


modelRecipe(sequelize);
modelDiet(sequelize);
modelUser(sequelize);

const {Recipe , Diet, User} = sequelize.models;

//Relations of Recipes with Diets//
Recipe.belongsToMany(Diet, {through: "DietRecipes",  timestamps: false});
Diet.belongsToMany(Recipe, {through: "DietRecipes",  timestamps: false});

module.exports = {
    ...sequelize.models,
    db: sequelize,
    
}
