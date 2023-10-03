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
    <div className={`phone ${skeleton ? "skeleton" : ""}`}>
      <div className={`header ${skeleton ? "skeleton" : ""}`}>
        <strong className={skeleton ? "skeleton" : ""}>{title}</strong>
        <span className={skeleton ? "skeleton" : ""}>{category}</span>
      </div>
      <div className="imgSlider">
        <Swiper
          loop={true}
          navigation={true}
          pagination={paginationConfig}
          modules={[Pagination, Navigation]}
          className="phoneSwiper"
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
      </div>
      <div className={`price ${skeleton ? "skeleton-text" : ""}`}>
        <p>{!skeleton ? "$" + price : null}</p>
        <p>{!skeleton ? stock : null}</p>
        <p>{!skeleton ? `rating :${rating}` : null}</p>
      </div>
    </div>
  );
}

export default Phone;
