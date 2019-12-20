var H1 = document.querySelector('#root')

H1.addEventListener('click', e => {
  e.preventDefault
  H1.innerText = 'This here'
})
