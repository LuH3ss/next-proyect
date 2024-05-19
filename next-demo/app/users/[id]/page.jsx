import User from "@/components/User";

async function fetchUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data.data
}
async function UserPage({params}) {
 const user = await fetchUser(params.id);
    console.log(user)


  return (

    <User user={user} />
  
    
  )
}

export default UserPage;
