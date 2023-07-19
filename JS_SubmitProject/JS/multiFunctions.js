const  stuData = ()=>{
    return "Stuname Dhana";
}

const stuVillage = () =>{
    return "Puthagaram";
}

const stuTown = () =>{
    return "Kanchipuram";
}

class stuBiodata{
    constructor(name){
        this.nameMe = name;
    }
    displayData(){
        return `my Name is ${this.nameMe}`;
    }
}

const stuDetails = [
    {
        "userId" : 1,
        "postId" :1
    },
    {
        "userId" : 1,
        "postId" :2
    },
    {
        "userId" : 2,
        "postId" :3
    },
    {
        "userId" : 2,
        "postId" :4
    },
    {
        "userId" : 3,
        "postId" :5
    },
    {
        "userId" : 3,
        "postId" :6
    },
    {
        "userId" : 4,
        "postId" :7
    },
    {
        "userId" : 4,
        "postId" :8
    },
    {
        "userId" : 5,
        "postId" :9
    },
    {
        "userId" : 5,
        "postId" :10
    },
]

export default stuData;
export {stuVillage,stuTown,stuBiodata,stuDetails};