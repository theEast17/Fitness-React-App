import { Box,Typography,Button } from "@mui/material"
import bannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box sx={{
      mt:{lg:'212px',xs:'70px'},
      ml:{sm:'50px'}
    }}
    position='relative'
    p='20px'
    >
      <Typography 
      color='#ff2625'
      fontWeight='600'
      fontSize='30px'
      letterSpacing='.5px'
      marginBottom='20px'
      >Fitness Club</Typography>
      <Typography
      fontWeight='700'
      marginBottom='23px'
      sx={{
        fontSize:{
          lg:'44px',
          xs:'40px'
        }
      }}
      >
        Sweat , Smile <br /> and Repeat
        </Typography>
      <Typography
      fontSize='22px' 
      lineHeight='44px'
      >
        Check out the most efffective Exercises
        </Typography>
      <Button href='#exercises'
      className="explore-btn"
      sx={{
        backgroundColor:'#ff2625',
        color:'#fff',
        textTransform:'capitalize',
        fontSize:'16px',
        marginTop:'30px',
        mb:'10px',
        border:'1px solid red'
      }}
      >Explore Exercises</Button>
      <Typography
      fontWeight='600'
      color='#ff2625'
      marginTop='50px'
      sx={{
        opacity:'0.1',
        display:{lg:'block',xs:'none'},
        fontSize:'200px',
        border:'1px solid red'
      }}
      >
        Exercise
      </Typography>
      <img src={bannerImage} alt="bannerImage"
      className="hero-banner-img"
      />
    </Box>
  )
}

export default HeroBanner

