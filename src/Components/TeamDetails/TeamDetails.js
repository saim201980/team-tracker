import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import facebook from "../../Icon/Facebook.png"
import twitter from "../../Icon/Twitter.png"
import youtube from "../../Icon/YouTube.png"

const TeamDetails = () => {
  const { idTeam } = useParams();
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.teams);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const teamData = teams[0];
  console.log(teams[0]);
  return (
    <>
      {!loading ? (
        <Container>
          <div
            className="h-50"
            style={{
              background: `linear-gradient(0deg, rgba(255, 0, 150, 0.5), rgba(255, 0, 150, 0.5)), url(${teamData.strStadiumThumb})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Row className="justify-content-center">
              <Col md={2} className="p-5">
                <Image className="w-100 my-5 rounded" style={{margin: "10px"}} src={teamData.strTeamBadge} />
              </Col>
            </Row>
          </div>
          <Container className="p-5 bg-dark text-light">
            <Row className="bg-primary rounded">
              <Col md={7}>
                <div class="card-body text-light">
                  <h5 class="card-title">{teamData.strLeague}</h5>
                  <h5 class="card-title">{teamData.strCountry}</h5>
                  <h5 class="card-title">Gender: {teamData.strGender}</h5>
                  <h5 class="card-title">{teamData.intFormedYear}</h5>
                  <p class="card-text">
                    Suresh Dasari is a founder and technical lead developer in
                    tutlane.
                  </p>
                </div>
              </Col>
              <Col md={5}>
                <Image className="w-75 mt-2 rounded" src={teamData.strTeamFanart3} />
              </Col>
            </Row>
            <Row>
              <p className="mt-3">{teamData.strStadiumDescription}</p>
            </Row>
            <br />
            <Row>
                <Col className = "text-center">
                    <a href="https://www.facebook.com/Arsenal" target="blank">  <img style={{width:"80px"}} src={facebook} alt="" /></a>
              
                    <a href="https://twitter.com/Arsenal" target="blank">  <img style={{width:"80px"}} src={twitter} alt=""/></a>

                    <a href="https://www.youtube.com/Arsenal" target="blank">  <img style={{width:"80px"}} src={youtube} alt="" /></a>

                </Col>
            </Row>
          </Container>
          
        </Container>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default TeamDetails;