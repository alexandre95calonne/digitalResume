/* AlTERNATE WORDS */

const words = ['Alexandre Calonne', 'Fullstack developer', 'an Epitech Student']
let index = 0
let letterIndex = 0;
const alternate = document.getElementById('alternate')

function type() {
    alternate.textContent = words[index].slice(0, letterIndex++)
    if(letterIndex > words[index].length) {
        index = (index + 1) % words.length
        letterIndex = 0
        setTimeout(() => {
            alternate.textContent = ''
            type()
        }, 3000)
    } else {
        setTimeout(type, 150)
    }
}

type()

/* FADE IN */

const fadeIns = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  const isSmallScreen = window.matchMedia("(max-width: 650px)").matches;

  fadeIns.forEach(fadeIn => {
    if (isSmallScreen && fadeIn.classList.contains('disable-section')) {
      return;
    }

    if (fadeIn.getBoundingClientRect().top < window.innerHeight / 1.3) {
      fadeIn.classList.add('active');
    }
  });
});  

/* MOUSE EFFECT */ 

const cursor = document.getElementById('cursor')

document.addEventListener('mousemove', (e) => {
  const x = e.clientX
  const y = e.clientY

  cursor.style.left = `${x}px`
  cursor.style.top =   `${y}px`
})