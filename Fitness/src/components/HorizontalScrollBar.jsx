/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import { useContext, useState } from "react";

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } =
    useContext(VisibilityContext);

  return (
    <div
      onClick={() => scrollPrev()}
      disabled={isFirstItemVisible}
      className="arrow right-arrow"
    >
      <img src={LeftArrowIcon} alt="left-arrow" />
    </div>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } =
    useContext(VisibilityContext);

  return (
    <div
      onClick={() => scrollNext()}
      disabled={isLastItemVisible}
      className="arrow left-arrow"
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </div>
  );
};


const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, bodyParts }) => {
  const [selected, setSelected] = useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => () => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box key={item.id || item} m="0 40px">
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item}
           />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
