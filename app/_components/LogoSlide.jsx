"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
function LogoSlide() {
    const clients = [
        { img: "/abad.webp", },
        { img: "/alfeen.webp", },
        { img: "/baldato.png", },
        { img: "/bgs.webp", },
        { img: "/brigade.png", },
        { img: "/casagrand.webp", },
        // { img: "/crimson.webp", },
        { img: "/dac.webp", },
        { img: "/diamond.png", },
        { img: "/felixa.webp", },
        { img: "/godrej.webp", },
        { img: "/golden-arch.webp", },
        { img: "/jindal.webp", },
        { img: "/kalyan.webp", },
        { img: "/nanma.webp", },
        { img: "/purva.webp", },
        { img: "/raghuvir.webp", },
        { img: "/ryan.webp", },
        { img: "/sangini.jpg", },
        { img: "/schmitten.jpg", },
        { img: "/shyam.webp", },
        { img: "/velammal.webp", },
        { img: "/welmont.webp", },
    ]

    return (
        <div className="bg-white py-12">
          <h2 className="text-5xl font-bold text-center mb-6 text-gray-800 font-sans">
            Our Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-auto mb-10 rounded-2xl"></div>
          
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="max-w-7xl mx-auto"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <div className="bg-gray-200 rounded-3xl px-4 py-6 w-80 flex items-center justify-center transition-all duration-300 hover:bg-gray-300">
                    <img
                      src={client.img}
                      alt={client.alt}
                      className="h-20 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
    
          <style jsx>{`
            .swiper-pagination-bullet {
              background: #999;
              opacity: 0.5;
            }
            .swiper-pagination-bullet-active {
              background: #333;
              opacity: 1;
            }
            .swiper {
              padding-bottom: 40px;
            }
          `}</style>
        </div>
      );
    };
    

export default LogoSlide