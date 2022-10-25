import React, { FC } from 'react';
import './title.scss'
interface ITitle {
   text:string;
}


const Title:FC<ITitle> = ({text}) => {
    return (
        <div className='title'>
            {text}
        </div>
    );
};

export default Title;