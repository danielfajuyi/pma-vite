import { React, useState, useEffect } from "react";
import "./Details.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BsArrow90DegLeft } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaArrowLeft, FaClock, FaRegClock } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";

function Details() {
  const [jobdetail, setJobDetails] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/postjob/${id}`).then((res) => {
      setJobDetails(res.data);
    });
  }, []);

  const { id } = useParams();

  const HandleNavigate = () => {
    navigate("/jobpost");
  };

  return (
    <>
      <section className="Jobdetail-containter">
        {jobdetail && (
          <div className="jobdetail-view">
            <header className="top">
              <div className="titlebar">
                <span onClick={HandleNavigate}>
                  <FaArrowLeft />
                </span>
                <h2>{jobdetail.title}</h2>
              </div>

              <div className="desc-status">
                {jobdetail.jobtype === "Online" ? (
                  <span id="job-online">Online</span>
                ) : (
                  <span id="job-offline">Online</span>
                )}

                {jobdetail.jobtype === "Offline" ? (
                  <span id="job-online">Offline</span>
                ) : (
                  <span id="job-offline">Offline</span>
                )}
              </div>

              <div className="desc-bar">
                <div>
                  <div>
                    <MdLocationOn />
                    <span> {`${jobdetail.city}, ${jobdetail.country}`} </span>
                  </div>
                </div>

                <div>
                  <div>
                    <FaRegClock />
                    <span> casting ends {jobdetail.date} </span>
                  </div>
                </div>

                <div>
                  <div>
                    <AiFillDollarCircle />
                    <span> {jobdetail.price} </span>
                  </div>
                </div>
              </div>

              <div>
                <button>Apply Now</button>
              </div>
            </header>

            <main>
              <article className="left">
                <div className="top">
                  <span>Image reference for this job</span>
                  <div></div>
                </div>

                <div className="bottom">
                  <span>Requirements</span>
                  <span>{jobdetail.desc}</span>
                </div>
              </article>

              <article className="right">
                <div className="topsection">
                  <h4>Preference</h4>

                  <div>
                    <span>Gender</span>
                    <span>{jobdetail.gender}</span>
                  </div>
                </div>

                <div className="bottomsection">
                  <h4>Payment</h4>

                  <div>
                    <div>
                      <span>Status</span>
                      <span>{jobdetail.status}</span>
                    </div>

                    <div>
                      <span>Online or Offline job</span>
                      <span>{jobdetail.jobtype}</span>
                    </div>
                  </div>
                </div>
              </article>
            </main>

            <div className="">
              <button>Apply Now</button>
            </div>
          </div>
        )}
        <footer>
          <h3>Related Job Post</h3>
        </footer>
      </section>
    </>
  );
}

export default Details;
