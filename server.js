const express = require('express');
const handles = require('express-handlebars');

let app = express();

app.engine('handlebars', handles({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000);
