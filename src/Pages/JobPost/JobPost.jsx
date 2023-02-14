import React, { useEffect, useState } from "react";
import "./JobPost.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import JobPostForm from "./JobPostForm/JobPostForm";
import Listing from "./JobListing/Listing";
import Details from "./JobDetails/Details";
const JobPost = () => {
  const jobapi = "http://localhost:4000/postjob";
  const [job, setJob] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    loadJobPostData();
  }, [jobapi]);

  const loadJobPostData = async () => {
    const response = await axios.get(jobapi);
    setJob(response.data);
  };

  // Handle Jobform
  function handleForm() {
    setToggleForm((prevForm) => !prevForm);
  }

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Listing
              handleForm={handleForm}
              toggleForm={toggleForm}
              job={job}
              loadJobPostData={loadJobPostData}
            />
          }
        ></Route>
        <Route
          path="/post-a-job"
          element={
            <JobPostForm
              handleForm={handleForm}
              toggleForm={toggleForm}
              job={job}
              loadJobPostData={loadJobPostData}
            />
          }
        ></Route>

        <Route path="post/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default JobPost;
