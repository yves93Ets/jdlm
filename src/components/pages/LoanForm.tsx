import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useInputForm } from "Common/hooks/inputForm";
import { LoanModel } from "Models/LoanModel";
import { ItemList } from "Components/pages/ItemList";
import { CustomizedSnackbars } from "Components/layout/SnackBar";
import { useTranslation } from "react-i18next";

export const LoanForm = () => {
  const { t } = useTranslation();

  const [submitted, setSubmitted]: any = useState(false);
  useEffect(() => {
    setSubmitted(false);
  }, [submitted]);

  const [addedLoan, setAddedLoan]: any = useState({});
  const [selectedItem, setSelectedItem]: any = useState({});
  const [email, setEmail]: any = useState({});

  const handleSelectedItem = value => {
    setSelectedItem(value);
  };
  const handleLoan = () => {
    setSubmitted(true);
    const loan = new LoanModel(inputs.email, selectedItem, inputs.note);
    setAddedLoan(loan);
  };

  const handleFocusOut = () => {
    if (inputs.email !== undefined) {
      if (!inputs.email.includes("@")) {
        inputs.email = inputs.email + "@hotmail.com";
        setEmail(inputs.email);
      }
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useInputForm(handleLoan);

  const classes = useStyles({});
  return (
    <>
      <CustomizedSnackbars open={submitted} addedLoan={addedLoan} />
      <form onSubmit={handleSubmit} className={classes.container}>
        <div className={classes.divWidth}>
          <TextField
            autoFocus
            fullWidth
            className={classes.input}
            label={t("email")}
            name="email"
            type="email"
            onChange={handleInputChange}
            value={inputs.email || ""}
            onBlur={handleFocusOut}
          />
        </div>
        <div className={classes.divWidth}>
          <TextField
            multiline
            fullWidth
            className={classes.input}
            label={t("note")}
            name="note"
            onChange={handleInputChange}
            value={inputs.note || ""}
          />
        </div>
        <div className={classes.divWidth}>
          <ItemList handleSelectedItem={handleSelectedItem} />
        </div>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          {t("confirm")}
        </Button>
      </form>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing(1),
    display: "inline-block"
  },
  button: {
    margin: theme.spacing(3)
  },
  divWidth: {
    width: "25%",
    margin: theme.spacing(1)
  }
}));
