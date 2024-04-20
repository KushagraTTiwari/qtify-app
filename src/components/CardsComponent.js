// import Dummyimg from "../assets/Dummy.avif"
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import styles from "../components/CardsComponent.module.css"
// import Section from "../components/Sections.js"

const capitalizeFirstLetter = (name) => {
    return name
        .split('-') // Assuming the words are separated by a hyphen
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

const CardsComponent = ({name, image, follows}) => {
    const formattedName = capitalizeFirstLetter(name);
    // console.log(name)
    return (
        <div>
            <div className={styles.cards}>
                <div className={styles.cardsimg}><img src={image} alt="not found"/></div>
                {/* <div className={styles.cardstext}><h5>10110001 follows</h5></div> */}
                <div className={styles.cardstext}>
                <Stack direction="row" spacing={1}>
                    <Chip label={follows+" follows"} sx={{ backgroundColor: 'black', color: 'white' }}/>
                </Stack>
                </div>
                <p style={{color: "white", margin:"0px", fontSize:"larger"}}>{formattedName}</p>
            </div>
        </div>
    )
}

export default CardsComponent;