import { useEffect } from "react";
import { useState } from "react";

import Navbar from "./Airtel/Navbar";
import Logo from "./Airtel/Logo";
import Warn from "./Airtel/Warn";
import DataOffer from "./Airtel/DataOffer";
import Search from "./Airtel/Search";
import Adds from "./Airtel/Adds";
import Header from "./Airtel/Header";
import Main from "./Airtel/Main";

const TOKEN = `0Ub1xXhFqemF0a8wuscG8OTP5J4m12FhGIJNFHEL`;
export default function App() {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState([]);

  useEffect(
    function () {
      async function fetchNews() {
        try {
          const res = await fetch(
            `https://api.thenewsapi.com/v1/news/all?api_token=${TOKEN}&search=${query}&categories=business,tech,life,sport,trends,spotlight,travel&language=en&limit=3 `
          );

          if (!res.ok) throw new Error("News not Found");

          const data = await res.json();

          setNews(data.data);
        } catch (err) {
          console.log(err.message);
        }
      }
      if (query.length < 3) {
        setNews([]);
        return;
      }
      fetchNews();
    },
    [query]
  );

  return (
    <div style={{ background: "#f8f8f8" }}>
      <Navbar>
        <Logo />
      </Navbar>

      <Header>
        <Warn />
        <DataOffer />
        <Search query={query} setQuery={setQuery} />
        <Adds />
      </Header>
      <Main news={news} query={query} setQuery={setQuery} />
    </div>
  );
}
