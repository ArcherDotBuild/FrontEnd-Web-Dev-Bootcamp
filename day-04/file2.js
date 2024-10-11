console.log('document.head: ', document.head)
console.log('document.head: ', document.head.title)
console.log('window: ', window)
console.log('window.document.title: ', window.document.title)
console.log('\n')
console.log('********************')

// Creating a paragraph element
const para = document.createElement('p') // DOM node. para = paragraph
para.textContent = 'this is created using DOM API' // Add text to paragraph element
para.classList.add('one')
para.classList.add('second-class')

para.classList.remove('second-class') // This removes a class from the element

para.setAttribute('id', 'js-para') // Setting attribute
console.log("01. para.getAttribute('id'): ", para.getAttribute('id')) // Get the attribute, this logs the attribute in the terminal

// In order to create an element i have access to the document object
// Access the properties of an object with the dot . operator
// Then i want to create an element which is a function createElement('')
const span = document.createElement('span') // DOM node
span.id = 'span-id' // Setting attributes
// span.className = 'blue'
span.className = 'blue red green' // this adds multiple classes
span.textContent = ' this is span created using dom.createElement'
span.style.backgroundColor = 'purple' // Styling with CSS rules

para.appendChild(span) // Append the span inside the para

document.body.appendChild(para) // Append it inside the body tag

const para2 = document.createElement('p')
para2.innerHTML = '<b>Hello</b>'
document.body.appendChild(para2)

const hobbies = ['coding', 'swimming', 'jogging']
const list = document.createElement('ul')
for (let hobby of hobbies) {
  list.innerHTML += '<li class="blue">' + hobby + '</li>'
}
document.body.appendChild(list)

console.log('\n')
console.log('********************')
console.log(
  "02. document.getElementById('first-para'): ",
  document.getElementById('first-para')
)

console.log('\n')
console.log('********************')
console.log(
  "03. document.getElementById('first-para': ",
  document.getElementById('first-para').textContent
)

console.log('\n')
console.log('********************')
console.log(
  "04a. document.getElementsByClassName('blue'): ",
  document.getElementsByClassName('blue')
)
console.log(
  "04b. document.getElementsByClassName('blue'): ",
  document.getElementsByClassName('blue')[0].className
)

console.log('\n')
console.log('********************')
// querySelector gives more flexibility, for tag 'p', for id '#id', for class '.class'
console.log("05. document.querySelector('p'): ", document.querySelector('p')) // returns first element that matches this selector

console.log('\n')
console.log('********************')
console.log(
  "06. document.querySelectorAll('p'): ",
  document.querySelectorAll('p')
) // returns all elements that matches this selector 

console.log('\n')
console.log('********************')
console.log(
  "07. document.querySelector('#first-para'): ",
  document.querySelector('#first-para') // id: first-para
)

console.log('\n')
console.log('********************')
console.log(
  "08. document.querySelector('.one'): ",
  document.querySelector('.one') // class: one
)

console.log('\n')
console.log('********************')
console.log("09. document.querySelector('ul'): ", document.querySelector('ul')) // tag: ul
