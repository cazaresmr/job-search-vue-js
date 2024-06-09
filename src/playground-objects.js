const developer = {
  salary: 100000,
  experience: 4.5,
  techStack: ['Vue', 'HTML', 'CSS', 'JavaScript'],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2
    this.lookingForWork = false
  }
}

console.log(developer) // { salary: 100000, experience: 4.5, techStack: [ 'Vue', 'HTML', 'CSS', 'JavaScript' ], lookingForWork: true }
console.log(developer.salary) // 100000

console.log(developer.doubleSalary()) // { salary: 200000, experience: 4.5, techStack: [ 'Vue', 'HTML', 'CSS', 'JavaScript' ], lookingForWork: false }
console.log(developer) // { salary: 200000, experience: 4.5, techStack: [ 'Vue', 'HTML', 'CSS', 'JavaScript' ], lookingForWork: false }
