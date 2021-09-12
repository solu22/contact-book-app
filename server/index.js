/* Express server config */
import app from './app.js'
import config from './utils/config.js' 
import logger from './utils/logger.js'

app.listen(config.PORT, ()=>{
    logger.info(`Server started at port ${config.PORT}`)
})
