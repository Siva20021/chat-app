const getOtherEmail=()=>(users,currentUser)=>{
    return users?.filter(user=>user!==current)
}
export default getOtherEmail;
