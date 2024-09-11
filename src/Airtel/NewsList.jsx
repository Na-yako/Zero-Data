import { useState } from "react";

export default function NewsList({ neww }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const { image_url: image, title, snippet } = neww;

  return (
    <li
      style={{
        listStyle: "none",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        width: "fit-content",
        borderRadius: "8px",
        padding: "9px",
      }}
    >
      {isOpen ? (
        <div>
          <div>
            <img
              src={image}
              alt={`${image} image`}
              style={{ height: "100px", width: "300px" }}
            />
            <div>
              <strong>Heading:</strong> {title}
            </div>
          </div>
          <p>
            <strong>Snippet:</strong> {snippet}
          </p>
        </div>
      ) : (
        <div>
          <img src={image} alt={`${image} image`} style={{ height: "100px" }} />
          <div>
            <strong>Heading:</strong> {title}
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #faebeb",
          background: "#ffffff",
          padding: "20px",
          fontSize: "10px",
          cursor: "pointer",
          color: "red",
        }}
      >
        <div onClick={handleClick}> {isOpen ? "READ LESS" : "READ MORE"}</div>
        <div onClick={handleClick}>&rarr;</div>
      </div>
    </li>
  );
}
