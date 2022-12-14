import React from "react";

const Members = (props) => {
  // 이미지 사이즈
  const imgSize = { with: 90, height: 80 };
  const list = props.members.map((item, index) => {
    return (
      // 반복문에서는  key 속성이 있어야하며, unique 값
      <div className="col-6 col-md-4 col-lg-3" key={index}>
        <img
          src={item.photo}
          className="img-thumbnail"
          alt={item.name}
          style={imgSize}
        />
        <br />
        <h6>{item.name}</h6>
        <br />
        <br />
      </div>
    );
  });

  return (
    <div className="card card-body">
      <h2>Members</h2>
      <div className="row">{list}</div>
    </div>
  );
};

export default Members;
