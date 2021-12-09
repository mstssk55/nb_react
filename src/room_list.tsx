import React from 'react';
import Room from './room';
import Box from '@mui/material/Box';



const RoomList = () =>{
    const rooms:string[] =["1A","1B","1C","1D","2A","2B","2C","2D"];


    return(
            <Box
                sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    mt:5
                    }}
            >
                {rooms.map((room, index) => (
                    <Room room={room} />
                ))}
            </Box>
    )

}

export default RoomList;