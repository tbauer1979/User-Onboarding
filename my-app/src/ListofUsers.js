import './App.css';
function ListofUsers(props) {

    return (

<div className="users">
    <h1>Here are the list ofusers</h1>
        {props.users.map((user) => (
            <div>
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
                <h3>{user.tos}</h3>
            </div>
        ))}
    </div> 
 )
}
  
    export default ListofUsers





//     {props.users.map(a => {
//         <div>
//       <div><h1>{a}</h1></div>
//       </div>
// })}