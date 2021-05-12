import './App.css';
import * as yup from 'yup'
import axios from 'axios'
import Form from './Form'
import react, {useState} from'react'
import ListofUsers from './ListofUsers'
import { schema } from './formScheme'

const initialFormValues = {name: '',email: '',password: '',tos: 'false',}
const initialFormErrors = {name: '',email: '',password: '',tos: '',}
const initialUsers = []
const initialDisabled = true



function App(props) {

  const [users, setUsers] = useState(initialUsers)        
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled) 




  // FIRST STEP
const onChange = evt => {
  const { name, value, checked, type } = evt.target
  const inputValue = type === "checkbox" ? checked : value
  inputChange(name, inputValue)
}

// SECOND STEP
const inputChange = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({...formErrors,[name]: ''}))
  .catch(err => setFormErrors({...formErrors,[name]: err.errors[0]}))
  setFormValues({...formValues,[name]: value  })
}



const formSubmit = (event) => {
  event.preventDefault()
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    tos: formValues.tos,
  }
  postNewUser(newUser)
}




const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(({data}) => setUsers([data, ...users]))
  console.log(users.name)
}











  return (
    <div className="App">
        <Form submitChange={formSubmit} onChange={onChange}/>
        <div>
        </div>
       <ListofUsers users={users} />
    </div>
    
  );
}

export default App;
