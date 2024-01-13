/* eslint-disable react/prop-types */
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    boxShadow= 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
    background= "#fff"
    cursor= "pointer"
    gap= "47px"
    marginTop='25px'
    mb='25px'
    sx={
      bodyPart === item
        ? {
          borderTop: "4px solid #FF2625",
          borderBottomLeftRadius: "20px"
          }
        : {
          borderTop: "0",
          borderBottomLeftRadius: "20px"
          }
        
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
