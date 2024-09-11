export default function Navbar({ children }) {
  return (
    <nav className="navbar" style={{ background: "red", color: "white" }}>
      {children}
    </nav>
  );
}
