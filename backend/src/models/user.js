class User {
    constructor(obj) {
        /*name,cpf,mail*/
        obj = obj!=null?obj:{}
        this.name = obj.name
        this.cpf = obj.cpf
        this.mail = obj.mail
    }
}

module.exports = User