import ListItem2 from "./ListItem2";

function List2({ data, handleProfile, currentPage }) {
  // setting page range
  function pageRange() {
    const pageLimit = 6;
    const rangeStart = (currentPage - 1) * pageLimit;
    const rangeEnd = currentPage * pageLimit;

    return data.filter(
      (item, index) => index >= rangeStart && index < rangeEnd && item
    );
  }

  return (
    <section className="mtop  property ">
      {data.length < 1 && (
        <div className="empty-search-text">Sorry No Result Found!</div>
      )}
      <div className=" row ">
        {pageRange().map((item) => (
          <ListItem2
            key={item.id}
            img={item.image}
            firstName={item.firstName}
            secondName={item.secondName}
            firstCategory={item.category[0]}
            secondCategory={item.category[1]}
            state={item.state}
            agency={item.agency}
            country={item.country}
            handleProfile={() => handleProfile(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default List2;
