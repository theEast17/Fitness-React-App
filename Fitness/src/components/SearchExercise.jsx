/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Box, Button, Typography, Stack, TextField } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SeacrhExercise = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all',...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);


  const handleSearch = async() => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (items) =>
          items.name.toLowerCase().includes(search) ||
          items.target.toLowerCase().includes(search) ||
          items.equipment.toLowerCase().includes(search) ||
          items.bodyPart.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack
      marginTop="25px"
      padding="20px"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        fontWeight="600"
        textAlign="center"
        marginBottom="30px"
        sx={{
          fontSize: {
            lg: "34px",
            xs: "28px",
          },
        }}
      >
        Awesome Exercise You <br />
        Should Know
      </Typography>

      <Box position="relative">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "1000px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="56px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />

        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "12px",
            },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          padding: "10px",
        }}
      >
        <HorizontalScrollBar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SeacrhExercise;
