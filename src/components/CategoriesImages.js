import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CategoryImageHelmets } from "../assets";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const CategoriesImages = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        borderColor: "red",
        borderWidth: "3px",
        borderStyle: "solid",
        width: "100%",
        // height: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "70%",
          borderColor: "blue",
          borderStyle: "solid",
          display: "grid",
          //   height: "100px",
          gridTemplateColumns: " 1fr 1fr",
          gridRowsColumns: " 1fr 1fr",
          gridColumnGap: "1%",
          gridRowGap: "1%"
        }}
      >
        <Card className={classes.card} style={styles.categoryStyling}>
          <CardContent></CardContent>
        </Card>{" "}
        <Card className={classes.card} style={styles.categoryStyling}>
          <img
            src={CategoryImageHelmets}
            style={{ height: "100%", width: "100%" }}
          />
        </Card>
        <Card className={classes.card} style={styles.categoryStyling}>
          1
        </Card>{" "}
        <Card className={classes.card} style={styles.categoryStyling}>
          2
        </Card>
        <Card className={classes.card} style={styles.categoryStyling}>
          1
        </Card>{" "}
        <Card className={classes.card} style={styles.categoryStyling}>
          2
        </Card>
        <Card className={classes.card} style={styles.categoryStyling}>
          1
        </Card>{" "}
        <Card className={classes.card} style={styles.categoryStyling}>
          2
        </Card>
      </div>
    </div>
  );
};

const styles = {
  categoryStyling: { height: "30vh" }
};

export default CategoriesImages;
