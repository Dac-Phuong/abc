import React from "react";
import { BsDot, BsFillCircleFill } from "react-icons/bs";
import product from "../../data/Product.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function Smartdevice() {
  const data = [
    {
      id: 0,
      name: "Điều khiển và kiểm soát các thiết bị",
      title: "Bảo đảm an toàn cho ngôi nhà của bạn",
    },
    {
      id: 1,
      name: "Điều chỉnh hoạt động của thiết bị",
      title: "Giúp cuộc sống trở nên tiện lợi",
    },
    {
      id: 3,
      name: "Thiết lập hệ thống an ninh cho không gian",
      title: "Tiết kiệm điện, hạn chế lãng phí",
    },
  ];
  const settings = {
    customPaging: function (i) {
      return (
        <div className={product[0].image[i] ? "image" : ".slick-dots li"}>
          <img className="img" src={product[0].image[i]} />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
 
  return (
    <div>
      <div className="main-top">
        <div className="mt-[10px]">
          <h2>Thiết Bị Thông Minh</h2>
          <div className="main-heading-line" />
        </div>
        <div className="main-wrap">
          <div className="main-wrap-left">
            <img alt="" src={require("../../image/product/image-1.jpg")} />
          </div>
          <div className="main-top-right">
            <div>
              <h3>Thiết bị điện thông minh là gì?</h3>
              <div className="right-heading">
                <div>
                  <BsFillCircleFill  color="#2A2388" className="text-[9px] mt-[8px] mr-[5px]" />
                </div>
                <p>
                  Thiết bị điện thông minh là các thiết bị điện tử được sản xuất
                  dựa trên trí tuệ nhân tạo kết nối với các thiết bị không dây
                  khác như: 4G, WiFi,...Tạo nên một mạng lưới giúp bạn dễ dàng
                  điều khiển.
                </p>
              </div>
            </div>
            <div>
              <h3>Chức năng của thiết bị điện thông minh</h3>
              <ul className="main-top-item">
                {data.map((item) => {
                  return (
                    <li key={item.id} className="main-top-list">
                      <BsFillCircleFill  color="#2A2388" className="text-[10px] mt-[8px] mr-[5px]" />
                      <p>{item.name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3>Lợi ích tuyệt vời của thiết bị điện thông minh</h3>
              <ul className="main-top-item">
                {data.map((item) => {
                  return (
                    <li key={item.id} className="main-top-list">
                      <BsFillCircleFill  color="#2A2388" className="text-[10px]  mt-[8px] mr-[5px]" />
                      <p>{item.title}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full mt-[20px] mb-[30px]">
          <div className="main-heading relative">
            <h2 className="main-heading-col leading-loose">
              Sản phẩm thiết bị thông minh
            </h2>
          </div>
        </div>
        <div className="main-warp mr-auto w-full">
          {product.map((item, index) => {
            return (
              <div key={item.id} className="main-wrap-col">
                <div className=" w-2/4 pt-[20px] pl-[20px]">
                  <div className="wrap-colum">
                    <h3 className="wrap-col-name">{item.name}</h3>
                  </div>
                  <div className="pt-[20px]">
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px] ">{item.title}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title1}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title2}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title3}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title4}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title5}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title6}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title7}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title7}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title7}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title7}</p>
                    </div>
                  </div>
                  <div className="wrap-col-btn">
                    <a href="https://chat.zalo.me/">Liên hệ tư vấn</a>
                  </div>
                </div>
                <div className="w-2/4 m-[10px]">
                  <Slider {...settings}>
                    <img className="h-[310px]" alt="" src={item.image[0]} />
                    <img className="h-[310px]" alt="" src={item.image[1]} />
                    <img className="h-[310px]" alt="" src={item.image[2]} />
                    <img className="h-[310px]" alt="" src={item.image[3]} />
                  </Slider>
                </div>
              </div>
            );
          })}
        </div>
       
        <div className="main-warp ml-auto w-full">
          {product.map((item, index) => {
            return (
              <div key={item.id} className="main-wrap-col">
                <div className=" w-2/4 pt-[20px] pl-[10px] pr-[10px]">
                  <div className="wrap-colum">
                    <h3 className="wrap-col-name">{item.name}</h3>
                  </div>
                  <div className="pt-[20px]">
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px] ">{item.title}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title1}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title2}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title3}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title4}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title5}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title6}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title7}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title7}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title7}</p>
                    </div>
                    <div className="wrap-col-title">
                      <BsFillCircleFill
                        color="#2A2388"
                        className="text-[10px] mr-[7px] mt-[6px]"
                      />
                      <p className="text-[12px]">{item.title7}</p>
                    </div>
                  </div>
                  <div className="wrap-col-btn">
                    <a href="https://chat.zalo.me/">Liên hệ tư vấn</a>
                  </div>
                </div>
                <div className="w-2/4 m-[10px]">
                  <Slider {...settings}>
                    <img className="h-[310px]" alt="" src={item.image[0]} />
                    <img className="h-[310px]" alt="" src={item.image[1]} />
                    <img className="h-[310px]" alt="" src={item.image[2]} />
                    <img className="h-[310px]" alt="" src={item.image[3]} />
                  </Slider>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Smartdevice;
