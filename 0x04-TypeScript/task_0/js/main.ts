interface Student {
	  firstName: string;
	  lastName: string;
	  age: number;
	  location: string;
}

const student1: Student  = {
      firstName: 'Hill',
      lastName: 'Wegz',
      age: 26,
      location: 'Nairobi'
}

const student2: Student = {
      firstName: 'Ann',
      lastName: 'Gakii',
      age: 28,
      location: 'Meru'
}

const studentsList: Array<Student> = [student1, student2]
const table: HTMLTableElement = document.createElement('table')
const tableBod: HTMLTableSectionElement = table.createTBody();
studentsList.forEach(function(student) {
  const newRow: HTMLTableRowElement = table.insertRow();
  const newFirst: HTMLTableCellElement = newRow.insertCell();
  const newLoc: HTMLTableCellElement = newRow.insertCell();
  newFirst.innerHTML = student.firstName;
  newLoc.innerHTML = student.location;
  });
document.body.appendChild(table);