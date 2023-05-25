import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Api from "../services/api.js";
import { MyContext } from "../services/Context.js";

export const Header = () => {
  const [input, setInput] = useState("");
  const { dados, setDados, pages } = useContext(MyContext);
  const getApi = async (e) => {
    try {
      const response = await Api.get(
        `/?key=27676150-1af88998807daeae995cefd65&q=${input}&per_page=20&page=${pages}`
      );
      const jbody = response.data.hits;
      setDados(jbody);
    } catch (error) {
      console.log(error);
    }
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    getApi();
  };

  useEffect(() => {
    getApi();
  }, [input, pages]);

  return (
    <header className="c-header">
      <form>
        <input
          type="search"
          placeholder="Pesquise aqui..."
          className="search"
          value={input}
          onChange={({ target }) => setInput(target.value)}
          required
        />
        <button onClick={handleButtonClick} title="search">
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
};
