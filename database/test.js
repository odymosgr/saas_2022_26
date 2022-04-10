const mysql = require('mysql')
const pool = require('./pool.js')

pool.getConnection(function (err, connection){

  q='SELECT 1+1'

	connection.query(q, (err, result) => {
		if (err) console.log(err)
    console.log(result)
	})
		
	connection.release()
})