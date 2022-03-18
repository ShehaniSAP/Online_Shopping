import React, { useState } from "react"
import axios from "axios";
import './form.css';
export default function AddSalary() {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [eno, setEno] = useState("");
    const [allowance, setAllowance] = useState("");
    const [isInvalidEno, setInvalidEno] = useState(false);

    function sendData(e) {
        e.preventDefault();

        if(
            eno.length!=10
        )
        
        {
            setInvalidEno(true)
            return
        }

        const newSalary = {
            name,
            category,
            eno,
            allowance
        }

        axios.post("http://localhost:8070/Salary/", newSalary).then(() => {
            alert("Salary Added")
             window.location = "/viewSalary"

        }).catch((err) => {
            console.log(err.message)
            alert(err)
        })

    }


    return (

        <div className="content">
            <h3>ADD-Salary</h3><hr />

            <form onSubmit={sendData}>


                <label for="employeeName" class="form-label">Employee Name</label>
                <input type="text" id="employeeName" placeholder="Enter Employee Name" onChange={(e) => {
                    setName(e.target.value);
                }
                } /><br />

                <label for="category" class="form-label">Employee Category</label>
                <input type="text" id="employeeCategory" placeholder="Enter Employee Category" onChange={(e) => {
                    setCategory(e.target.value);
                    
                }  
                } /><br /> 

                
                <label for="eno" class="form-label">Employee Number</label>
                <input type="text" id="employeeEno" placeholder="XXXXXXX" onChange={(e) => {
                setEno(e.target.value);
                }
               
                } /> 

                {isInvalidEno ? (    <p class="form-error text-danger"> Invalid Eno Number</p>   ):null}
                   
                <br />

                
                <label for="employeeallowance" class="form-label">Employee  Allowance</label>
                <input type="text" id="employeeallowance" placeholder="Enter Employee Allowance" onChange={(e) => {
                    setAllowance(e.target.value);
                }
                } /><br />

            



                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

