import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { paginationConfig } from "../swiper";
function Phone({ category, images, price, rating, stock, title, thumbnail }) {
  return (
    <div className="phone">
      <div className="header">
        <strong>{title}</strong>
        <span>{category}</span>
      </div>
      <div className="imgSlider">
        <Swiper
          pagination={paginationConfig}
          modules={[Pagination]}
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
      <div className="price">
        <p>${price}</p>
        <p>{stock}</p>
        <p>rating :{rating}</p>
      </div>
    </div>
  );
}

export default Phone;
