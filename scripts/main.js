


// !! whats important to note in this entire thing
// is the (e) object. This represents the key you press down.
// have browser listen for event 'keydown'.
// then, define variable called sound. This variable
// goes into the document and grabs the <audio> element
// with the attribute of data-key = 'e.keycode';
// This is where its confusing but basically, its saying
// grab the element of audio, that has the attribute data-key with the key code property
// that you are pressing down. So if you press down key A, it says the key code of A aka (e)
// because e is just a variable for whatever key you press down. You could press down G aka (e) and it would ahve
// a different key code property than A.
// So basically, (e) is a place holder variable, that when the event is 'heard' or
// aka when the browser hears you pressed down a key, it says the (e) variable can now be replaced
// with the key you pressed down. So when i write e.keyCode I'm basically saying A.keycode or B.keycode or etc...
//Then after you have defined the variable that grabs the key code of they key you pressed down,



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

//THINGS I WANT TO IMPROVE ON..
//I want open hi hat (F) to stop playing once the closed hi hat (S) plays;
// maybe something like if ( S is key'd while F is playing) {
//   stop f from playing;
// }
//I want caps to work as well..apprently keys only work in undercase;
