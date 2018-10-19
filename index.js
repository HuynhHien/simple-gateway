const express = require('express');

var mysql = require('mysql');




const server = express();
//const port = process.env.PORT || 3000;
const port = 6688;

server.get('/register', (req, res) => {
  console.log(`RegisterId: ${req.query.register_id}!`);  
  console.log(`\nDeviceId: ${req.query.device_id}!`);  
  
  var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database: "fire_database"
	})

	// Record - tracking
	con.connect(function(err){
		if(err) throw err;
		console.log("Connected!");
		var sql = "INSERT INTO fire_user_identify (user_id, device_id, register_id, date)" 
				+ "SELECT * FROM ( SELECT "
				+ "'dummy_user_id_2', "
				+ "'dummy_device_id_2', "
				+ "'" +  req.query.device +"', "
				+ "'2018-10-10'"
				+ ") as tmp WHERE NOT EXISTS (SELECT device_id FROM fire_user_identify WHERE device_id = "
				+ "'dummy_device_id_2'"
				+ ") LIMIT 1;";

		sql += "INSERT INTO fire_request_adm (device_id, register_id)"
			+ "SELECT * FROM ( SELECT ";
			+ ""
		
		con.query(sql, function(err, result, fields){
			if(err) throw err;
			console.log("Complete !");
		});			
	});
	con.end();	
	
	res.send("Thanks you !!!");
});

server.listen(port, () => console.log(`Example app listening on port ${port}!`))




