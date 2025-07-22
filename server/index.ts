import http from 'http'
import express from 'express'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  path: '/match-platform',
  cors: { origin: '*' }
})

io.on('connection', (socket) => {
  console.log('客户端已连接', socket.id)
  socket.on('disconnect', () => {
    console.log('客户端已断开', socket.id)
  })
})

function broadcastScore(scoreData: unknown) {
  // 向所有已连接客户端推送
  io.emit('score', scoreData)
}

server.listen(3000, () => console.log('Server listening on port 3000'))