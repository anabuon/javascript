class Entity {
  constructor(name) {
    this.name = name
  }
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
}

User.prototype.printUser = function () {
  console.log('User name:', this.name)
}

Box.prototype.printBox = function () {
  console.log('Box name:', this.name)
}

Stuff.prototype.printStuff = function () {
  console.log('Stuff name:', this.name)
}

const userName = new User('Ana')
const userName2 = new User('Andrey')
const box1 = new Box('Animal')

const cat = new Stuff('cat')
const snake = new Stuff('snake')

box1.addStuff(cat)
box1.addStuff(snake)
userName.addBox(box1)

console.log(userName)

userName.printUser()
box1.printBox()

console.log(userName2)
userName2.printUser()
