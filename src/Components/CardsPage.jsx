import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Link, withRouter, NavLink } from "react-router-dom";

export class CardsPageImpl extends Component {
  setCardDataToLocalStorage = (card) => {
    window.localStorage.setItem("card", JSON.stringify(card));
  };
  render() {
    const { cards, search } = this.props;
    console.log("This.props", this.props);
    let countryList = [];

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {cards && cards.length > 0
          ? cards.map((inst) =>
              !countryList.includes(inst.Country) ? (
                !!search &&
                inst.Country.toLowerCase().indexOf(search.toLowerCase()) ===
                  -1 ? (
                  ""
                ) : (
                  <div
                    style={{
                      flexBasis: isMobile ? "100%" : "33%",
                      padding: 10,
                    }}
                  >
                    {countryList.push(inst.Country)}
                    <Card
                      style={{
                        width: "18rem",
                        textAlign: "center",
                        border: "1px solid black",
                      }}
                    >
                      <Card.Body>
                        <Card.Text style={{ fontSize: "16px" }}>
                          <b>{inst.Country}</b>
                        </Card.Text>
                        <NavLink
                          to={{
                            pathname: `/country-info/${JSON.stringify(inst)}`,
                          }}
                          onClick={() => this.setCardDataToLocalStorage(inst)}
                          style={{ fontSize: "14px", textDecoration: "none" }}
                        >
                          Get InFo
                        </NavLink>
                      </Card.Body>
                    </Card>
                  </div>
                )
              ) : (
                ""
              )
            )
          : ""}
      </div>
    );
  }
}

export const CardsPage = withRouter(CardsPageImpl);
