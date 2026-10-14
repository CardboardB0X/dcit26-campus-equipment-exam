import EquipmentCard from "../components/EquipmentCard.jsx";
 
export default function EquipmentList({ equipment }) {
  return (
    <section>
      <div className="page-heading">
        <p className="eyebrow">Catalog</p>
        <h1>Campus equipment</h1>
        <p className="muted">Choose an item to see its details.</p>
      </div>
      {equipment.length === 0 ? (
        <p>No equipment has been added yet.</p>
      ) : (
        <div className="equipment-grid">
          {equipment.map((item) => (
            <EquipmentCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
