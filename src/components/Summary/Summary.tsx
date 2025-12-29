import type { ServiceType } from "../../types/service.type";
import "../../assets/css/summary.css";

interface SummaryProps {
  selectedServices: ServiceType[];
}

export default function Summary({ selectedServices }: SummaryProps) {
  const total = selectedServices.reduce(
    (acc, service) => acc + service.price,
    0
  );
  return (
    <div className="summary">
      <div className="summary_content">
        <h3 className="summary_title">Итого:</h3>

        {selectedServices.length === 0 ? (
          <p className="summary_text">Выберите услуги</p>
        ) : (
          <>
            <ul className="summary_list">
              {selectedServices.map((service) => (
                <li key={service.id}>
                  <span>{service.name}:</span> {service.price}$
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
        <hr />
      <div>
        <p className="summary_total">
          Общая сумма: <span>{total}$</span>
        </p>
        <button className="checkout">Оформить заказ</button>
      </div>
    </div>
  );
}
