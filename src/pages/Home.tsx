import { useEffect, useState } from "react";
import SwitchTheme from "../components/SwitchTheme";

import Icon from "";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setData(jsonData.quizzes);
      } catch (error) {
        console.error("Error al cargar el archivo JSON", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header className="justify-end flex container h-[72px] items-center">
        <SwitchTheme />
      </header>
      <main className="container mt-[32px]">
        <h1>
          <span className="font-thin">Welcome to the </span>Frontend Quiz!
        </h1>
        <p className="italic mt-[16px]">Pick a subject to get started</p>
        <section className="flex flex-col gap-y-6 mt-10">
          {data.length > 0 ? (
            <>
              {data.map((quiz, index) => {
                const icon = quiz.title.toLowerCase();
                return (
                  <button
                    className="w-full bg-white rounded-xl p-3 flex items-center gap-x-4 shadow-[0px_16px_40px_0px_rgba(143,160,193,0.14)]"
                    key={index}
                  >
                    <img
                      className="size-10"
                      src={`../assets/images/icon-${icon}.svg`}
                      alt={quiz.title}
                    />
                    <h5>{quiz.title}</h5>
                  </button>
                );
              })}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
