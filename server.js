const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});