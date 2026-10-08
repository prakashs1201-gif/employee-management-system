
   let employees=
   JSON.parse(localStorage.getItem("employees")) || [];
   let editIndex = -1;
   displayEmployees();
   function addEmployee(){
      let name=
      document.getElementById("name").value;
      let empId=
      document.getElementById("empId").value;
      let department=
      document.getElementById("department").value;
      let salary=
      document.getElementById("salary").value;
      if(name===" " || empId===""|| department===""|| salary===""){
         alert("Fill all fields");
         return;
      }
      let employee={
         name,
         empId,
         department,
         salary,
      };
      if(editIndex===-1){
         employees.push(employee);
      }else{
         employees[editIndex]=employee;editIndex =-1;
      }
      localStorage.setItem("employees",JSON.stringify(employees));
      displayEmployees();
      document.getElementById("name").value="";
      document.getElementById("empId").value="";
      document.getElementById("department").value="";
      document.getElementById("salary").value="";
 }
 function displayEmployees(){
   let
   tableBody=document.getElementById("tableBody");
   tableBody.innerHTML="";
   employees.forEach((emp,index) => {
       tableBody.innerHTML += `
       <tr>
         <td>${emp.name}</td>
         <td>${emp.empId}</td>
         <td>${emp.department}</td>
         <td>${emp.salary}</td>
         <td>
         
         <button class="edit"onclick="editEmployee(${index})">Edit</button>
         <button class="delete"onclick="deleteEmployee(${index})">Delete</button>
         </td>
         </tr>
         `;
         
   })

 }
 function deleteEmployee(index){
   employees.splice(index,1);
   localStorage.setItem("employees",JSON.stringify(employees));
   displayEmployees();
 }
 function editEmployee(index){
   let emp=employees[index];
   document.getElementById("name").value=emp.name;
   document.getElementById("empId").value=emp.empId;
   document.getElementById("department").value=emp.department;
   document.getElementById("salary").value=emp.salary;
   editIndex=index;
 }
 function searchEmployee(){
   let
   search=document.getElementById("search").value.toLowerCase();
   let
   rows=document.querySelectorAll("#tableBody tr");
   employees.forEach((emp,index)=>{
      if(emp.name.toLowerCase().includes(search)){
         rows[index].style.display=" ";
      }else{
         rows[index].style.display="none"
      }

   });
 }


 


   
 