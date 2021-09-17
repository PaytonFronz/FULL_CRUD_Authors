import { useState, useEffect } from 'react';
import axios from 'axios';
import AuthorCard from '../components/AuthorCard';
import { Link, useHistory } from 'react-router-dom';

const AllAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    const history = useHistory();
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/all')
            .then(res => setAuthors(res.data.results))
            .catch(err => console.log(err))
    }, [loaded])

    return (
        <div className="allAuthors">
            <h3>Favorite Authors</h3>
            <h4>We have quotes by...</h4>
            <button className= "btn btn-info"><Link to={"/authors/create"}>Add Another Author</Link></button>
            <ul>
                {
                    authors.map((item, i) => {
                        return <AuthorCard key={i} data={item} setLoaded={setLoaded}/>
                    })
                }
            </ul>
        </div>
    )
}

export default AllAuthors