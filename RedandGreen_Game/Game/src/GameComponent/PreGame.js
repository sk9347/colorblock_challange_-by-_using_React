import "./pregame.css";
import logo from "./levelup-vector-logo_prev_ui.png";
import { Button, Card } from "react-bootstrap";
import { MDBContainer, MDBFooter } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const PreGame = () => {
  const nav = useNavigate();

  const navhandle = () => {
    nav("/game");
  };
  const navhandle1 = () => {
    nav("/midLevel");
  };
  const navhandle2 = () => {
    nav("/hardLevel");
  };

  return (
    <>
      <body id="body">
        <img src={logo} alt="logo" id="img"></img>
        <div id="div">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/474x/0f/ec/5c/0fec5cd3ef49b31c87f2f7baeaf3576f.jpg"
            />
            <Card.Body>
              <Card.Title>Easy Level</Card.Title>
              <Card.Text>
                <b>
                  Score 10 points within a time limit of 40 seconds.<br></br>
                  Rules:
                </b>
                <br></br>
                You start with 0 points. Each correct action or task earns you 1
                point. You have 40 seconds to accumulate a total of 10 points.
                The timer will start when you begin the game.
              </Card.Text>
              <Button variant="primary" onClick={navhandle}>
                Play
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="https://png.pngtree.com/png-vector/20221025/ourmid/pngtree-rounded-square-red-neon-frame-with-text-space-png-image_6375226.png"
            />
            <Card.Body>
              <Card.Title>Medium Level:</Card.Title>
              <Card.Text>
                <b>
                  Score 15 points within a time limit of 40 seconds.<br></br>
                  Rules
                </b>
                <br></br>
                Similar to the easy level, you start with 0 points. Each correct
                action or task now earns you 1 point. You still have 40 seconds
                to accumulate a total of 15 points. The timer starts when the
                game begins.
              </Card.Text>
              <Button variant="primary" onClick={navhandle1}>
                Play
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="https://png.pngtree.com/png-vector/20200624/ourmid/pngtree-abstract-neon-circle-green-banner-png-image_2263478.jpg"
            />
            <Card.Body>
              <Card.Title>Hard Level:</Card.Title>
              <Card.Text>
                <b>
                  Score 25 points within a time limit of 40 seconds.<br></br>
                  Rules:
                </b>
                <br></br>
                This is the most challenging level; you start with 0 points.
                Each correct action or task earns you 1 point. You have 40
                seconds to accumulate a total of 25 points. The timer starts
                when you initiate the game.
              </Card.Text>
              <Button variant="primary" onClick={navhandle2}>
                Play
              </Button>
            </Card.Body>
          </Card>
        </div>
        <MDBFooter
          className="text-center text-white"
          style={{ backgroundColor: "#0a4275" }}
        >
          <MDBContainer className="p-4 pb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
              </p>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright: levelup
          </div>
        </MDBFooter>
      </body>
    </>
  );
};
export default PreGame;
