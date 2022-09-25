const para = document.createElement('p')
para.textContent = 'this is created using DOM API'
para.classList.add('one')
para.classList.add('second-class')

para.classList.remove('second-class')

para.setAttribute('id', 'js-para')
console.log(para.getAttribute('id')) // this logs the attribute in the terminal

const span = document.createElement('span') // DOM node
span.id = 'span-id'
// span.className = 'blue'
span.className = 'blue red green' // this adds multiple classes
span.textContent = ' this is span created using dom.createElement'
span.style.backgroundColor = 'yellow'

para.appendChild(span)

document.body.appendChild(para)

const para2 = document.createElement('p')
para2.innerHTML = '<b>Hello</b>'
document.body.appendChild(para2)

const hobbies = ['coding', 'swimming', 'jogging']
const list = document.createElement('ul')
for (let hobby of hobbies) {
  list.innerHTML += '<li class="blue">' + hobby + '</li>'
}
document.body.appendChild(list)

console.log(document.getElementById('first-para'))
console.log(document.getElementById('first-para').textContent)

console.log(document.getElementsByClassName('blue'))

// querySelector gives more flexibility
console.log(document.querySelector('p')) // returns first element that matches this selector
console.log(document.querySelectorAll('p')) // returns all elements that matches this selector
console.log(document.querySelector('#first-para'))
console.log(document.querySelector('.one'))
console.log(document.querySelector('ul'))
