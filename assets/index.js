import MediaPlayer  from './mediaPlayer'
import autoplay  from '../plugins/autoplay.js'

const video = document.querySelector("video")
const player = new MediaPlayer({element:video, plugins: [ new AutoPlay()]})

const button = document.querySelector("button")

button.onclick = () => player.toggleplay()
