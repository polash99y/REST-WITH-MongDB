const app = require('./app')
const config = require('./config/config')

const PORT = config.app.port

app.listen(PORT,()=>{
  console.log(`sarver is running at http://localhost:${PORT}`);
})