import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { paginationConfig } from "../swiper";
import { fetchPhones } from "../redux/slices/phones";
import { phoneSelector } from "../redux/selectors/";
import Phone from "../components/phone";
import LoadingComponent from "../components/Loading";
function Phones() {
  const dispatch = useDispatch();
  const { Loading, phones } = useSelector(phoneSelector);
  useEffect(() => {
    !phones ? dispatch(fetchPhones()) : null;
  }, []);
  return (
    <>
      {Loading ? (
        <LoadingComponent />
      ) : (
        <Swiper
          loop={true}
          navigation={true}
          pagination={paginationConfig}
          modules={[Pagination, Navigation]}
          className="mainPhoneSwiper"
        >
          {phones &&
            phones?.products?.map((phoneObj) => (
              <SwiperSlide key={phoneObj.id}>
                <Phone {...phoneObj} />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </>
  );
}

export default Phones;
