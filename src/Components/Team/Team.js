import React from "react";
import { Link } from "react-router-dom";
const Team = (props) => {
  const { strTeam, strLeague, strTeamBadge, idTeam } = props.team;

  return (
    <div className="col col-md-4 my-3 text-center">
      <div className="card p-4">
        <img className="w-25 mx-auto" src={strTeamBadge} alt="..." />
        <div class="card-body">
          <h5 class="card-title">{strTeam}</h5>
          <p class="card-text">{strLeague}</p>

          <Link to={`/team/${idTeam}`}><button className="btn btn-primary px-3">Explore</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Team;
