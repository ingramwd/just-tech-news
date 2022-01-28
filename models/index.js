const Post = require('./Post');
const User = require('./User');
const Vote = require('./Vote');

// create associations aka JOINING TABLES 
//this will be a ONE to MANY relationship because ONE user can have MANY post
User.hasMany(Post, {
    foreignKey: 'user_id',

});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

//creates another association aka JOINING TABLES
//but this is a MANY to MANY relationship because MANY USERS can like MANY post
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote };