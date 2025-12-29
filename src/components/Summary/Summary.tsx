import { useMemo } from "react";
import type { ServiceType } from "../../types/service.type";
import "../../assets/css/summary.css";

interface SummaryProps {
  selectedServices: ServiceType[];
}

export default function Summary({ selectedServices }: SummaryProps) {
  const total = useMemo(
    () => selectedServices.reduce((sum, service) => sum + service.price, 0),
    [selectedServices]
  );

  if (selectedServices.length === 0) {
    return (
      <div className="summary">
        <p className="summary_text">Выберите услуги</p>
      </div>
    );
  }

  return (
    <li className="summary">
      <div className="summary_content">
        <h3 className="summary_title">Итого:</h3>

        <ul className="summary_list">
          {selectedServices.map(({ id, name, price }) => (
            <li key={id}>
              <span>{name}:</span> {price}$
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <p className="summary_total">
        Общая сумма: <span>{total}$</span>
      </p>

      <button className="checkout">Оформить заказ</button>
    </li>
  );
}
