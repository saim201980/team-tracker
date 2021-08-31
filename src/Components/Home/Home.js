import React, { useEffect, useState } from "react";
import Team from "../Team/Team";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  console.log(teams);
  return (
    <div className="bg-dark ">
      <div className="container">
        <h3 className="text-center my-5 text-white">Team Tracker</h3>
      </div>

      <div className="container">
        <div className="row">
          {teams.map(team => (
            <Team team={team}></Team>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
