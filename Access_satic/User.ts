enum Role {
    "admin" = 1,
    "user"
}
class User {
    protected name : string;
    protected email : string;
    public role : Role;
    constructor(name:string,
                email: string,
                role : Role) {
        this.email=email;
        this.name=name;
        this.role=role;
    }
    getÌno(){
       return `ten: ${this.name} email :${this.email} role : ${this.role}`;
    }
    setName(name){
        this.name = name;
    }
    setEmail(email){
        this.email=email;
    }
    setRole(role){
        this.role=role;
    }
    isAdmin(){
        if (this.role == 1){
            return " la ad min";
        }
        else {
            return "nguoi dung bt";
        }
    }

}
let use1 = new User('hieu','hieu@gmail.com',1);
console.log(use1.isAdmin());