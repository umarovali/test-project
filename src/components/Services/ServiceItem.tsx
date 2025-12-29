import { MdOutlineBookmarkAdd } from "react-icons/md";
import type { ServiceType } from "../../types/service.type";

interface ServiceItemProps {
  service: ServiceType;
  onAdd: () => void;
}

export default function ServiceItem({ service, onAdd }: ServiceItemProps) {
  return (
    <li className="service_item">
      <div className="service_content">
        <h3 className="service_title">{service.name}</h3>
        <p className="service_price">{service.price}$</p>
      </div>
      <button className="service_add" onClick={onAdd}>
        <MdOutlineBookmarkAdd />
      </button>
    </li>
  );
}
