const socket = io("ws://localhost:3000")

const messages = document.getElementById('messages')
// not sure if this needs added or not

const chat = document.querySelector('.chat-form')
const Input = document.querySelector('.chat-input')

const chatWindow = document.querySelector('.chat-window')

const renderMessage = message => {
    const div = document.createElement('div')
    div.classList.add('render-message')
    div.innerText = message
    chatWindow.appendChild(div)
}

chat.addEventListener('submit', event => {
  event.preventDefault()
  // send messages using sockets
  socket.emit('chat', Input.value)
  Input.value = ''
})

socket.on('chat', message => {
  console.log('From server: ', message);
  renderMessage(message)
})
