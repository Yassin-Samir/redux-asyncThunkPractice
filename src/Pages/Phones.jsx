import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { paginationConfig } from "../swiper";
import { fetchPhones } from "../redux/slices/phones";
import { phoneSelector } from "../redux/selectors/";
import Phone from "../components/phone";
import Error from "../components/error";
function Phones() {
  const dispatch = useDispatch();
  const { Loading, phones, error } = useSelector(phoneSelector);
  useEffect(() => {
    !phones ? dispatch(fetchPhones()) : null;
  }, []);
  if (error) return <Error message={"Failed to fetch phones"} />;
  return Loading ? (
    <div className={`mainPhoneSwiper swiper`}>
      <div className="swiper-slide">
        <Phone skeleton={true} />
      </div>
    </div>
  ) : (
    <Swiper
      loop={true}
      navigation={true}
      pagination={paginationConfig}
      modules={[Pagination, Navigation]}
      className={"mainPhoneSwiper"}
    >
      {phones &&
        phones?.products?.map((phoneObj) => (
          <SwiperSlide key={phoneObj.id}>
            <Phone {...phoneObj} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default Phones;
