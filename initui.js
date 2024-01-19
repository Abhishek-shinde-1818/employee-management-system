function initui(){


let rootDiv=document.getElementById("root")
let Div1 = document.createElement("div");
Div1.id = "navbar";
rootDiv.appendChild(Div1)
let text=document.createTextNode("AYS SOFTWARE SOLUTION")
Div1.appendChild(text)

let Div2 = document.createElement("div");
Div2.id = "content";
rootDiv.appendChild(Div2)

let Div3 = document.createElement("div");
Div3.id = "employee";
Div2.appendChild(Div3)

let Div4 = document.createElement("div");
Div4.id = "details";
Div2.appendChild(Div4)

let bt=document.createElement("BUTTON")
bt.id="addemp"
bt.type="button"
bt.textContent="Add Employee"
bt.onclick = function(){
    addEmpForm()
  };

Div1.appendChild(bt)




function addEmpForm(){
    let Div5 = document.createElement("div");
    Div5.id = "form";
    Div4.appendChild(Div5)
    // Create form element
    var form = document.createElement('form');
    form.id = 'employeeForm';
   
    // Create and append label and input for Name
    var nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    form.appendChild(nameLabel);
    
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.required = true;
    form.appendChild(nameInput);
    
    

    // Create and append label and input for Salary
    var salaryLabel = document.createElement('label');
    salaryLabel.textContent = 'Salary:';
    form.appendChild(salaryLabel);
    
    var salaryInput = document.createElement('input');
    salaryInput.type = 'text';
    salaryInput.id = 'salary';
    salaryInput.name = 'salary';
    salaryInput.required = true;
    form.appendChild(salaryInput);
   
    
    // Create and append label and input for Designation
    var designationLabel = document.createElement('label');
    designationLabel.textContent = 'Designation:';
    form.appendChild(designationLabel);
    
    var designationInput = document.createElement('input');
    designationInput.type = 'text';
    designationInput.id = 'designation';
    designationInput.name = 'designation';
    designationInput.required = true;
    form.appendChild(designationInput);
   
    // Create and append label and input for Department
    var departmentLabel = document.createElement('label');
    departmentLabel.textContent = 'Department:';
    form.appendChild(departmentLabel);
    
    var departmentInput = document.createElement('input');
    departmentInput.type = 'text';
    departmentInput.id = 'department';
    departmentInput.name = 'department';
    departmentInput.required = true;
    form.appendChild(departmentInput);

    
    var submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);
    Div5.appendChild(form)
    }
}