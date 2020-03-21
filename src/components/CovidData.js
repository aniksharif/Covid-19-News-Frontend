import React, { useRef } from "react";
import { numberWithCommas } from "../helpers";

class CovidData extends React.Component {


  constructor(props) {
    super(props)
    this.cardRef = React.createRef();

  }


  componentDidMount() {
    this.handleMouseEnter()
  }
  handleMouseEnter() {
    // console.log(cardRef.current.textContent);
    if (this.cardRef && this.cardRef.current.textContent.match(/confirmed/gi)) {
      this.cardRef.current.classList.add("btn-primary");
    }
    if (this.cardRef && this.cardRef.current.textContent.match(/deaths/gi)) {
      this.cardRef.current.classList.add("btn-danger");
    }
    if (this.cardRef && this.cardRef.current.textContent.match(/recovered/gi)) {
      this.cardRef.current.classList.add("btn-success");
    }
  };
  // const handleMouseLeave = () => {
  //   if (cardRef.current.textContent.match(/confirmed/gi)) {
  //     cardRef.current.classList.remove("btn-primary");
  //   }
  //   if (cardRef.current.textContent.match(/deaths/gi)) {
  //     cardRef.current.classList.remove("btn-danger");
  //   }
  //   if (cardRef.current.textContent.match(/recovered/gi)) {
  //     cardRef.current.classList.remove("btn-success");
  //   }
  // };
  render() {
    return (
      <div
        ref={this.cardRef}
        className="card-body col-12 col-lg-4 btn"
        style={{paddingLeft:"0.5em"}}
      >
        <p className="h2 display-4">{this.props.children[0]}</p>
        <p className="h2 font-weight-light">
          {numberWithCommas(this.props.children[1])}
        </p>
      </div>
    )

  }

}

export default CovidData;
