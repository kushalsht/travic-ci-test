const debug = require('debug');
const app = require('./app');

const port = parseInt(process.env.PORT || '3000', 10);
app.set('port', port);

app.listen(app.get('port'), () => {
  debug(`Express server listening on port ${app.get('port')}`);
});
