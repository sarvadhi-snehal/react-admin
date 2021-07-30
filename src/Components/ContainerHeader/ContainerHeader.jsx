import React from "react";
import PropTypes from "prop-types";
import { RiAddLine } from "react-icons/ri";
function ContainerHeader(props) {
  return (
    <div className="d-flex w-100  p-3 align-items-center justify-content-between  bg-white">
      <h2>{props.title}</h2>
      <div className="ms-auto pe-5 d-flex align-items-center h-100  ">
        <a className="" href="/">
          home
        </a>
        &gt;
        <a className="" href={`${props.pathname}`}>
          {props.pathname}
        </a>
      </div>
      <button className="btn btn-primary">
        <RiAddLine className="me-1 text-primary bg-light rounded-circle" />
        Create New
      </button>
    </div>
  );
}

export default ContainerHeader;

ContainerHeader.defaultProps = {
  title: "Title",
  pathname: "pathname",
};

ContainerHeader.propTypes = {
  title: PropTypes.string,
  pathname: PropTypes.string,
};
