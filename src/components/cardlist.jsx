import Delfin from "../assets/delfin.png";

const cards = [
  { id: 1, img: Delfin, title: "Card 1" },
  { id: 2, img: Delfin, title: "Card 2" },
  { id: 3, img: Delfin, title: "Card 3" },
  // Yana kartalar qo‘shing
];

export default function CardList({ onImageClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {cards.map((card) => (
        <div key={card.id} className="bg-white shadow-md rounded p-2">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-48 object-cover rounded cursor-pointer"
            onClick={() => onImageClick(card.img)}
          />
          <h3 className="mt-2 text-lg font-semibold">{card.title}</h3>
        </div>
      ))}
    </div>
  );
}
