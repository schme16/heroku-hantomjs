express = require('express')
exec = require('child_process').exec
app = express()


app.get('/', function (req, res) {
	exec('phantom -v', function function_name (err, a, b, c) {
		res.json([err, a, b, c])
	})
})
app.listen(process.env.PORT || 1337)