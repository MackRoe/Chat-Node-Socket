const socket = io()

const chat = document.querySelector('.chat-form')
const Input = document.querySelector('.chat-input')


chat.addEventListener(', event => {
  event.preventDefault()
  // send messages using sockets
  socket.emit('chat', Input.value)
  Input.value = ''
})
