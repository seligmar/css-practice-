var h3 = document.querySelector('#coin')

h3.addEventListener('click', () => {
  if (h3.className === 'heads') {
    h3.className = 'tails'
    // h3.innerHTML = `<iframe src="https://giphy.com/embed/sYmqnfrpu6NCU" width="480" height="317" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`
  } else {
    h3.className = 'heads'
    // h3.innerHTML = `<iframe src="https://giphy.com/embed/sYmqnfrpu6NCU" width="480" height="317" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`
  }
})
