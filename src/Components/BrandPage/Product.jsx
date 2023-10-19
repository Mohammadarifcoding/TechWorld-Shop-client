import React, { useContext } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import { AuthContext } from '../Provider/AuthProvider';

const Product = ({data}) => {
    const {dark} = useContext(AuthContext)
    const {_id,image,name,brandName,type,price,rating,ExtraratingviewId} = data;
    return (
        <Card className={`max-w-[384px] mx-auto  bg-white shadow-2xl `}>
        <CardHeader floated={false} className="max-h-80">
          <img src={image} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {type}
          </Typography>

          <div className='flex mt-3 justify-center'>
             <h2> <span className='font-semibold'>Price</span> : ${price}</h2>
          </div>

        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Rating Point">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="yellow"
              textGradient
            >
              {
                rating
              }
            </Typography>
          </Tooltip>
        </CardFooter>
        
      </Card>
    );
};

export default Product;