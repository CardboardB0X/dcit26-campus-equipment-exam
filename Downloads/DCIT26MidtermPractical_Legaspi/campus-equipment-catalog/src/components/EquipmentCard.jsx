import { Link } from "react-router-dom";

export default function EquipmentCard(props) {
  const item = props.item;

  let finalStatusClass = "status muted";
  let statusText = "In use";

  if (item.available === true) {
    finalStatusClass = "status available";
    statusText = "Available";
  }

  return (
    <article className="equipment-card">
      <div className="card-top">
        <span className="badge">{item.category}</span>
        <span className={finalStatusClass}>{statusText}</span>
      </div>
      <h2>{item.name}</h2>
      <div className="card-details">
        <p>
          <strong className="muted">Location:</strong> {item.location}
        </p>
        <p>
          <strong className="muted">Condition:</strong> {item.condition}
        </p>
      </div>

        <Link to={"/equipment/" + item.id} className="text-link">
        View Details
        </Link>
    </article>
  );
}