import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";
const ExerciseVideos = ({ youTubeDetail, name }) => {
  if (!youTubeDetail.length) return <Loader />;
  return (
    <Box
      sx={{
        marginTop: {
          lg: "100px",
          xs: "20px",
        },
      }}
      padding={"20px"}
    >
      <Typography  sx={{
          fontSize:{
            lg:'60px',
            xs:'32px'
          }
        }} mb={"33px"}
        fontWeight='500'
        >
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {youTubeDetail?.slice(0, 3).map((item, index) => {
          return (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
              className="exercise-video"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant="h5" color="#000">
                  {item.video.title}
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
