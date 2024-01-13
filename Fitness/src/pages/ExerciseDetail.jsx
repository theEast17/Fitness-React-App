import { Box } from "@mui/material";
import { fetchData, fetchYoutubeData, exerciseOptions, youtubeOptions} from "../utils/fetchData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [youTubeDetail, setyouTubeDetail] = useState([]);
  const [targetDetail, setTargetDetail] = useState([]);
  const [equipmentDetail, setEquipmentDetail] = useState([]);
  const { id } = useParams();

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchAllData=async()=>{
      const ExerciseURL='https://exercisedb.p.rapidapi.com';
      const YoutubeURL='https://youtube-search-and-download.p.rapidapi.com';
  
      const exerciseData=await fetchData(`${ExerciseURL}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exerciseData);

      const youTubeData=await fetchYoutubeData(`${YoutubeURL}/search?query=${exerciseData.name}`,youtubeOptions);
      setyouTubeDetail(youTubeData.contents);

      const targetMuscleExerciseData=await fetchData(`${ExerciseURL}/exercises/target/${exerciseData.target}`,exerciseOptions);
      setTargetDetail(targetMuscleExerciseData)

      const equipmentExerciseData=await fetchData(`${ExerciseURL}/exercises/equipment/${exerciseData.equipment}`,exerciseOptions);
      setEquipmentDetail(equipmentExerciseData)
    }
    fetchAllData();
  },[id])
  if (!exerciseDetail) return <div>No Data</div>;
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos youTubeDetail={youTubeDetail} name={exerciseDetail.name}/>
      <SimilarExercises targetDetail={targetDetail} equipmentDetail={equipmentDetail} />
    </Box>
  );
};

export default ExerciseDetail;
