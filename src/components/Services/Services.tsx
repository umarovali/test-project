import ServiceItem from "./ServiceItem";
import { services } from "../../data/services";
import "../../assets/css/service.css";

export default function Services() {
  return (
    <section className="service">
      <div className="container">
        <ul className="service_list">
          {services.map((service) => (
            <ServiceItem key={service.id} service={service} onAdd={() => {}} />
          ))}
        </ul>
      </div>
    </section>
  );
}
