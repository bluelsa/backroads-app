import { tours } from "../data"

const ToursTemplate = () => {
  return (
    <div className="section-center featured-center">
      {tours.map((tour) => {
        const { id, img, title, date, location, length, price, description } =
          tour;

        return (
          <article key={id} className="tour-card">
            <div className="tour-img-container">
              <img src={img} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>{description}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {location}
                </p>
                <p>{length} days</p>
                <p>from ${price}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ToursTemplate