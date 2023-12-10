const override = (config,env) =>{
    config.resolve.fallback = {
        fs: false
    }
    return config
}
module.exports = override