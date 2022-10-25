import React from 'react';
import { mockData } from '../../data';
import PaintingsItem from '../PaintingsItem/PaintingsItem';
import './listImg.scss'

const ListImg = () => {
    return (
        <div className='list-img'>
           {
            mockData.map((paintings,index)=>(
                <PaintingsItem paintings={paintings} key={paintings.title} index={index}/>
            ))
           }
        </div>
    );
};

export default ListImg;