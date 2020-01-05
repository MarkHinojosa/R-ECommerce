import React from "react";
import { Button, FormControl, InputLabel, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Settings } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const PartSearch = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <div style={styles.partSearchRowContainer}>
      {" "}
      <div style={styles.partsSeachOutterContainer}>
        <h1
          style={{
            marginLeft: "3%",
            fontSize: "2.5em"
          }}
        >
          Shop By Bike
        </h1>
        <div style={styles.partsSearchInnerContainer}>
          <div style={styles.partsSelectionRow}>
            <div
              style={{
                ...styles.selectionBoxsContainer,
                ...styles.backgroundColorWhite
              }}
            >
              <div>Aftermarket Parts</div>
            </div>
            <div
              style={{
                ...styles.selectionBoxsContainer,
                ...styles.backgroundColorGray
              }}
            >
              <div>OEM Parts</div>
            </div>
          </div>
          <div style={styles.dropdownsContainer}>
            <div style={styles.dropdownsRow}>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                style={{ width: "20%" }}
              >
                <InputLabel
                  ref={inputLabel}
                  htmlFor="outlined-age-native-simple"
                >
                  Type
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange("age")}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: "Type",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option value="" />
                  <option value={"street"}>Street</option>
                  <option value={"dirt"}>Dirt</option>
                </Select>
              </FormControl>

              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  ref={inputLabel}
                  htmlFor="outlined-age-native-simple"
                >
                  Year
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange("year")}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: "Type",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option value="" />
                  <option value={2015}>2015</option>
                  <option value={2016}>2016</option>
                  <option value={2017}>2017</option>
                  <option value={2018}>2018</option>
                  <option value={2019}>2019</option>
                  <option value={2020}>2020</option>
                </Select>
              </FormControl>

              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  ref={inputLabel}
                  htmlFor="outlined-age-native-simple"
                >
                  Make
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange("age")}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: "Type",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option value="" />
                  <option value={"kawasaki"}>kawasaki</option>
                  <option value={"honda"}>honda</option>
                  <option value={"yamaha"}>yamaha</option>
                  <option value={"ktm"}>ktm</option>
                </Select>
              </FormControl>

              <FormControl
                variant="outlined"
                className={classes.formControl}
                style={{ width: "25%" }}
              >
                <InputLabel
                  ref={inputLabel}
                  htmlFor="outlined-age-native-simple"
                >
                  Model
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange("model")}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: "Type",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option value="" />
                </Select>
              </FormControl>
              <Button variant="contained">GO!</Button>
            </div>
            <div style={styles.garageRow}>
              <Settings style={{ alignSelf: "center" }} fontSize="small" />
              <p style={{ marginLeft: "1%" }}>Garage </p>
              <p style={styles.orangeText}>Log in to Access saved bikes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  partSearchRowContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    marginTop: "1%"
  },
  partsSeachOutterContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    width: "70%",
    // height: "40vh",
    marginTop: "3%",
    border: 1,
    borderColor: "#d6d7da",
    borderTop: "orange",
    borderStyle: "solid",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "30px"
  },
  partsSearchInnerContainer: {
    flex: "1",
    alignSelf: "center",
    backgroundColor: "gray",
    width: "95%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    padding: "1%"
  },
  partsSelectionRow: {
    height: "20%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center"
  },
  selectionBoxsContainer: {
    height: "100%",
    width: "25%",
    alignContent: "center",
    textAlign: "center",
    borderColor: "gray",
    borderStyle: "solid",
    borderTop: "10",
    borderBottom: "none",
    borderLeft: "none",
    borderRight: "none",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  backgroundColorWhite: {
    borderTopColor: "orange",
    backgroundColor: "white"
  },
  backgroundColorGray: {
    backgroundColor: "#E3E2E2"
  },
  dropdownsContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    display: "flex",
    justifyContent: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  dropdownsRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center"
  },
  garageRow: {
    marginLeft: "1%",
    flexDirection: "row",
    display: "flex",
    alignContent: "center"
  },
  orangeText: { color: "orange", marginLeft: "1%" }
};

export default PartSearch;
