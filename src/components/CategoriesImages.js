import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  CategoryAccessories,
  CategoryAirbagGear,
  CategoryParts,
  CategorySaleClose,
  CategoryTires,
  CategoryVideos,
  CategoryImageHelmets,
  CategoryGearGuides,
  CategoryRidingGear,
  CategoryWomens
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
          gridRowGap: "1%",
          marginTop: "5%",
          paddingBottom: "3%"
        }}
      >
        <Card className={classes.card} style={styles.categoryStyling}>
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.gearGuidesImage
            }}
          >
            <text style={styles.categoryText}>GEAR GUIDES</text>
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
            <text style={styles.categoryText}>Helmets</text>
          </div>
        </Card>
        <Card className={classes.card} style={styles.categoryStyling}>
          {" "}
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.ridingGearImage
            }}
          >
            <text style={styles.categoryText}>RIDING GEAR</text>
          </div>
        </Card>{" "}
        <Card className={classes.card} style={styles.categoryStyling}>
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.airbagGearImage
            }}
          >
            <text style={styles.categoryText}>AIRBAG GEAR</text>
          </div>
        </Card>
        <Card className={classes.card} style={styles.categoryStyling}>
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.partsImage
            }}
          >
            <text style={styles.categoryText}>PARTS</text>
          </div>
        </Card>{" "}
        <Card className={classes.card} style={styles.categoryStyling}>
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.gearGuidesImage
            }}
          >
            <text style={styles.categoryText}>ACCESSORIES</text>
          </div>
        </Card>
        <Card className={classes.card} style={styles.categoryStyling}>
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.tiresImage
            }}
          >
            <text style={styles.categoryText}>TIRES</text>
          </div>
        </Card>{" "}
        <Card className={classes.card} style={styles.categoryStyling}>
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.womensImage
            }}
          >
            <text style={styles.categoryText}>WOMEN'S</text>
          </div>
        </Card>
        <Card className={classes.card} style={styles.categoryStyling}>
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.saleCloseImage
            }}
          >
            <text style={styles.categoryText}>SALE & CLOSEOUTS</text>
          </div>
        </Card>
        <Card className={classes.card} style={styles.categoryStyling}>
          <div
            style={{
              ...styles.divWithBackgroundImage,
              ...styles.videosImage
            }}
          >
            <text style={styles.categoryText}>VIDEOS</text>
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
  categoryText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: "2em"
  },
  gearGuidesImage: {
    backgroundImage: `url(${CategoryGearGuides})`
  },
  helmetsImage: {
    backgroundImage: `url(${CategoryImageHelmets})`
  },
  accessoriesImage: {
    backgroundImage: `url(${CategoryAccessories})`
  },
  airbagGearImage: {
    backgroundImage: `url(${CategoryAirbagGear})`
  },
  partsImage: {
    backgroundImage: `url(${CategoryParts})`
  },
  saleCloseImage: {
    backgroundImage: `url(${CategorySaleClose})`
  },
  tiresImage: {
    backgroundImage: `url(${CategoryTires})`
  },
  videosImage: {
    backgroundImage: `url(${CategoryVideos})`
  },
  ridingGearImage: {
    backgroundImage: `url(${CategoryRidingGear})`
  },
  womensImage: {
    backgroundImage: `url(${CategoryWomens})`
  }
};

export default CategoriesImages;
