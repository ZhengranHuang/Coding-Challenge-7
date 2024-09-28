//Task1:Create a Department Structure
const company = {
departments: [
{
departmentName: 'Engineering',
employees: [
{
name: 'Alice',
salary: 100000,
subordinates: [
{
name: 'Bob',
salary: 80000,
subordinates: [
{
name: 'Charlie',
salary: 60000,
subordinates: []
}
]
}
]
},
{
name: 'David',
salary: 90000,
subordinates: []
}
]
},
{
departmentName: 'Sales',
employees: [
{
name: 'Eve',
salary: 85000,
subordinates: [
{
name: 'Frank',
salary: 70000,
subordinates: []
}
]
},
{
name: 'Grace',
salary: 95000,
subordinates: []
}
]
}
]
};
//Task2:Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary(department){
let totalSalary;
let totalSalaryinsubordinates;
let realtotalSalary;
const departs = company.find(dn => dn.departmentName === department);
if (departs.subordinates.length === 0 && departs){
totalSalary += employee.salary;
return console.log(`${department} total Salary "${totalSalary}"`)
};
if (departs.subordinates.length > 0 && departs){
employee.subordinates.forEach(subordinate =>{totalSalaryinsubordinates+= subordinate.salary});
totalSalary += employee.salary;
realtotalSalary = totalSalaryinsubordinates + totalSalary;
return console.log(`${department} total Salary "${realtotalSalary}"`)
}
if(!departs){
console.log(`${department} is Error.`)
}
}
calculateDepartmentSalary('Sales')