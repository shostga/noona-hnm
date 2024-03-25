import React from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  const goToLoginOrLogout = () => {
    if (authenticate) {
      setAuthenticate(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  const goToHomepage = () => {
    navigate("/");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLoginOrLogout}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
          {/* <Link to="/login">로그인</Link> */}
        </div>
      </div>
      <div className="nav-section" onClick={goToHomepage}>
        <img
          alt=""
          width={100}
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyDown={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
