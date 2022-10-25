import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'

export interface ImockData {
    id:number,
    title:string;
    img:string;
    priceBefore : string;
    price:string;
    inTheBasket : boolean,
    isActive : boolean,
}

export const mockData : ImockData[] = [
    {
        id:1,
        title:'«Рождение Венеры» Сандро Боттичелли',
        img:img1,
        priceBefore : '2 000 000 $',
        price:'1 000 000 $',
        inTheBasket : false,
        isActive : true,
    },
    {
        id:2,
        title:'«Тайная вечеря»  Леонардо да Винчи',
        img:img2,
        priceBefore : '',
        price:'3 000 000 $',
        inTheBasket : false,
        isActive : true,

    },
    {
        id:3,

        title:'«Сотворение Адама» Микеланджело',
        img:img3,
        priceBefore : '6 000 000 $',
        price:'5 000 000 $',
        inTheBasket : true,
        isActive : true,
    },
    {
        id:4,
        title:'«Урок анатомии»  Рембрандт',
        img:img4,
        priceBefore : '2 000 000 $',
        price:'1 000 000 $',
        inTheBasket : false,
        isActive : false,
    }
]