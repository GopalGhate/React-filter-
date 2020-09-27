import React, { Component } from "react";
import $ from "jquery";
import { CardsPage } from "./CardsPage";
import { Row, Col } from "react-bootstrap";

export class ParentCardsGrid extends Component {
  state = {
    cardsData: [],
    search: "",
  };

  componentDidMount = () => {
    const url = "http://starlord.hackerearth.com/TopRamen";
    $.ajax({
      url,
      type: "GET",
      success: (response) => {
        this.setState({ cardsData: response });
      },
      error: (request, error) => {
        return request.responseText || error;
      },
    });
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { cardsData, search } = this.state;
    return (
      <div style={{ padding: 50 }}>
        <div style={{ textAlign: "center" }}>
          <Row>
            <Col sm={10}>
              <label style={{ fontSize: 15 }}>Countries</label>
            </Col>
          </Row>
          <Row>
            <Col sm={10}>
              <SearchComponent handleChange={this.handleChange} />
            </Col>
          </Row>
        </div>
        <CardsPage cards={cardsData} search={search} />
      </div>
    );
  }
}

export const SearchComponent = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => props.handleChange(e)}
        style={{ width: "20%", textAlign: "center" }}
      ></input>
    </div>
  );
};
