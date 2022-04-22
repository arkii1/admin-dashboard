import React from "react"
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons"
import catAvatar from "../../assets/images/cat_avatar.svg"

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top__left-div">
          <FontAwesomeIcon icon={faSearch} className="header__top__search" />
          <input
            type="text"
            placeholder="Search"
            className="header__top__input"
          />
        </div>
        <div className="header__top__right-div">
          <FontAwesomeIcon icon={faBell} className="header__top__bell" />
          <img src={catAvatar} alt="" className="avatar--small" />
          <h1 className="header__top__header">Morgan Oakley</h1>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom__left-div">
          <img src={catAvatar} alt="" className="avatar--medium" />
          <p className="header__bottom__left-div__p">
            Hi there,
            <br /> <span>Morgan Oakley (@morgan)</span>
          </p>
        </div>
        <div className="header__bottom__right-div">
          <button type="button" className="header__bottom__button">
            New
          </button>
          <button type="button" className="header__bottom__button">
            Upload
          </button>
          <button type="button" className="header__bottom__button">
            Share
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
