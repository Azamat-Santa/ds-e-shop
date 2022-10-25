import React, { FC, useState } from "react";
import { ImockData } from "../../data";
import "./paintingsItem.scss";
import Loader from "./../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getPaintingsAll } from "../../api/paintingsApi";

interface IPaintingsItem {
  paintings: ImockData;
  index: number;
}

const PaintingsItem: FC<IPaintingsItem> = ({ paintings, index }) => {
  const dispatch = useDispatch();
  const [buttonClick, setButtonClick] = useState<number>(-1);
  // const data = useSelector((state:any)=>state.paintings.data)
  const isLoading = useSelector((state: any) => state.paintings.isLoading);

  const bey = async (index: number) => {
    setButtonClick(index)
    await getPaintingsAll(dispatch);
    setButtonClick(-1);
  };

  return (
    <div
      className={
        paintings.isActive ? "painting-card" : "painting-card disabled"
      }
    >
      <img src={paintings.img} alt="" />
      <div className="painting-card__content">
        <div className="painting-card__title">{paintings.title}</div>
        {paintings.isActive ? (
          <div className="painting-card__bottom">
            <div className="painting-card__price-wrapper">
              <div className="painting-card__price-before">
                {paintings.priceBefore}
              </div>
              <div className="painting-card__price">{paintings.price}</div>
            </div>

            <button
              onClick={() => bey(paintings.id)}
              className={paintings.inTheBasket ? "button disabled" : "button"}
              key={index}
              disabled={paintings.inTheBasket}
            >
              {buttonClick === paintings.id && isLoading ? (
                <Loader />
              ) : paintings.isActive && !paintings.inTheBasket ? (
                "Купить"
              ) : (
                "В корзине"
              )}
            </button>
          </div>
        ) : (
          "Продана на аукционе"
        )}
      </div>
    </div>
  );
};

export default PaintingsItem;
