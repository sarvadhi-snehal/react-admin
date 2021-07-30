import React from "react";
import { ProgressBar} from 'react-bootstrap'
function Card(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 py-4  ">
      <div className="card text-black bg-white  p-3">
        <div className="card-body flex-view ">
          <h6 >{props.title}</h6>
          <h3 className={`text-${props.variant}`}>{props.value}</h3>
        </div>
        <ProgressBar  className="p-1 " variant={props.variant}  now={props.now} />
      </div>
    </div>
  );
}

export default Card;

Card.defaultProps = {
  title: "Card Title",
};
