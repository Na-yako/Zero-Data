export default function DataOffer() {
  return (
    <div>
      <p style={{ background: "", color: "#000", padding: "2px" }}>
        <strong>Data Offers</strong>
      </p>
      <p
        style={{
          background: "#ffffff",
          color: "GrayText",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          padding: "6px",
          fontSize: "12px",
          borderRadius: "4px",
        }}
      >
        <span>📢</span> Oops! No available offers for you at the moment
      </p>
    </div>
  );
}
