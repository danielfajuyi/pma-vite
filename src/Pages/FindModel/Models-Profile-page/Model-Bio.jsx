function ModelBio({ item }) {
  return (
    <section
      className="section section-profile bio-section"
      style={{ position: "relative" }}
    >
      <p className="bio__text">{item.bio}</p>
      {/* <div className="effect">
        <span contentEditable="true">{item.firstName}</span>
      </div> */}
    </section>
  );
}

export default ModelBio;
