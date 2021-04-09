const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
    foreignKey: 'user_id'
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade",
    onUpdate: "cascade",
});
Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade",
    onUpdate: "cascade",
});
Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: "cascade",
    onUpdate: "cascade",
})
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade",
    onUpdate: "cascade",
});
Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
    onDelete: "cascade",
    onUpdate: "cascade",
});
module.exports = { User, Blog, Comment };