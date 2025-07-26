import House1 from "../assets/house1.png"
import House2 from "../assets/house2.png"
import House3 from "../assets/house3.png"
import House4 from "../assets/house4.png"
import House5 from "../assets/house5.png"
import House6 from "../assets/house6.png"
import House7 from "../assets/house7.png"
import House8 from "../assets/house8.png"
import House9 from "../assets/house9.png"
import House10 from "../assets/house10.png";

const projects = [
  { name: "Village Pt", img: House1 },
  { name: "Franklin", img: House2 },
  { name: "Henderson", img: House3 },
  { name: "Hazelwood", img: House4 },
  { name: "Martin St", img: House5 },
  { name: "Concord", img: House6 },
  { name: "Houston St", img: House7 },
  { name: "Hillsboro", img: House8 },
  { name: "Willow Ave", img: House9 },
  { name: "Brentwood", img: House10 },
];

export default function ProjectGrid() {
  return (
    <section className="px-8 py-12" id="projects">
      <h2 className="text-sm font-semibold mb-6">PROJECTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <div key={idx} className="text-center">
            <img
              src={project.img}
              className="w-[640px] h-[470px] mx-auto object-cover rounded"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
