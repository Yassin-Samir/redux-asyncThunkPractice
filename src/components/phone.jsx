import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { paginationConfig } from "../swiper";
function Phone({
  skeleton,
  category,
  images,
  price,
  rating,
  stock,
  title,
  thumbnail,
}) {
  return (
    <div className={`phone`}>
      <div className={`header ${skeleton ? "skeleton" : null}`}>
        <strong className="">{title}</strong>
        <p className="">{category}</p>
      </div>
      <div className={`imgSlider ${skeleton ? "skeleton" : null}`}>
        {!skeleton ? (
          <Swiper
            loop={true}
            navigation={true}
            pagination={paginationConfig}
            modules={[Pagination, Navigation]}
            className="phoneSwiper"
            observeParents={true}
            observer={true}
          >
            <SwiperSlide>
              <img src={thumbnail} loading="lazy" />
            </SwiperSlide>
            {images &&
              images.map((img, ind) => (
                <SwiperSlide key={ind + 1}>
                  <img src={img} loading="lazy" />
                </SwiperSlide>
              ))}
          </Swiper>
        ) : null}
      </div>
      <div className={`price ${skeleton ? "skeleton" : null}`}>
        <p>{!skeleton ? "$" + price : null}</p>
        <p>{!skeleton ? stock : null}</p>
        <p>{!skeleton ? `rating :${rating}` : null}</p>
      </div>
    </div>
  );
}

export default Phone;
