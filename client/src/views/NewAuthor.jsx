import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios';

const CreateAuthor = (props) => {
    const history = useHistory();
    
    const [form, setForm] = useState({
       name:""
    })

    const [errors, setErrors] = useState({});

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("helloooooo")
        
        axios.post("http://localhost:8000/api/authors/create", form)
            .then(res=>{
                console.log(res);

                if(res.data.results){
                    history.push('/');
                }
                else{
                    setErrors(res.data.err.errors);
                }
            })
            .catch(err => console.log(err))
    }

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    return(
        <div className="newAuthor">
            <form onSubmit={onSubmitHandler}>
                <h1>Add new author</h1> 
                <Link to="/">Home</Link>
                <div className="form-group">
                    <input name="name" className="form-control" type="text" placeholder="Author Name" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.name && errors.name.message}</span>
                    <br></br>
                    <button type="submit" className="btn btn-info">Create</button>
                </div>
                <button className="btn btn-warning"><Link to="/">Cancel</Link></button>
            </form>
        </div>
    )
}

export default CreateAuthor;