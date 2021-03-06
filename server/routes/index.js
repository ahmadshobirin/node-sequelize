const User = require('../controller/user');
const Post = require('../controller/post');

module.exports = (app) => {
    app.get('/api', (req, res) => {
        res.status(200).send({
            data: "WELCOME ASUKKK!!!",
        })
    })

    app.get('/api/users', userController.getAllUsers);

    app.post('/api/user/create', userController.create);

    app.put('/api/user/:userId', userController.update);

    app.get('/api/:userId/posts', postController.getAllPostsOfUser);

    app.post('/api/post/create', postController.createPost);

    app.put('/api/:postId', postController.update);
}