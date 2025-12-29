import ServiceItem from "./ServiceItem";
import { services } from "../../data/services";
import "../../assets/css/service.css";
import type { ServiceType } from "../../types/service.type";
import { useCallback, useState } from "react";
import Summary from "../Summary/Summary";

export default function Services() {
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);

  const addService = useCallback((service: ServiceType) => {
    setSelectedServices((prev) =>
      prev.some((s) => s.id === service.id) ? prev : [...prev, service]
    );
  }, []);

  return (
    <section>
      <div className="container">
        <div className="page">
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
      </div>
    </section>
  );
}
