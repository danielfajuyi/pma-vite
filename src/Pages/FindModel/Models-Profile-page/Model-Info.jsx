import { BiCategoryAlt } from "react-icons/bi";
import { BsPatchCheckFill } from "react-icons/bs";
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaHome,
  FaRegEnvelope,
  FaRegStar,
  FaStar,
  FaUser,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { InteractiveBtn } from "./Buttons";

function ModelInfo({ item, handleForm }) {
  return (
    <>
      <section className="section section-profile2 model-info">
        <div className="model__img-container">
          <img
            className="model__img"
            src={item.image}
            alt=""
            width="400"
            height="400"
          />
        </div>
        <div className="model-Info__text-content">
          <span className="top-text model__namewrap">
            <span className="model__names">
              {`${item.firstName} ${item.secondName}`}
            </span>
            <BsPatchCheckFill />
          </span>
          <div className="text2 model__ratings">
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
            </span>

            <span>
              <FaRegStar />
              <FaRegStar />
            </span>

            <span>(3.0)</span>
          </div>

          <div className="text3 model__categorys">
            <div id="agencylable">
              <FaHome />
              <span className="value">{item.agency}</span>
            </div>

            <div id="categorylable">
              <span>
                <BiCategoryAlt />
              </span>
              <span className="value">
                {item.category[0]} and {item.category[1]} Model
              </span>
            </div>
          </div>

          <div className="text4 model__locations">
            <MdLocationPin />
            <span>
              {item.state}, {item.country}
            </span>
          </div>

          <div className="interactive-section">
            <InteractiveBtn
              btnIcon="fa-solid fa-user-plus follow-icon Icon"
              btnText="Follow"
            />

            <InteractiveBtn
              btnIcon="fa-regular fa-heart heart-icon Icon"
              //btnIcon="fa-solid fa-heart heart-icon Icon"
              btnText="Favorite"
            />
            <InteractiveBtn
              btnIcon="fa-brands fa-instagram insta-icon Icon"
              btnText="Instagram"
            />
            <InteractiveBtn
              btnIcon="fa-solid fa-share-nodes share-icon Icon"
              btnText="Share"
            />
          </div>
          <div className="model__activities">
            <p>
              <span className="semi-bold">Favorite: </span>7.8k
            </p>
            <p>
              <span className="semi-bold">Followers: </span> 237k
            </p>
            <p>
              <span className="semi-bold">Views: </span> 3.6k
            </p>
            <p>
              <span className="semi-bold">Active: </span> 2 weeks ago
            </p>
          </div>
          <div className="profile-btn btn-shadow">
            <button
              onClick={handleForm}
              className="model-profilebtn  btn-shadow"
            >
              <FaEnvelope />
              <span> Book</span>
              <span> Model</span>
            </button>
          </div>

          {/* desktop CTA btn section */}

          {/* <button
            onClick={handleForm}
            className="cta-btn desktop-cta dark--btn on-hover"
          >
            <i className="fa-solid fa-envelope-circle-check Icon"></i>
            Book model
          </button> */}
        </div>
      </section>

      {/* mobile CTA btn section */}
      {/* <div className="cta-btn-wrapper">
        <button onClick={handleForm} className="cta-btn dark--btn on-hover">
          <i className="fa-solid fa-envelope-circle-check Icon"></i>
          Book model
        </button>
      </div> */}
    </>
  );
}
export default ModelInfo;
