import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCart = ({ category }) => {
    const { name, img, id } = category
    // const { bikes, setBikes } = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/categories/${id}`)
    //         .then(res => res.json())
    //         .then(data => setBikes(data))
    // })

    return (

        <div className="card glass">
            <figure><img className='w-full' src={img} alt="bike!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>You can buy or sell</p>
                <div className="card-actions justify-end">
                    <Link to={`/categories/${id}`}><button className="btn btn-primary">All Products</button></Link>
                </div>
            </div>
            <div>
                {/* {
                    bikes.map(product => <CatDetails
                        key={product._id}
                        product={product}
                    ></CatDetails>)
                } */}
            </div>
            <div></div>
        </div>
    );
};

export default CategoryCart;