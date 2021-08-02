import React from "react";
import PropTypes from "prop-types";
function Breadcrumb({ title }) {
  return (
    <>



      <div aria-label="breadcrumb" className="flex-view me-3">
        <ol className="breadcrumb flex-view m-auto">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {title}
          </li>
        </ol>
      </div>
    </>
  );
}

export default Breadcrumb;

Breadcrumb.defaultProps = {
  title: "Dashbord 1",
};

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
};
