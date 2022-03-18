const router = require("express").Router();
let Salary = require("../models/Salary");



router.route("/").post((req,res)=>{
    const{name,category,eno} =req.body;
    const allowance=Number(req.body.allowance);
    const newSalary = new Salary({

        name,
       category,
       eno,
       allowance

    })
    newSalary.save().then(()=>{
        res.status(200).send({data : newSalary});


    }).catch((err)=>{
        res.status(500).send({status : err});
    })
    })

    router.route("/").get((req,res)=>{

        Salary.find().then((salarys)=>{
            res.json(salarys)
        }).catch((err)=>{
            console.log(err)
        })
    })
    
    router.route("/:id").get(async(req,res)=>{
    
        try{
            let id = req.params.id;
            const details = await Salary.find({_id : id})
            res.status(200).send({data : details});
    
        }catch(err){
            res.status(500).send({data : err});
        }
    })
    
    
    router.route("/updatesal/:id").put(async(req,res)=>{
        let _id = req.params.id;
        const{name,category,eno,allowance} =req.body;
    
        const updateSalary = {
            _id,
            name,
            category,
            eno,
            allowance
            
    
        }
     const updateSalar = await Salary.findByIdAndUpdate(_id, updateSalary)
     res.status(200).send({data : updateSalar});
    
    
    })
    
    
    
    router.route("/:id").delete(async(req,res)=>{
        try{
            const id = req.params.id;
            const removedSalary = await Salary.findByIdAndDelete(id)
            res.status(200).send({data : removedSalary});
        
    
        }catch(err){
            res.status(500).send({data : err});
        }
    
    })
    
    
    
module.exports = router;



