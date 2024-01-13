import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail=[
    {
        icon:BodyPartImage,
        name:bodyPart
    },
    {
        icon:TargetImage,
        name:target
    },
    {
        icon:EquipmentImage,
        name:equipment
    }
  ]

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img
        src={gifUrl}
        alt="gifImage"
        loading="lazy"
        className="detail-image"
      />
      <Stack
        sx={{
          gap: { lg: "35px", xs: "20px" },
        }}
      >
        <Typography 
        sx={{
          fontSize:{
            lg:'60px',
            xs:'40px'
          }
        }}
        textTransform={'capitalize'} 
        fontWeight='500'
        >
            {name}
        </Typography>
        <Typography  sx={{
          fontSize:{
            lg:'30px',
            xs:'20px'
          }
        }}>
            Exercises keep you strong. {bodyPart} is one of the best exercises to target your {target} It will help
            you improve your mood and gain energy.  
        </Typography>

        {extraDetail.map((item,index)=>{
            const {icon,name}=item;
            return(
                <Stack key={index} direction={'row'} gap={'24px'} alignItems={'center'}>
                    <Button sx={{
                        background:'#fff2db',
                        borderRadius:'50%',
                        width:'100px',
                        height:'100px'
                    }}>
                        <img src={icon} alt="BodyPart" style={{width:'50px',height:'50px'}} />
                    </Button>
                    <Typography textTransform={'capitalize'} variant="h5">
                        {name}
                    </Typography>
                </Stack>
            )
        })}
      </Stack>
    </Stack>
  );
};

export default Detail;
