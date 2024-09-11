export default function Warn() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        margin: "8px",
        borderRadius: "4px",
      }}
    >
      <h2>⚠ You have no data left. Buy a plan</h2>
    </div>
  );
}
