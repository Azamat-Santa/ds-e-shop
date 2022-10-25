import React, { FC, useEffect } from 'react';
import { getPaintingsAll } from '../../api/paintingsApi';
import ListImg from '../ListImg/ListImg';
import Title from '../Title/Title';
import { useDispatch, useSelector } from 'react-redux';
const Main:FC = () => {


    
    
    return (
        <div className='content'>
            <Title text='Картины эпохи Возрождения' />
            <ListImg />
        </div>
    );
};

export default Main;