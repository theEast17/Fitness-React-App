/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from "./Loader";


const SimilarExercises = ({targetDetail,equipmentDetail}) => {

  return (
    <Box sx={{
      mt:{lg:'60px',xs:'0'}
    }}>
     <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={600} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ padding: 2, position: 'relative' }}>
      {targetDetail.length !== 0 ? <HorizontalScrollBar data={targetDetail} /> : <Loader />}
    </Stack>


    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={600} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ padding: 2, position: 'relative' }}>
      {equipmentDetail.length !== 0 ? <HorizontalScrollBar data={equipmentDetail} /> : <Loader />}
    </Stack>
    </Box>
  )
}

export default SimilarExercises
