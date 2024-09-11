import { BiSearch } from "react-icons/bi";

export default function Search({ query, setQuery }) {
  return (
    <div
      style={{
        padding: "7px",
        background: "#ffffff",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "4px",
      }}
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="Search the web"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "80rem",
          height: "32px",
          background: "#f8f8f8",
          outline: "none",
          border: "1px solid #faebeb",
         
        }}
      />
      <button
        style={{
          background: "red",
          height: "34px",
          border: "none",
          cursor: "pointer",
          color: "white"
        }}
      >
       <BiSearch />
      </button>
    </div>
  );
}
