import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import BrandSlider from './BrandSlider';
import BrandProducts from './BrandProducts';

const BrandPage = () => {
   const { name } = useParams()
   const LoadedData = useLoaderData()

    return (
        <div>

            <BrandSlider data={LoadedData}></BrandSlider>
            <BrandProducts></BrandProducts>
        </div>
 
    );
};

export default BrandPage;