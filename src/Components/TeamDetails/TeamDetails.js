import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TeamDetails = () => {

    const{idTeam} = useParams();
    const [teams, setTeams] = useState([]);
    //const{strStadiumThumb, strStadiumDescription} = teams;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=/${idTeam}`;
         fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
        .catch(error => console.log(error))
    })
    console.log(teams);


    return (
        <div>
            <h2 className ="text-center">Team Id : {idTeam}</h2>
           
                  
        </div>
    );
};

export default TeamDetails;