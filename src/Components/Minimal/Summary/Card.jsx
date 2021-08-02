import React from "react";

function Card({ title, value,type }) {
  return (
    <div className="card col-sm-12 col-md-6 col-lg-3">
      <div className="card-body">
        <h5>Logo</h5>
        <h5 className="card-title">{title}</h5>
        <div className="progress"
          style={{height:"6px"}}>
          <div
            className={`progress-bar bg-${type} `}
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width:"50%", height:"6px"}}
          >
         
          </div>
        </div>
     
      </div>
    </div>
  );
}

export default Card;
Card.defaultProps = {
  title: "Card Title",
};
