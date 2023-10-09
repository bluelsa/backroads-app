import { services } from "../data";

const ServicesTemplate = () => {
  return (
    <div className="section-center services-center">
      {services.map((service) => {
        const { id, icon, title, description } = service;

        return (
          <article key={id} className="service">
            <span className="service-icon">
              <i className={icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{title}</h4>
              <p className="service-text">{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ServicesTemplate