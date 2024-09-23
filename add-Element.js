const firstList = document.getElementById('firstUl')
const li = document.createElement('li')
li.innerText = 'making a new li'
firstList.appendChild(li)

const mainTag = document.getElementById('main-tag')
const section = document.createElement('section')
const heading = document.createElement('h1')
heading.innerText='new section JS'
section.append(heading)

const ul = document.createElement('ul')

const liX = document.createElement('li')
liX.innerText='list line-1'
const li2 = document.createElement('li')
li2.innerText='list line-2'
const li3 = document.createElement('li')
li3.innerText='list line-3'
const li4 = document.createElement('li')
li4.innerText='list line-4'
const li5 = document.createElement('li')
li5.innerText='list line-4'

ul.append(liX,li2,li3,li4,li5)

section.append(ul)
mainTag.append(section)
