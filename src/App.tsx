import React, { useEffect, useState } from "react";
import "./App.css";

type uni = {
  alpha_two_code: string;
  country: string;
  domains: string[];
  name: string;
  "state-province"?: string;
  web_pages?: string[];
};

function App() {
  const [universities, setUniversities] = useState<uni[]>([]);

  // fetch from api
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL!)
      .then((response) => response.json())
      .then((data) => setUniversities(data));

    return () => {};
  }, []);

  console.log("universities", universities);

  return (
    <div className="App">
      {universities && (
        <ul className="unis">
          {universities.map((university) => (
            <li key={university.name}>
              <a
                href={
                  university.web_pages && university.web_pages.length !== 0
                    ? university.web_pages[0]
                    : ""
                }
                target="_blank"
                rel="noreferrer"
              >
                {university.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
