import React from 'react'
import './productitem.component.css';

function ProductItem({title, img}) {
    return (
        <div className="col-xs-6 col-md-4 mt-4 text-center">
            <div class="product-card">
                <img src={img} 
                    class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <p class="card-text font-weight-bold">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
