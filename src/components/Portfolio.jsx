import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Portfolio({ translations }) {
  const projects = [
    {
      key: 'fitAndFood',
      img: 'fitandfood.png',
      title: translations.fitAndFood.title,
      description: translations.fitAndFood.description,
    },
    {
      key: 'nestinove',
      img: 'nestinoveproject.png',
      title: translations.nestinove.title,
      description: translations.nestinove.description,
    },
    {
      key: 'portfolio',
      img: 'portfolio.png',
      title: translations.portfolio.title,
      description: translations.portfolio.description,
    },
  ];

  return (
    <section id="portfolio" className="py-5">
      <h2 className="text-center">{translations.title}</h2>
      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        loop={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="swiper-container"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.key} className="position-relative">
            <img src={`/assets/${project.img}`} alt={project.title} className="img-fluid project-image" />
            <div className="project-description">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Portfolio;
