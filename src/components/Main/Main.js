import React from "react"
import "./Main.css"
import Projects from "../Projects/Projects"
import Announcements from "../Announcements/Announcements"
import Trending from "../Trending/Trending"

function Main() {
  return (
    <main className="main">
      <Projects />
      <Announcements />
      <Trending />
    </main>
  )
}

export default Main
