const express=require("express")
	const app=express()
	const port=3000;
	const cors=require("cors")
	const employee={id:24,name:"manasa",position:"frontend"}
	const students=require("./data.js")

	app.use(cors())

	app.get("/",(req,res)=>{
			res.send("starting route")
	})

	app.get("/demo",(req,res)=>{
		res.send("this is demo route")
	})

	app.get("/emp",(req,res)=>{
		res.json(employee)
	})

	app.get("/students-list",(req,res)=>{
		res.json(students)
	})
	


	app.listen(port,()=>console.log("server is running on port 3000"))
