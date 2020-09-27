import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class CountryInfo extends Component {
  goBackToHome = () => {
    this.props.history.push("/countries");
  };
  render() {
    const cardData = JSON.parse(window.localStorage.getItem("card"));
    return (
      <div style={{ padding: 50, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: 10 }}>
          <Card style={{ width: "18rem", border: "1px solid black" }}>
            <Card.Body>
              <Card.Text>
                <p style={{ textAlign: "center", fontSize: "16px" }}>
                  {cardData.Country}
                </p>
              </Card.Text>
              <Card.Text>
                <p>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Brand</span> :
                  {cardData.Brand}
                </p>
              </Card.Text>
              <Card.Text>
                <p>
                  <span style={{ fontWeight: "bold" }}>Variety </span>:
                  {cardData.Variety}
                </p>
              </Card.Text>
              <Card.Text>
                <p>
                  <span style={{ fontWeight: "bold" }}>Style </span>:
                  {cardData.Style}
                </p>
              </Card.Text>
              <Card.Text>
                <p>
                  <span style={{ fontWeight: "bold" }}>Stars </span>:
                  {cardData.Stars}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ padding: 10 }}>
          <Button onClick={this.goBackToHome}>Go Back</Button>
        </div>
      </div>
    );
  }
}
