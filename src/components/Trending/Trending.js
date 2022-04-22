import React from "react"
import "./Trending.css"
import catAvatar from "../../assets/images/cat_avatar.svg"
import koalaAvatar from "../../assets/images/koala_avatar.svg"
import rhinoAvatar from "../../assets/images/rhino_avatar.svg"
import octopusAvatar from "../../assets/images/octopus_avatar.svg"

function Trending() {
  return (
    <div className="trending">
      <h1 className="trending__header">Trending</h1>
      <div className="trending__items-container">
        <div className="trending__item">
          <img src={koalaAvatar} alt="" className="avatar--small" />
          <div className="trending__item__text-div">
            <h2 className="trending__item__header">@tegan</h2>
            <p className="trending__item__p">World Peace Builder</p>
          </div>
        </div>
        <div className="trending__item">
          <img src={catAvatar} alt="" className="avatar--small" />
          <div className="trending__item__text-div">
            <h2 className="trending__item__header">@morgan</h2>
            <p className="trending__item__p">Super Cool Project</p>
          </div>
        </div>
        <div className="trending__item">
          <img src={rhinoAvatar} alt="" className="avatar--small" />
          <div className="trending__item__text-div">
            <h2 className="trending__item__header">@kendall</h2>
            <p className="trending__item__p">Life Changing App</p>
          </div>
        </div>
        <div className="trending__item">
          <img src={octopusAvatar} alt="" className="avatar--small" />
          <div className="trending__item__text-div">
            <h2 className="trending__item__header">@alex</h2>
            <p className="trending__item__p">No Traffic Maker</p>
          </div>
        </div>
        <a
          href="https://www.vecteezy.com/free-vector/animal-avatar"
          className="trending__avatar-credit"
        >
          Animal Avatar Vectors by Vecteezy
        </a>
      </div>
    </div>
  )
}

export default Trending
