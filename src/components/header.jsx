export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-6">
      <div className="text-sm font-semibold">DWEL®</div>
      <nav className="space-x-6 text-sm font-light">
        <a href="#projects" className="hover:underline">PROJECTS</a>
        <a href="#info" className="hover:underline">INFO</a>
      </nav>
    </header>
  );
}
