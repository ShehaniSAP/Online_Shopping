import React, { useState,useEffect } from "react"
import { useParams } from "react-router";
import axios from "axios";



export default function Update() {


    const [name, setName] = useState("");
    const { id } = useParams();

    const [address, setAddress] = useState("");
    const [nic, setNic] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [designation, setDesignation] = useState("");
    const [mail, setMail] = useState("");
    const [type, setType] = useState("");
   

    useEffect(() => {
      async function getData(){
            const result = await (await axios.get(`http://localhost:8070/employee/${id}`)).data.data
            console.log(result)
            console.log(result[0].name)
            setName(result[0].name);
            setAddress(result[0].address);
            setNic(result[0].nic);
            setDateOfBirth(result[0].dateOfBirth);
            setDesignation(result[0].designation);
            setMail(result[0].mail);
            setType(result[0].type);
            console.log(name)
        }
        getData()
    }, [])


    function sendData(e) {
        e.preventDefault();

        const newEmployee = {
            name,
            address,
            nic,
            dateOfBirth,
            designation,
            mail,
            type
        }

        axios.put(`http://localhost:8070/employee/updateEmp/${id}`, newEmployee).then(() => {
            alert("Employee Added")
            window.location = "/view"

        }).catch((err) => {
            console.log(err.message)
            alert(err)
        })

    }
return (


    <div className="content">
        <h3>Upadte-EMPLOYEE</h3><hr />

        <form onSubmit={sendData}>


            <label for="employeeName" class="form-label">Employee Name</label>
            <input type="text" id="employeeName" defaultValue={name} onChange={(e) => {
                setName(e.target.value);
            }
            } /><br />

            <label for="address" class="form-label">Employee Address</label>
            <input type="text" id="employeeAddress" defaultValue={address} onChange={(e) => {
                setAddress(e.target.value);
            }
            } /><br />

            <label for="nic" class="form-label">Employee National idenity card</label>
            <input type="text" id="employeeNic" defaultValue={nic} onChange={(e) => {
                setNic(e.target.value);
            }
            } /><br />

            <label for="employeedateOfBirth" class="form-label">Employee DateOfBirth</label>
            <input type="date" id="employeedateOfBirth" defaultValue={dateOfBirth} onChange={(e) => {
                setDateOfBirth(e.target.value);
            }
            } /><br />

            <label for="employeedesignation" class="form-label">Employee Designation</label>
            <input type="text" id="employedesignation" defaultValue={designation} onChange={(e) => {
                setDesignation(e.target.value);
            }
            } /><br />

            <label for="employeemail" class="form-label">Employee Mail</label>
            <input type="email" id="employedesignation" defaultValue={mail} onChange={(e) => {
                setMail(e.target.value);
            }
            } /><br />

            <label for="employeetype" class="form-label">Employee  Type</label>
            <input type="text" id="employeetype" defaultValue={type} onChange={(e) => {
                setType(e.target.value);
            }
            } /><br />



            <button type="update" class="btn btn-primary" onClick={(e)=>{sendData(e)}}>Update</button>
        </form>

    </div>
)
        }
    