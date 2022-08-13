import React, {useState, useEffect} from 'react'
import './product.component.css';
import ProductItem from './productitem/productitem.component';
import axios from 'axios';

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
        .then(res => setProducts(res.data))
        .catch(err=> console.log(err))
       
    }, [])

    return (
        <div className="ajust" style={{marginTop:'150px',marginBottom:'50px'}} id='product'>
            <div className="title">Our products</div>
            <div>
           <p className='intro'>Up-tech offers its producer customers a range of diversified essential products 
               including foods of all ages, sanitary products and certain basic equipment. 
               It also offers its customers quality, fresh and valuable chickens and eggs from the farm.</p> 
            </div>
            <div className="row">
                {products?.map((product, i)=>(
                     <ProductItem
                        key={i}
                        title={product.namep}
                        img={
                            product.photo.startsWith('http') ? product.photo:
                            `https://uptech-agro.herokuapp.com/${product.photo}`
                        }
                     />
                ))}
               
                
            </div>
        </div>
    )
}

export default Product
