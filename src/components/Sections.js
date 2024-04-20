import React,{ useState, useEffect} from 'react';
import axios from 'axios'
// import CardsComponent from './CardsComponent';
import SwiperUi from './Swiper';
// import Card from "@mui/material/Card"


const Section = () =>{
    const [albums, setAlbums] = useState([]);
    const [collapsed, setCollapsed] = useState(true)

    const fetchData = async ()=> {
        try {
            const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
            setAlbums(response.data)
            // console.log("data -> ", response.data)
        } catch (error) {
            console.log("Error in frtching data: ",error)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };



    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between"}}> 
                <h1 style={{color: "white", marginLeft:"40px"}}>Top Album</h1>
                <button onClick={toggleCollapse} style={{width:"7rem", fontSize:"larger", fontWeight:"700", color:"green", background:"transparent" , borderStyle:"none", marginRight:"25px"}}>{collapsed ? 'Show All' : 'Collapse All'}</button>
            </div>
            <div style={{display:"flex", flexWrap:"wrap"}}>
                    return <SwiperUi  data={albums}/>
            </div>
        </div>
    )
}

export default Section