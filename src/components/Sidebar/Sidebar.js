/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import "./Sidebar.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faAddressCard,
  faMessage,
  faClockRotateLeft,
  faListCheck,
  faUsers,
  faGear,
  faCircleQuestion,
  faShield,
  faCube,
} from "@fortawesome/free-solid-svg-icons"

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__top-container">
        <FontAwesomeIcon icon={faCube} className="sidebar__dashboard-logo" />
        <h1 className="sidebar__header">Dashboard</h1>
      </div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} className="sidebar__logo" />
          <a href="#" className="sidebar__text">
            Home
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faAddressCard} className="sidebar__logo" />
          <a href="#" className="sidebar__text">
            Profile
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faMessage} className="sidebar__logo" />
          <a href="#" className="sidebar__text">
            Messages
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faClockRotateLeft} className="sidebar__logo" />
          <a href="#" className="sidebar__text">
            History
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faListCheck} className="sidebar__logo" />
          <a href="#" className="sidebar__text">
            Tasks
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faUsers} className="sidebar__logo" />
          <a href="#" className="sidebar__text">
            Communities
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGear} className="sidebar__logo" />
          <a href="#" className="sidebar__text">
            Settings
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faCircleQuestion} className="sidebar__logo" />
          <a href="#" className="sidebar__text">
            Support
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faShield} className="sidebar__logo" />
          <a href="#" className="sidebar__text">
            Privacy
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
