import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import "./style.css";
function Securitydevices() {
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
  return (
    <div className="Securitydevices-container ">
      <div className=" mt-[10px]">
        <h2>Thiết Bị An Ninh</h2>
        <div className="main-heading-line" />
      </div>
      <div className="main-wrap">
        
        <div className="main-top-right">
          <div>
            <h3>Thiết bị điện thông minh là gì?</h3>
            <div className="right-heading">
              <div>
                <BsFillCircleFill
                  color="#2A2388"
                  className="text-[9px] mt-[8px] mr-[5px]"
                />
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
                    <BsFillCircleFill
                      color="#2A2388"
                      className="text-[10px] mt-[8px] mr-[5px]"
                    />
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
                    <BsFillCircleFill
                      color="#2A2388"
                      className="text-[10px]  mt-[8px] mr-[5px]"
                    />
                    <p>{item.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          
        </div>
        <div className="main-wrap-left">
          <img alt="" src={require("../../image/product/image-1.jpg")} />
        </div>
      </div>
    </div>
  );
}
export default Securitydevices;
