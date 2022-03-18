import React, { useState } from "react"
import axios from "axios";
import './form.css';
export default function AddEmployee() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [nic, setNic] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [designation, setDesignation] = useState("");
    const [mail, setMail] = useState("");
    const [type, setType] = useState("");
    const [isInvalidNic, setInvalidNic] = useState(false);


    function sendData(e) {
        e.preventDefault();
if(
    nic.length!=10
)

{
    setInvalidNic(true)
    return
}
        const newEmployee = {
            name,
            address,
            nic,
            dateOfBirth,
            designation,
            mail,
            type
        }

        axios.post("http://localhost:8070/employee/", newEmployee).then(() => {
            alert("Employee Added")
             window.location = "/view"

        }).catch((err) => {
            console.log(err.message)
            alert(err)
        })

    }


    return (

        <div className="content">
            <h3>ADD-EMPLOYEE</h3><hr />

            <form onSubmit={sendData}>


                <label for="employeeName" class="form-label">Employee Name</label>
                <input type="text" id="employeeName" placeholder="Enter Employee Name" onChange={(e) => {
                    setName(e.target.value);
                }
                } /><br />

                <label for="address" class="form-label">Employee Address</label>
                <input type="text" id="employeeAddress" placeholder="Enter Employee Address" onChange={(e) => {
                    setAddress(e.target.value);
                }
                } /><br />

                
                <label for="nic" class="form-label">Employee National idenity card</label>
                <input type="text" id="employeeNic" placeholder="XXXXXXX" onChange={(e) => {
                    setNic(e.target.value);
                }
                } />
                {isInvalidNic ? (    <p class="form-error text-danger"> Invalid Nic Number</p>   ):null}
                   

                <br />

                



                <label for="employeedateOfBirth" class="form-label">Employee DateOfBirth</label>
                <input type="date" id="employeedateOfBirth" placeholder="Enter Employee DateOfBirth" onChange={(e) => {
                    setDateOfBirth(e.target.value);
                }
                } /><br />

                <label for="employeedesignation" class="form-label">Employee Designation</label>
                <input type="text" id="employedesignation" placeholder="Enter Employee Designation" onChange={(e) => {
                    setDesignation(e.target.value);
                }
                } /><br></br>

                <label for="employeemail" class="form-label">Employee Mail</label><br></br>
                <input type="email" id="employedesignation" placeholder="name@gmail.com" onChange={(e) => {
                    setMail(e.target.value);
                }
                } /> <br></br>

                <label for="employeetype" class="form-label">Employee  Type</label><br></br>
                <input type="text" id="employeetype" placeholder="Enter Employee Type" onChange={(e) => {
                    setType(e.target.value);
                }
                } /><br/> <br/>



                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

