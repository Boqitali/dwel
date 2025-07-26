import HeaderImage from "../assets/header.png";

export default function Hero() {
  return (
    <section className="relative">
      <img
        src={HeaderImage}
        alt="Hero"
        className="w-full h-[500px] object-cover"
      />
    </section>
  );
}
