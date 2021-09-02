import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root:{
        width: '100%',
    },
    header :{
         display: 'flex',
         justifyContent: "space-between",
         padding: "1rem"

    },
    modal :{
        zIndex: 2000
    }
}))
const TodoHeader = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Paper className={classes.header}>
        <h6>TO DO LIST</h6>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        +
      </button>
        </Paper>
      

      <Paper
        className={`modal fade`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        
      >
        <div className="modal-dialog bg-danger modal-dialog-centered">
          <div  Name="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default TodoHeader;
