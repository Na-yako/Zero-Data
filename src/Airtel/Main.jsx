import NewsList from "./NewsList";

export default function Main({ news }) {
  return (
    <>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "12px",

          background: "#ffffff",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          fontSize: "10px",
          padding: "12px",
          cursor: "pointer",
        }}
      >
        <li>SPOTLIGHT</li>
        <li>TRENDS</li>
        <li>SPORT</li>
        <li>NEWS</li>
        <li>LIFE</li>
        <li>TECH</li>
        <li>BUSINESS</li>
      </ul>
      {news.map((neww) => (
        <ul key={neww.uuid}>
          <NewsList neww={neww} />
        </ul>
      ))}
    </>
  );
}
