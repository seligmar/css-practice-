var h3 = document.querySelector('#root')

h3.addEventListener('click', e => {
  if (h3.id === 'root') {
    h3.id = 'rootsToo'
    h3.innerHTML = `<p>It no longer spins!</p>`
  }
  // &&
  else {
    h3.id = 'root'
    h3.innerText = 'It spins!'
  }
})
