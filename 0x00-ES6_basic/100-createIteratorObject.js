export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;
  const departments = Object.values(report.allEmployees);
  
  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return {
          done: true
        };
      }
      
      const employees = departments[currentDepartmentIndex];
      const employee = employees[currentEmployeeIndex];
      
      if (currentEmployeeIndex < employees.length - 1) {
        currentEmployeeIndex++;
      } else {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
      }
      
      return {
        value: employee,
        done: false
      };
    }
  };
}
