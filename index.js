var h3 = document.querySelector('#root')

h3.addEventListener('click', e => {
  if (h3.id === 'root') {
    h3.id = 'rootsToo'
    h3.innerHTML = `<iframe src="https://giphy.com/embed/sYmqnfrpu6NCU" width="480" height="317" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`
  } else {
    h3.id = 'root'
    h3.innerHTML = `<iframe src="https://giphy.com/embed/sYmqnfrpu6NCU" width="480" height="317" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`
  }
})
