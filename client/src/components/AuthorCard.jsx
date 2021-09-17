import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


const AuthorCard = (props) => {
    const { _id, name } = props.data;
   
    const deleteSingleAuthor = (_id) => {
        axios.delete(`http://localhost:8000/api/authors/${_id}/delete`)
            .then(res => {
                console.log(_id)
                props.setLoaded(prevState => !prevState);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="displayAuthor">
            <form className="form-control">
                <h3>Author</h3>
                <Link to={"/authors/" + _id}><h1>{name}</h1></Link>
            </form>
            <form className="form-control">
            <div className="actions">
                <h3>Actions</h3>
                <button className= "btn btn-info"><Link to={`/authors/${_id}/update`}>Edit</Link></button>
                <button className="btn btn-danger" onClick={(e)=>{deleteSingleAuthor(_id)}}><Link to="/">Delete</Link></button>
            </div>
            </form>
        </div>
    )
}

export default AuthorCard;