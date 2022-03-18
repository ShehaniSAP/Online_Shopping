import React, { useState,useEffect } from "react"
import { useParams } from "react-router";
import axios from "axios";



export default function UpdateSalary() {


    const [name, setName] = useState("");
    const { id } = useParams();

    const [category, setCategory] = useState("");
    const [eno, setEno] = useState("");
    const [allowance, setAllowance] = useState("");
   
   

    useEffect(() => {
      async function getData(){
            const result = await (await axios.get(`http://localhost:8070/salary/${id}`)).data.data
            console.log(result)
            console.log(result[0].name)
            setName(result[0].name);
            setCategory(result[0].category);
            setEno(result[0].eno);
            setAllowance(result[0].allowance);
            
            console.log(name)
        }
        getData()
    }, [])


    function sendData(e) {
        e.preventDefault();

        const newSalary = {
            name,
            category,
            eno,
            allowance
            
        }

        axios.put(`http://localhost:8070/salary/updatesal/${id}`, newSalary).then(() => {
            alert("Salary Added")
            window.location = "/viewSalary"

        }).catch((err) => {
            console.log(err.message)
            alert(err)
        })

    }
return (


    <div className="content">
        <h3>Upadte-Salary</h3><hr />

        <form onSubmit={sendData}>


            <label for="employeeName" class="form-label">Employee Name</label>
            <input type="text" id="employeeName" defaultValue={name} onChange={(e) => {
                setName(e.target.value);
            }
            } /><br />

            <label for="category" class="form-label">Employee Category</label>
            <input type="text" id="employeeCategory" defaultValue={category} onChange={(e) => {
                setCategory(e.target.value);
            }
            } /><br />

            <label for="eno" class="form-label">Employee Number</label>
            <input type="text" id="employeeNo" defaultValue={eno} onChange={(e) => {
                setEno(e.target.value);
            }
            } /><br />

            <label for="employeeallowance" class="form-label">Employee Allowance</label>
            <input type="number" id="employeeallowance" defaultValue={allowance} onChange={(e) => {
                setAllowance(e.target.value);
            }
            } /><br />

            



            <button type="update" class="btn btn-primary" onClick={(e)=>{sendData(e)}}>Update</button>
        </form>

    </div>
)
        }
    