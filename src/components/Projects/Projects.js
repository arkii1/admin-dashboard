import React from "react"
import "./Projects.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faEye, faShareNodes } from "@fortawesome/free-solid-svg-icons"

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects__header">Projects</h1>
      <div className="projects__grid">
        <div className="projects__card">
          <h2 className="projects__card__header">Super Cool Project</h2>
          <p className="projects__card__p">
            Sed tempus ut lacus ut scelerisque. Suspendisse sollicitudin nibh
            erta, id facilisis felis accumsan nec.
          </p>
          <div className="projects__card__links-container">
            <FontAwesomeIcon
              icon={faStar}
              className="projects__card__star-link"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="projects__card__eye-link"
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              className="projects__card__share-link"
            />
          </div>
          <div className="card-colour orange" />
        </div>
        <div className="projects__card">
          <h2 className="projects__card__header">Less Cool Project</h2>
          <p className="projects__card__p">
            Nullam condimentum ipsum ut lectus vehicul consectetur. Quisque sed
            dolor tincidunt, consectetur sapien et, facilisis dolor. Duis sem
            purus, dignissum ut sapien in, varius pellentesque lacus.
          </p>
          <div className="projects__card__links-container">
            <FontAwesomeIcon
              icon={faStar}
              className="projects__card__star-link"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="projects__card__eye-link"
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              className="projects__card__share-link"
            />
          </div>
          <div className="card-colour pink" />
        </div>
        <div className="projects__card">
          <h2 className="projects__card__header">Impossible App</h2>
          <p className="projects__card__p">
            In hac habitasse platea dictumst. Vivamus dictum rutrum arcu, a
            placerat velit sagittis
          </p>
          <div className="projects__card__links-container">
            <FontAwesomeIcon
              icon={faStar}
              className="projects__card__star-link"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="projects__card__eye-link"
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              className="projects__card__share-link"
            />
          </div>
          <div className="card-colour purple" />
        </div>
        <div className="projects__card">
          <h2 className="projects__card__header">Easy Peasy App</h2>
          <p className="projects__card__p">
            Etiam cursus eros ac efficitur fringilla. Vestibulum dignissim urna
            eget accumsan aliquam. Curabitur dignissum nisi in tortot commodo,
            ac bibendum magna tincidunt.
          </p>
          <div className="projects__card__links-container">
            <FontAwesomeIcon
              icon={faStar}
              className="projects__card__star-link"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="projects__card__eye-link"
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              className="projects__card__share-link"
            />
          </div>
          <div className="card-colour green" />
        </div>
        <div className="projects__card">
          <h2 className="projects__card__header">Ad Blocker</h2>
          <p className="projects__card__p">
            Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus vel,
            pharetra hendrerit felis. Aliquam sed malesuada eros.
          </p>
          <div className="projects__card__links-container">
            <FontAwesomeIcon
              icon={faStar}
              className="projects__card__star-link"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="projects__card__eye-link"
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              className="projects__card__share-link"
            />
          </div>
          <div className="card-colour orange" />
        </div>
        <div className="projects__card">
          <h2 className="projects__card__header">Money Maker</h2>
          <p className="projects__card__p">
            Praesent convallis, libero quis congue elementum, nunc ante faucibus
            sapien, ac scelereique tortor purus sit amet ex. Pellentesque mollis
            nec sem vel aliquam.
          </p>
          <div className="projects__card__links-container">
            <FontAwesomeIcon
              icon={faStar}
              className="projects__card__star-link"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="projects__card__eye-link"
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              className="projects__card__share-link"
            />
          </div>
          <div className="card-colour purple" />
        </div>
        <div className="projects__card">
          <h2 className="projects__card__header">Super Cool Project</h2>
          <p className="projects__card__p">
            Sed tempus ut lacus ut scelerisque. Suspendisse sollicitudin nibh
            erta, id facilisis felis accumsan nec.
          </p>
          <div className="projects__card__links-container">
            <FontAwesomeIcon
              icon={faStar}
              className="projects__card__star-link"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="projects__card__eye-link"
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              className="projects__card__share-link"
            />
          </div>
          <div className="card-colour orange" />
        </div>
        <div className="projects__card">
          <h2 className="projects__card__header">Less Cool Project</h2>
          <p className="projects__card__p">
            Nullam condimentum ipsum ut lectus vehicul consectetur. Quisque sed
            dolor tincidunt, consectetur sapien et, facilisis dolor. Duis sem
            purus, dignissum ut sapien in, varius pellentesque lacus.
          </p>
          <div className="projects__card__links-container">
            <FontAwesomeIcon
              icon={faStar}
              className="projects__card__star-link"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="projects__card__eye-link"
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              className="projects__card__share-link"
            />
          </div>
          <div className="card-colour pink" />
        </div>
        <div className="projects__card">
          <h2 className="projects__card__header">Impossible App</h2>
          <p className="projects__card__p">
            In hac habitasse platea dictumst. Vivamus dictum rutrum arcu, a
            placerat velit sagittis
          </p>
          <div className="projects__card__links-container">
            <FontAwesomeIcon
              icon={faStar}
              className="projects__card__star-link"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="projects__card__eye-link"
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              className="projects__card__share-link"
            />
          </div>
          <div className="card-colour purple" />
        </div>
        <div className="projects__card">
          <h2 className="projects__card__header">Easy Peasy App</h2>
          <p className="projects__card__p">
            Etiam cursus eros ac efficitur fringilla. Vestibulum dignissim urna
            eget accumsan aliquam. Curabitur dignissum nisi in tortot commodo,
            ac bibendum magna tincidunt.
          </p>
          <div className="projects__card__links-container">
            <FontAwesomeIcon
              icon={faStar}
              className="projects__card__star-link"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="projects__card__eye-link"
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              className="projects__card__share-link"
            />
          </div>
          <div className="card-colour green" />
        </div>
        <div className="projects__card">
          <h2 className="projects__card__header">Ad Blocker</h2>
          <p className="projects__card__p">
            Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus vel,
            pharetra hendrerit felis. Aliquam sed malesuada eros.
          </p>
          <div className="projects__card__links-container">
            <FontAwesomeIcon
              icon={faStar}
              className="projects__card__star-link"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="projects__card__eye-link"
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              className="projects__card__share-link"
            />
          </div>
          <div className="card-colour orange" />
        </div>
        <div className="projects__card">
          <h2 className="projects__card__header">Money Maker</h2>
          <p className="projects__card__p">
            Praesent convallis, libero quis congue elementum, nunc ante faucibus
            sapien, ac scelereique tortor purus sit amet ex. Pellentesque mollis
            nec sem vel aliquam.
          </p>
          <div className="projects__card__links-container">
            <FontAwesomeIcon
              icon={faStar}
              className="projects__card__star-link"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="projects__card__eye-link"
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              className="projects__card__share-link"
            />
          </div>
          <div className="card-colour purple" />
        </div>
      </div>
    </div>
  )
}

export default Projects
