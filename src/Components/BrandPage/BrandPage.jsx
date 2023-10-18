import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import BrandSlider from './BrandSlider';

const BrandPage = () => {
   const {name} = useParams()
   const LoadedData = useLoaderData()
   const find = LoadedData.find(data => data.brandName == name)
   console.log(find)

    return (
        <div>

            <BrandSlider data={find}></BrandSlider>
        </div>
 
    );
};

export default BrandPage;