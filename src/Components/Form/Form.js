import {useState} from 'react';
import './Form.css'

const Form = ({getFilter}) => {

    const [form, setForm] = useState({name: '', username: '', email: ''});

    const formHandler = (e) => {
        const eventInfo = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...eventInfo})
    }

    const getFormInfo = (e) => {
         e.preventDefault()
        getFilter(form)
    }

    return (
        <div>
            <form>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                <label>Username: <input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
                <label>Email: <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
                <button onClick={getFormInfo}>Filter</button>
            </form>
        </div>
    );
};

export default Form;