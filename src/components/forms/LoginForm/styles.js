import { styled, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Container = styled(({ ...rest }) => <Grid container direction={"column"} {...rest} />)(
  ({ theme }) => ({
    boxSizing: "border-box",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "472px",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "30px",
    width: "100%",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  })
);

export const ForgotPassword = styled(NavLink)(({ theme }) => ({
  fontSize: "14px",
  color: "#4E598348",
  fontWeight: "400",
  lineHeight: "19px",
}));
export const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  color: theme.palette.common.black,
  fontWeight: "700",
  letterSpacing: "-0.6px",
  lineHeight: "33px",
}));
