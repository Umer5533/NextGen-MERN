import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import router from "./Route/user.route.js";
import User from './Model/user.model.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Replace with your frontend's origin
    methods: ["GET", "POST"],
  }
});

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;
const URI = process.env.MongoDBURI || 'mongodb://localhost:27017/nextgen';

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});

// Create a Message schema and model for the chat system
const messageSchema = new mongoose.Schema({
  username: String,
  message: String,
  role: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Add this line
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);



app.get('/users-with-messages', async (req, res) => {
  try {
    const users = await Message.distinct('userId');
    const userDetails = await User.find({ _id: { $in: users } }, 'fullname email');
    res.status(200).json(userDetails);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

// In your index.js
io.on('connection', (socket) => {
  console.log('a user connected');

  // Handle loading messages for a specific user
  socket.on('load messages', (userId) => {
    Message.find({ userId }).then((messages) => {
      socket.emit('load messages', messages);
    });
  });

  // Listen for new messages
  socket.on('chat message', (msg) => {
    const message = new Message(msg);
    message.save().then(() => {
      io.emit('chat message', msg);// Broadcast to all connected clients


      io.emit('notification', {
        to: msg.role === 'admin' ? 'user' : 'admin', // Determine who should be notified
        message: `${msg.username}: ${msg.message}`,
        userId: msg.userId,
      });
    });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


// User routes
app.use("/user", router);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
