



window.addEventListener('keydown', (e) => {
  const sound = document.querySelector(`audio[data-key='${e.key}']`);
  const key = document.querySelector(`.key[data-key='${e.key}']`);
  sound.play();
  sound.currentTime = 0; //rewinds audio to beginning of its sound;
  key.classList.add('play');

});


window.addEventListener('keyup', (e) =>{
  const key = document.querySelector(`.key[data-key='${e.key}']`);
  key.classList.remove('play');
})


