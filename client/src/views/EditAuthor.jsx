import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from 'axios';


const EditAuthor = () => {
    const history = useHistory();
    const { _id } = useParams();


    const [form, setForm] = useState({
        name: ""
    })

    const [errors, setErrors] = useState({});

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const updateSingleAuthor = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${_id}/update`, form)
            .then(res => {
                console.log(res);

                if (res.data.results) {
                   history.push('/');
                }
                else {
                    setErrors(res.data.err.errors);
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log(res.data);
                setForm(res.data.results);
            })
            .catch(err => console.log(err))
    }, [_id]);


    return(
        <div className="newAuthor">
            <form onSubmit={updateSingleAuthor}>
                <h1>Edit Author</h1> 
                <Link to="/">Home</Link>
                <div className="form-group">
                    <input name="name" value={form.name} className="form-control" type="text" placeholder="Author Name" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.name && errors.name.message}</span>
                </div>
                <input type="submit" className="btn btn-info"/> <button className="btn btn-warning"><Link to="/">Cancel</Link></button>
            </form>
        </div>
    )
}

export default EditAuthor;