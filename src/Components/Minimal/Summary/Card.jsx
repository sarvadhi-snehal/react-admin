import React from "react";

function Card(props) {
  return (
    // <div className="col-sm-12 col-md-6 col-lg-3 py-4  ">
    //   <div className="card text-black bg-white  p-3">
    //     <div className="card-body flex-view ">
    //       <h6 >{props.title}</h6>
    //       <h3 >{props.value}</h3>
    //     </div>
    //     
    //   </div>
    // </div>
    <div className="card col-sm-12 col-md-6 col-lg-3 my-3  p-0 " >
  
    <div className="card-body">
      <div className="card-body flex-view ">
          <h6 >{props.title}</h6>
          <h3 className={`text-${props.variant}`}>{props.value}</h3>
        </div>
    <div className="progress" style={{height:"6px"}}>
     <div  className={`bg-${props.variant} progress-bar `} role="progressbar" aria-valuenow={props.now} aria-valuemin="0" aria-valuemax="100" style={{width:"85%",height:"6px"}}> </div></div>
    </div>
  </div>
  );
}

export default Card;

Card.defaultProps = {
  title: "Card Title",
};
