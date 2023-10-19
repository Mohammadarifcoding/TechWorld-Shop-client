import React from 'react';
import Product from './Product';

const BrandProducts = ({data}) => {
    console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 mb-3'>
            {data.map(value =>  <Product data={value} key={value.viewId}></Product>)}
           
        </div>
    );
};

export default BrandProducts;