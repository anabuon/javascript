class Entity {
  constructor(name) {
    this.name = name
  }
  print() {}
  draw() {}
}

class Stuff extends Entity {
  constructor(name) {
    super(name)
  }
}

class Box extends Entity {
  constructor(name) {
    super(name)
    this._stuff = []
  }
  addStuff(stuff) {
    this._stuff.push(stuff)
  }
  draw(ul) {
    let li = document.createElement('li')
    let json = JSON.stringify(this._stuff)
    li.innerText = `${this.name} ${json}`
    ul.appendChild(li)
  }
}

class User extends Entity {
  constructor(name) {
    super(name)
    this._boxes = []
  }
  addBox(box) {
    this._boxes.push(box)
  }
  toString() {
    this.box.join(' ')
  }
  draw() {
    let div = document.createElement('div')
    div.innerText = this.name
    let ul = document.createElement('ul')
    div.appendChild(ul)
    this._boxes.forEach((e) => e.draw(ul))
    document.body.appendChild(div)
  }
}

User.prototype.print = function () {
  console.log('User name:', this.name)
}

Box.prototype.print = function () {
  console.log('Box name:', this.name)
}

Stuff.prototype.print = function () {
  console.log('Stuff name:', this.name)
}

const user1 = new User('Ana')
const box1 = new Box('Animal')
const cat = new Stuff('cat')
const snake = new Stuff('snake')

const user2 = new User('Andrey')
const box2 = new Box('Pupil')
const pupil1 = new Stuff('Ana')
const pupil2 = new Stuff('Olga')

box1.addStuff(cat)
box1.addStuff(snake)
user1.addBox(box1)

box2.addStuff(pupil1)
box2.addStuff(pupil2)
user2.addBox(box2)

user1.draw()
user2.draw()

// console.log(user1)

// user1.print()
// box1.print()

// console.log(user2)
// user2.print()
