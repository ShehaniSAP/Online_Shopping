import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';

import SoloAlert from 'soloalert'
import axios from 'axios';
import './view.css';
import jspdf from 'jspdf'
import "jspdf-autotable"
import img from '../components/Estilo.jpg';




export default function ViewSalary() {
    const [salary, setsalary] = useState([]);
    const [search, setsearch] = useState("");
    const [filtered, setfiltered] = useState([]);
    const [id, setID] = useState(1);
    var UserID = 1;

    //This useEffect function used to get all user's data
    useEffect(() => {

        async function getSalary() {

            try {
                const result = await (await axios.get("http://localhost:8070/salary/")).data
                console.log(result)
                setsalary(result);
                console.log(result)
            } catch (err) {
                console.log(err.message)
            }
        }
        getSalary();

    }, [])

    //This useEffect method is used to perform a searching function
    useEffect(() => {
        setfiltered(
            salary.filter(items => {
                return items.name.toLowerCase().includes(search.toLowerCase())
            })
        )


    }, [search, salary])

    async function delet(id) {
        SoloAlert.confirm({

            title: "Confirm Delete",
            body: "Are you sure",
            theme: "dark",
            useTransparency: true,
            onOk: async function () {

                try {
                    const result = await (await axios.delete(`http://localhost:8070/salary/${id}`)).status; console.log(result)

                    if (result === 200) {
                        SoloAlert.alert({
                            title: "Welcome!",
                            body: "Deletion is successful",
                            icon: "success",
                            theme: "dark",
                            useTransparency: true,
                            onOk: function () {
                                window.location = "/viewSalary"
                            },

                        });
                    }
                } catch (err) {
                    SoloAlert.alert({
                        title: "Oops!",
                        body: "Something went wrong",
                        icon: "error",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {

                        },

                    });
                }
            },
            onCancel: function () {
                SoloAlert.alert({
                    title: "Oops!",
                    body: "You canceled delete request",
                    icon: "warning",
                    theme: "dark",
                    useTransparency: true,
                    onOk: function () {

                    },

                });
            },

        })
    }

     // genarate pdf

     const generatePDF = tickets => {

        const doc = new jspdf();
        const tableColumn = ["Id", "Name", "Category", "Eno", "allowance",];
        const tableRows = [];
        const date = Date().split(" ");
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];

        tickets.map(ticket => {
            const ticketData = [
                ticket.id,
                ticket.name,
                ticket.category,
                ticket.eno,
                ticket.allowance,
                
            ];
            tableRows.push(ticketData);
        })
        doc.text("Estilo Wears PVT LTD", 70, 8).setFontSize(13);
        doc.text("Employee Salary Report", 14, 16).setFontSize(13);
        doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
        //right down width height
        doc.addImage(img, 'JPEG', 170, 8, 25, 25);
        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
        doc.save("Employee Salary Report.pdf");
    };

    

    
    return (
        <div className="content">
            <h1>View All salary</h1>
            <div class="buttonn">
       
       <button type="text" class="btnq btnq--skew btnq-default"> Employee Count : {salary.length} </button>
   </div>
   <div class="buttonnn">
       <button type="button" class="btn btn-secondary btn-sm" onClick={() => generatePDF(salary)} >GenerateReport</button> <br></br>
            </div> 



            <input class="form-control" id="myInput" type="text" placeholder="Search.."
                onChange={e => { setsearch(e.target.value) }} />
            <br></br>
            <table class="content-tables">
                <thead>
                    <tr align="center">
                        <th>Id</th>
                        <th>Name</th>
                        <th> Category</th>
                        <th>Eno</th>
                        <th>allowance</th>
                        <th>Update</th>
                        <th>Delete</th> 
                        
                    </tr>
                </thead>
                <tbody>
                    {filtered.slice(0).reverse().map((emp) => {
                        return <tr>
                            <td>{UserID++}</td>
                            <td>{emp.name}</td>
                            <td> {emp.category}</td>
                            <td>  {emp.eno}</td>
                            <td>{emp.allowance}</td>
                            
                            <td><Link to={"/updatesal/"+emp._id} type="submit" class="btn btn-primary" ><i class="fa fa-trash"></i>  UPDATE</Link></td>
                            <td><button type="submit" class="btn btn-danger" onClick={(e) => { delet(emp._id) }}><i class="fa fa-trash"></i>  DELETE</button>
                            </td>
                        </tr>

                    })}



                </tbody>
            </table>


        </div>
    )
}