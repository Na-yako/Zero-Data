export default function Header({ children }) {
  return (
    <header
      style={{
        background: "#ffffff",
        color: "red",
        boxShadow: "",
      }}
    >
      {children}
    </header>
  );
}
