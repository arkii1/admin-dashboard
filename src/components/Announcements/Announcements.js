import React from "react"
import "./Announcements.css"

function Announcements() {
  return (
    <div className="announcements">
      <h1 className="announcements__header">Announcements</h1>
      <div className="announcements__items">
        <h2 className="announcements__item__header">Site Maintenance</h2>
        <p className="announcements__item__p">
          Verstibulum condimentum tellus lacus, in accumsan elit maximus ac.
          Donec hendrerit sodales congue...
        </p>
        <hr className="announcements__br" />
        <h2 className="announcements__item__header">Community Share Day</h2>
        <p className="announcements__item__p">
          Nam vel lectus tincidunt, rutrum nulla eu, ornare libero. Aliquam
          dictum accumsan porttitor...
        </p>
        <hr className="announcements__br" />
        <h2 className="announcements__item__header">Updated Privacy Policy</h2>
        <p className="announcements__item__p">
          Phasellus efficitur nisi eget elit consectetur, eget condimentum ante
          auctor. Cras fringilla sagittis sem in mattis...
        </p>
      </div>
    </div>
  )
}

export default Announcements
