const router = require('express').Router();
const Todo = require('../models/todo');

router.get('/', function (req, res) { //fetching index template from views directory
    Todo.find({}).then(function (result) {

        let todos = result.filter(function (todo) {
            return !todo.done;
        });

        let donetodos = result.filter(function (todo) {
            return todo.done;
        });


        res.render('index', { Todo: todos, DoneTodo: donetodos });
    });
});

router.post('/todos', function (req, res) {
    let newTodo = new Todo({ description: req.body.description, done: false });

    newTodo.save().then(function (result) {
        console.log(result);
        res.redirect('/');
    }).catch(function (error) {
        console.log(error);
        res.redirect('/');
    });
});

router.post('/Todo/:id/completed', function (req, res) {
    let todoId = req.params.id;
    Todo.findById(todoId).exec().then(function (result) {
        result.done = !result.done;
        return result.save();
    });
    console.log(req.params);
    res.redirect('/');
});

router.post('/DoneTodo/:id/notcompleted', function (req, res) {
    let todoId = req.params.id;
    Todo.findById(todoId).exec().then(function (result) {
        result.done = !result.done;
        return result.save();
    });
    console.log(req.params);
    res.redirect('/');
});

module.exports = router;