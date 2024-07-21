import React from "react";

/*let array1 = [1,2,3,4,5];
function called(){

  array1 = array1.map(x => x * 2);

  console.log(array1);
}*/
// map method explaied

function ListRender() {
  // const names = ['Vishal', 'Shekha','Vidya', 'Sudha']

  const employee = [
    {
      employee_id: "E001",
      name: "Alice Smith",
      age: 30,
      department: "Engineering",
      role: "Software Engineer",
      email: "alice.smith@example.com",
      phone: "555-1234",
    },
    {
      employee_id: "E002",
      name: "Bob Johnson",
      age: 45,
      department: "HR",
      role: "HR Manager",
      email: "bob.johnson@example.com",
      phone: "555-5678",
    },
    {
      employee_id: "E003",
      name: "Charlie Brown",
      age: 28,
      department: "Marketing",
      role: "Marketing Specialist",
      email: "charlie.brown@example.com",
      phone: "555-8765",
    },
    {
      employee_id: "E004",
      name: "Dana White",
      age: 35,
      department: "Sales",
      role: "Sales Executive",
      email: "dana.white@example.com",
      phone: "555-4321",
    },
    {
      employee_id: "E005",
      name: "Evan Green",
      age: 50,
      department: "Finance",
      role: "Chief Financial Officer",
      email: "evan.green@example.com",
      phone: "555-0987",
    },
  ];
  const name = employee.map((emp) => (
    <div key={emp.employee_id}>My name is {emp.name}</div>
  ));
  // it is used to render DOM faster if given key the DOM doesnt remove the old tree

  // const name = employee.map((emp,index) => <div key={index}>My name is {emp.name}</div>);
  // may cause error if you use index as key

  return (
    <div>
      {/* <button onClick={called}></button> */}

      {/* {
        names.map(x => <div>{x}</div>)
        } */}
      {/* This is how you map data to elements */}

      {name}
    </div>
  );
}

export default ListRender;
