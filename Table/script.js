let list = [
  [1, 'Nikola', 'Boler'],
  [2, 'Andrey', 'Nvin'],
  [3, 'Ana', 'Los'],
  [4, 'Titan', 'Dop'],
  [5, 'Fituy', 'Fpot'],
]

let table = document.querySelector('.table')
for (let i = 0; i < list.length; i++) {
  let tr = document.createElement('tr')

  for (let j = 0; j < list[i].length; j++) {
    let td = document.createElement('td')
    td.innerHTML = list[i][j]
    tr.appendChild(td)
  }
  table.appendChild(tr)
}

let tds = document.querySelectorAll('td')
for (let i = 3; i < tds.length; i++) {
  tds[i].addEventListener('click', function onClick() {
    let input = document.createElement('input')
    input.value = this.innerHTML
    this.innerHTML = ''
    this.appendChild(input)

    let td = this
    input.addEventListener('blur', function () {
      td.innerHTML = this.value
      td.addEventListener('click', onClick)
    })
    this.removeEventListener('click', onClick)
  })
}

let trs = document.querySelectorAll('tr')
let sortFirstName = document.querySelector('.table-firstname')
let sortLastName = document.querySelector('.table-lastname')

function sort(n) {
  let sorted = [...trs]
    .slice(1)
    .sort((rowA, rowB) =>
      rowA.cells[n].innerHTML > rowB.cells[n].innerHTML ? 1 : -1
    )
  table.tBodies[0].append(...sorted)
}
sortFirstName.addEventListener('click', () => sort(1))
sortLastName.addEventListener('click', () => sort(2))
