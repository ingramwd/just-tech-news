const Post = require('./Post');
const User = require('./User');

// create associations aka JOINING TABLES 
//this will be a ONE to MANY relationship because ONE user can have MANY post
User.hasMany(Post, {
    foreignKey: 'user_id',

});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };