import { Link } from "react-router-dom";
import { Button,Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: {
          sm: "15px",
          xs: "20px",
        },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link
        to="/"
        style={{
          height: "48px",
          width: "48px",
          margin: "0 20px",
        }}
      >
        <img
          src={Logo}
          alt="LogoImg"
          style={{
            height: "48px",
            width: "48px",
            objectFit: "contain",
          }}
        />
      </Link>

      <Stack direction="row" alignItems="flex-end" fontSize="24px" gap="40px">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "2px solid #ff2625",
          }}
        >
          Home
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;

