import React,  {useState}  from 'react'
import TopLayout from '../components/TopLayout';
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom'
import { Box } from '@mui/system';
import BottomLayout from '../components/BottomLayout';



const MainView = () => {
    const navigate = useNavigate()
    const [selectedGenres, setSelectedGenres] = useState([]);
  
  
    const handleSubmit = (e) => {
      e.preventDefault()
      
      navigate('/playlist', {
        state: {
          text: "text",
          genres: selectedGenres
        }
      });
    };
    
  return (
    <div>
        <Header/>
        <Box sx={{height: '93vh', background: '#f8ecde'}}>
            <TopLayout/>
            <BottomLayout/>
        </Box>       
        
    </div>
        
    )
}

export default MainView