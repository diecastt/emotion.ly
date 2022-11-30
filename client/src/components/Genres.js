import React, {useState, useEffect    } from 'react'
import _axios from 'axios';
import { Autocomplete, TextField, Chip } from '@mui/material'
import { env } from '../env';

const genres = [
    "acoustic",
    "afrobeat",
    "alt-rock",
    "alternative",
    "ambient",
    "anime",
    "black-metal",
    "bluegrass",
    "blues",
    "bossanova",
    "brazil",
    "breakbeat",
    "british",
    "cantopop",
    "chicago-house",
    "children",
    "chill",
    "classical",
    "club",
    "comedy",
    "country",
    "dance",
    "dancehall",
    "death-metal",
    "deep-house",
    "detroit-techno",
    "disco",
    "disney",
    "drum-and-bass",
    "dub",
    "dubstep",
    "edm",
    "electro",
    "electronic",
    "emo",
    "folk",
    "forro",
    "french",
    "funk",
    "garage",
    "german",
    "gospel",
    "goth",
    "grindcore",
    "groove",
    "grunge",
    "guitar",
    "happy",
    "hard-rock",
    "hardcore",
    "hardstyle",
    "heavy-metal",
    "hip-hop",
    "holidays",
    "honky-tonk",
    "house",
    "idm",
    "indian",
    "indie",
    "indie-pop",
    "industrial",
    "iranian",
    "j-dance",
    "j-idol",
    "j-pop",
    "j-rock",
    "jazz",
    "k-pop",
    "kids",
    "latin",
    "latino",
    "malay",
    "mandopop",
    "metal",
    "metal-misc",
    "metalcore",
    "minimal-techno",
    "movies", 
    "mpb",
    "new-age",
    "new-release",
    "opera",
    "pagode",
    "party",
    "philippines-opm",
    "piano",
    "pop",
    "pop-film",
    "post-dubstep",
    "power-pop",
    "progressive-house",
    "psych-rock",
    "punk",
    "punk-rock",
    "r-n-b",
    "rainy-day",
    "reggae",
    "reggaeton",
    "road-trip",
    "rock",
    "rock-n-roll",
    "rockabilly",
    "romance",
    "sad",
    "salsa",
    "samba",
    "sertanejo",
    "show-tunes",
    "singer-songwriter",
    "ska",
    "sleep",
    "songwriter",
    "soul",
    "soundtracks",
    "spanish",
    "study",
    "summer",
    "swedish",
    "synth-pop",
    "tango",
    "techno",
    "trance",
    "trip-hop",
    "turkish",
    "work-out",
    "world-music"
  ]

const axios = _axios.create({ baseURL: env.appServer });

const Genres = () => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;

    const get_genres = async () => {
        try {
        const data = await axios 
            .get('/genres')
            .then(response => response.data ? setOptions(response.data) : console.log('error'))
        } catch(e) {
            console.log(e)
        }
    };
    useEffect(() => {

        if (!loading) {
          return undefined;
        }
        get_genres(); 
    }
    ,[loading]);
    
    useEffect(() => {

        if (!open) {
          setOptions([]);
        }
    }
    ,[open]);

    return (
    <Autocomplete
        multiple
        limitTags={2}
        id="tags-outlined"
        options={genres}
        loading={loading}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        renderInput={(params) => (
            <TextField
            {...params}
            label="Genres"
            placeholder="Select your genres"
            sx={{minWidth: '35vw', pb: 4}}
            />
        )}
        
        />
    )
}

export default Genres