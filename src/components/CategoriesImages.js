import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  CategoryImageHelmets,
  CategoryGearGuides,
  CategoryRidingGear
} from "../assets";

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
        width: "100%",
        // height: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#FAFAFA"
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
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.gearGuidesImage
            }}
          >
            <text style={{ color: "white", alignSelf: "center" }}>
              GEAR GUIDES
            </text>
            <text style={{ color: "white", alignSelf: "center" }}>2019</text>
          </div>
        </Card>{" "}
        <Card className={classes.card} style={styles.categoryStyling}>
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.helmetsImage
            }}
          >
            <text style={{ color: "white", alignSelf: "center" }}>Helmets</text>
          </div>
        </Card>
        <Card className={classes.card} style={styles.categoryStyling}>
          {" "}
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.gearGuidesImage
            }}
          >
            <text style={{ color: "white", alignSelf: "center" }}>
              RIDING GEAR
            </text>
          </div>
        </Card>{" "}
        <Card className={classes.card} style={styles.categoryStyling}>
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.gearGuidesImage
            }}
          >
            <text style={{ color: "white", alignSelf: "center" }}>
              AIRBAG GEAR
            </text>
          </div>
        </Card>
        <Card className={classes.card} style={styles.categoryStyling}>
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.gearGuidesImage
            }}
          >
            <text style={{ color: "white", alignSelf: "center" }}>PARTS</text>
          </div>
        </Card>{" "}
        <Card className={classes.card} style={styles.categoryStyling}>
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.gearGuidesImage
            }}
          >
            <text style={{ color: "white", alignSelf: "center" }}>
              ACCESSORIES
            </text>
          </div>
        </Card>
        <Card className={classes.card} style={styles.categoryStyling}>
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.gearGuidesImage
            }}
          >
            <text style={{ color: "white", alignSelf: "center" }}>TIRES</text>
          </div>
        </Card>{" "}
        <Card className={classes.card} style={styles.categoryStyling}>
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.gearGuidesImage
            }}
          >
            <text style={{ color: "white", alignSelf: "center" }}>WOMEN'S</text>
          </div>
        </Card>
      </div>
    </div>
  );
};

const styles = {
  categoryStyling: { height: "30vh", padding: "2%" },
  divWithBackgroundImage: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundSize: "cover"
  },
  gearGuidesImage: {
    backgroundImage: `url(${CategoryGearGuides})`
  },
  helmetsImage: {
    backgroundImage: `url(${CategoryImageHelmets})`
  },
  helmetsImage: {
    backgroundImage: `url(${CategoryImageHelmets})`
  },
  helmetsImage: {
    backgroundImage: `url(${CategoryImageHelmets})`
  },
  helmetsImage: {
    backgroundImage: `url(${CategoryImageHelmets})`
  },
  helmetsImage: {
    backgroundImage: `url(${CategoryImageHelmets})`
  },
  helmetsImage: {
    backgroundImage: `url(${CategoryImageHelmets})`
  },
  helmetsImage: {
    backgroundImage: `url(${CategoryImageHelmets})`
  },
  helmetsImage: {
    backgroundImage: `url(${CategoryImageHelmets})`
  }
};

export default CategoriesImages;
