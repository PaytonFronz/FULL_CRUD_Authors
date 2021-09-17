import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import AuthorCard from '../components/AuthorCard';

const SingleAuthor = (props) => {
    const [author, setAuthor] = useState({});
    const { _id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log(res.data);
                setAuthor(res.data.results);
            })
            .catch(err => console.log(err))
    }, [_id]);

    return (
        <div className="singleAuthor">
            <Link to="/">Home</Link>

            {
                author && <AuthorCard data={author} />
            }
        </div>
    )

}

export default SingleAuthor;