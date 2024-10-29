import React from 'react'
import Card from '../card/Card'
import Image from "../../assets/Image.png";
import Image1 from "../../assets/Image1.png";

const Section = () => {
  return (
    <div className='grid grid-cols-3 gap-5 p-5'>
        <Card image={Image}/>
        <Card image={Image1}/>
        <Card image={Image}/>
        <Card image={Image}/>
        <Card image={Image1}/>
        <Card image={Image}/>
        <Card image={Image}/>
        <Card image={Image1}/>
        <Card image={Image}/>
    </div>
  )
}

export default Section