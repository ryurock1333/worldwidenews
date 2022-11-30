const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const cors = require("cors");
const path = require('path');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const socketio = require("socket.io");

const app = express()
app.use(express.urlencoded({ extended: false }));


const server = app.listen(process.env.PORT || 5000, () => {
        console.log("server is running...");
      }); 
 
      const io = socketio(server);

      io.on("connection", socket => {
        console.log("New user connected");
      
        socket.username = "Anonymous"
      
        socket.on("change_username", data => {
          socket.username = data.username
        })
      
        // handle the new message event
        socket.on("new_message", data => {
          console.log("new messsage");
          io.sockets.emit("receive_message", { message: data.message, username: socket.username})
        })
      
        socket.on('typing', data => {
          socket.broadcast.emit('typing', { username: socket.username })
        })
      });;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 3600 * 1000
}))

app.locals.showHidetext = function (excerpt) {
    if (excerpt.length > 80) {
        return excerpt.slice(0, 80) + "..."
    }
    return excerpt;
}

app.locals.showHidetext = function (title) {
    if (title.length > 25) {
        return title.slice(0, 25) + "..."
    }
    return title;
}

app.use(cors())

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

// Routes
const newsRouter = require('./src/routes/news');
const { title } = require('process');
const { default: mongoose } = require('mongoose');
const { Server } = require('http');

app.use('/', newsRouter)



