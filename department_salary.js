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
let totalSalary = department.salary;
for(let subordinate of department.subordinates){
    totalSalary += calculateDepartmentSalary(subordinate);
}
return totalSalary;
}
const totalSalary = calculateDepartmentSalary(company.departments[0]);
console.log(`Total Salary $${totalSales}`);

//Create a Function to Calculate the Total Salary for All Departments
function calculateCompanySalary(company){
let companySalary = 0;
for (const department of company.departments){
companySalary += calculateDepartmentSalary(department);
}
return companySalary;
}
const companySalary = calculateCompanySalary(company);
console.log(`Company Salary $${companySalary}`);