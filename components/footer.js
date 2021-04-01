import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default function Footer() {
    return (
        <Grid container item xs={10} justify="center"flexDirection="row">
            <Grid container item xs={5} justify="flex-start" flexDirection="row">
                <Grid item>
                    <Typography>Location Map and Address {"\n"}</Typography>
                    <Typography>Edmonton, Alberta {"\n"}</Typography>
                    <Typography>Canada {"\n"}</Typography>
                </Grid>
            </Grid>
            <Grid container item xs={5} justify="flex-end" flexDirection="row">
                <Grid item>
                    <Typography>Hours of Operation {"\n"}</Typography>
                    <Typography>Monday: 9am to 7pm {"\n"}</Typography>
                    <Typography>Tuesday: 9am to 7pm {"\n"}</Typography>
                    <Typography>Wednesday: 9am to 7pm {"\n"}</Typography>
                    <Typography>Thursday: 9am to 7pm {"\n"}</Typography>
                    <Typography>Friday: 9am to 7pm {"\n"}</Typography>
                    <Typography>Sat/Sun: Closed {"\n"}</Typography>
                </Grid>

            </Grid>
        </Grid>
    )
}