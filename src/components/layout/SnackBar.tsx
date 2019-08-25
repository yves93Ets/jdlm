import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import { green } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles } from "@material-ui/core/styles";

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon
};

function MySnackbarContentWrapper(props) {
  const classes = useStyles1({});
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "success"]).isRequired
};

export const CustomizedSnackbars = props => {
  const { addedLoan } = props;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (props.open) {
      handleOpen();
    }
  }, [props.open]);

  function handleClose(reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <MySnackbarContentWrapper
        onClose={handleClose}
        variant="success"
        message={open ? `Loan Sucessfull of ${addedLoan.item} from ${addedLoan.user} on ${addedLoan.loanDate}` : ""}
      />
    </Snackbar>
  );
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));
