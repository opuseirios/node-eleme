module.exports = {
    port: process.env.PORT || 3000,
    url:'mongodb://localhost:27017/eleme',
    session:{
        name:"SID",
        secret:"SID",
        cookie:{
            httpOnly:true,
            secure:false,
            maxAge:2592000000
        }
    }
}