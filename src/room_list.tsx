import React from 'react';
import Room from './room';
import Box from '@mui/material/Box';
import {roomInfo} from './roomSettings'


const dummyRooms:roomInfo[] = [
    {
        roomNo:"1A",
        toilet: 0,
        kitchen: 0,
        light: 0,
        comment: "OKOKOKOKOKOKOKOKOKOK"
    },
    {
        roomNo:"1B",
        toilet: 1,
        kitchen: 0,
        light: 0,
        comment: "NONONONONONONONO"
    },
    {
        roomNo:"1C",
        toilet: 0,
        kitchen: 0,
        light: 0,
        comment: "NONONONONONONONO"
    },
    {
        roomNo:"1D",
        toilet: 0,
        kitchen: 0,
        light: 2,
        comment: "NONONONONONONONO"
    },
    {
        roomNo:"2A",
        toilet: 1,
        kitchen: 1,
        light: 1,
        comment: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
    },
    {
        roomNo:"2B",
        toilet: 2,
        kitchen: 1,
        light: 2,
        comment: "NONONONONONONONO"
    },
    {
        roomNo:"2C",
        toilet: 0,
        kitchen: 0,
        light: 0,
        comment: "NONONONONONONONO"
    },
    {
        roomNo:"2D",
        toilet: 0,
        kitchen: 0,
        light: 0,
        comment: "NONONONONONONONO"
    }
]
const RoomList = () =>{


    return(
            <Box
                sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    mt:5
                    }}
            >
                {dummyRooms.map((room, index) => (
                    <Room room={room} />
                ))}
            </Box>
    )

}

export default RoomList;