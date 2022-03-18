const router = require("express").Router();
let Employee = require("../models/Employee");




router.route("/").post((req,res)=>{
    const{name,address,nic,dateOfBirth,designation, mail,type} =req.body;

    const newEmployee = new Employee({

        name,
        address,
        nic,
        dateOfBirth,
        designation,
        mail,
        type

    })

    newEmployee.save().then(()=>{
        res.status(200).send({data : newEmployee});

    }).catch((err)=>{
        res.status(500).send({status : err});
    })


})



router.route("/").get((req,res)=>{

    Employee.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/:id").get(async(req,res)=>{

    try{
        let id = req.params.id;
        const details = await Employee.find({_id : id})
        res.status(200).send({data : details});

    }catch(err){
        res.status(500).send({data : err});
    }
})


router.route("/updateEmp/:id").put(async(req,res)=>{
    let _id = req.params.id;
    const{name,address,nic,dateOfBirth,designation, mail,type} =req.body;

    const updateEmployee = {
        _id,
        name,
        address,
        nic,
        dateOfBirth,
        designation, 
        mail,
        type
        

    }
 const updateEmploy = await Employee.findByIdAndUpdate(_id, updateEmployee)
 res.status(200).send({data : updateEmploy});


})



router.route("/:id").delete(async(req,res)=>{
    try{
        const id = req.params.id;
        const removedEmployee = await Employee.findByIdAndDelete(id)
        res.status(200).send({data : removedEmployee});
    

    }catch(err){
        res.status(500).send({data : err});
    }

})


module.exports = router;
