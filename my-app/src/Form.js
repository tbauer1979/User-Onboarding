import './App.css';
import schema from './formScheme'



function Form(props) {

const {name,email,password,tos,onChange,submitChange} = props

  return (
    <div className="Form">
        
        <form onSubmit={submitChange}>
            <div>
            <label>Full Name
                <input type="text" name="name" onChange={onChange} value={props.name} schema={schema}/>
            </label>
            <label>Email Address
                <input type="text" name="email"onChange={onChange} value={props.email} schema={schema}/>
            </label>
            <label>Password
                <input type="password" name="password"onChange={onChange} value={props.password} schema={schema}/>
            </label>
            <label>Terms of Service
                <input type="checkbox" checked={props.tos} name="tos"onChange={onChange} value={props.tos} schema={schema}/>
            </label>
            </div>
            <button>Submit</button>
        </form>
<div></div>
    </div>
  );
}

export default Form;
