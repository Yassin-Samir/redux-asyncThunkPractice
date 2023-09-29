import { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhones } from "./redux/slices/shop";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { pagination } from "./swiper";
import Phone from "./components/phone";
import LoadingComponent from "./components/Loading";
import "swiper/css";
import "swiper/css/pagination";
import "./app.css";
import "./phone.css";
import "./index.css";
const shopSelector = createSelector(
  (state) => state,
  ({ shop }) => shop
);
export default function App() {
  const dispatch = useDispatch();
  const { Loading, phones } = useSelector(shopSelector);
  useEffect(() => {
    dispatch(fetchPhones());
  }, []);
  return (
    <>
      {Loading ? (
        <LoadingComponent />
      ) : (
        <div className="app">
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mainPhoneSwiper"
          >
            {phones &&
              phones?.products?.map((phoneObj) => (
                <SwiperSlide key={phoneObj.id}>
                  <Phone {...phoneObj} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
