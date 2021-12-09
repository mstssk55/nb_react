import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import * as Icons from '@mui/icons-material/';
import Link from '@mui/material/Link';
import { lightBlue,yellow,red } from "@mui/material/colors";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
type RoomNo = {
    room: string
};
const iconColor = [lightBlue[500],yellow["A700"],red[500]]
const BasicCard = (props:RoomNo)=> {
    const room = props.room
    const TypeIcon = ()=>{
        interface route {
            icon: keyof typeof Icons;
        }
        
        const datas: route[] = [
            {
                icon: 'Wc',
            },
            {
                icon: 'Countertops',
            },
            {
                icon: 'WbIncandescent',
            }
        ]
        
        return(
            <Box sx={{ mb:3 }}>
                {datas.map((data, index) => (
                    <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    mb:1
                    }}
                >
                    <Avatar sx={{bgcolor:"white"}}>
                        {React.createElement(Icons[data.icon],{sx:{color:iconColor[1]}})}
                    </Avatar>
                    <Typography sx={{ fontSize: 14,ml:2 }} color="white">
                    異常なし
                    </Typography>
                </Box>
                ))}
            </Box>
        )
    }
    return (
        <Card sx={{ width: '100%'}} style={{background: 'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)'}}>
        <Link href="" style={{ textDecoration: 'none' }}>
            <CardActionArea>
            <CardContent>
            <Typography sx={{ fontSize: 30 }} color="white" gutterBottom>
                    {room}
                </Typography>
                <TypeIcon />
                <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </Typography>
            </CardContent>
            </CardActionArea>
            </Link>
        </Card>
    );
}
export default BasicCard;