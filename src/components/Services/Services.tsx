import ServiceItem from "./ServiceItem";
import { services } from "../../data/services";
import "../../assets/css/service.css";
import type { ServiceType } from "../../types/service.type";
import { useState } from "react";
import Summary from "../Summary/Summary";

export default function Services() {
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);

  const addService = (service: ServiceType) => {
    const alreadyAdded = selectedServices.some((s) => s.id === service.id);

    if (alreadyAdded) {
      alert(`Услуга "${service.name}" уже добавлена!`);
      return;
    }

    setSelectedServices((prev) => [...prev, service]);
  };

  return (
    <section>
      <div className="container">
        <ul className="service_list">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              onAdd={() => addService(service)}
            />
          ))}
        </ul>

        <Summary selectedServices={selectedServices} />
      </div>
    </section>
  );
}
