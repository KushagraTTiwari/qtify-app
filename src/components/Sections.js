import React,{ useState, useEffect} from 'react';
import axios from 'axios'
import CardsComponent from './CardsComponent';
// import Card from "@mui/material/Card"


const Section = () =>{
    const [albums, setAlbums] = useState([]);
    const [collapsed, setCollapsed] = useState(true)

    const fetchData = async ()=> {
        try {
            const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
            setAlbums(response.data)
            console.log("data -> ", response.data)
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
                <button onClick={toggleCollapse} style={{width:"7rem", fontSize:"larger", fontWeight:"800", color:"green", background:"transparent" , borderStyle:"none", marginRight:"25px"}}>{collapsed ? 'Expand' : 'Collapse'}</button>
            </div>
            <div style={{display:"flex", flexWrap:"wrap"}}>
                {albums.map((album, index)=> {
                    console.log("Album data:", album.slug);
                    return <CardsComponent name={album.slug} image={album.image} follows={album.follows} key={index}/>
                })}
            </div>
        </div>
    )
}

export default Section