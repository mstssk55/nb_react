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
import {roomInfo} from './roomSettings'
import { bgcolor } from '@mui/system';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const alert:string[] = ["異常なし","黄色信号","危険"]
const bgColor:string[] =["rgb(0, 127, 255), rgb(0, 89, 178)","rgb(255, 235, 59), rgb(209, 191, 33)","rgb(255, 0, 0), rgb(179, 0, 0)"]

type RoomProps = {
    room: roomInfo;
};
const iconColor = [lightBlue[500],yellow["A700"],red[500]]
const BasicCard = (props:RoomProps)=> {
    const {roomNo,toilet,kitchen,light,comment} = props.room
    const alertNum:number[] = [toilet,kitchen,light]
    let bg:string = bgColor[0]
    if (alertNum.includes(2)){
        bg = bgColor[2]
    }else if(alertNum.includes(1)){
        bg = bgColor[1]
    }
    const TypeIcon = ()=>{
        interface route {
            icon: keyof typeof Icons;
            type:number
        }
        
        const datas: route[] = [
            {
                icon: 'Wc',
                type:toilet

            },
            {
                icon: 'Countertops',
                type:kitchen
            },
            {
                icon: 'WbIncandescent',
                type:light
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
                        {React.createElement(Icons[data.icon],{sx:{color:iconColor[data.type]}})}
                    </Avatar>
                    <Typography sx={{ fontSize: 14,ml:2 }} color="white">
                    {alert[data.type]}
                    </Typography>
                </Box>
                ))}
            </Box>
        )
    }
    return (
        <Card sx={{ width: '100%'}} style={{background: `linear-gradient(to right bottom, ${bg} 120%)`}}>
        <Link href="" style={{ textDecoration: 'none' }}>
            <CardActionArea>
            <CardContent>
            <Typography sx={{ fontSize: 30 }} color="white" gutterBottom>
                    {roomNo}
                </Typography>
                <TypeIcon />
                <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                    {comment}
                </Typography>
            </CardContent>
            </CardActionArea>
            </Link>
        </Card>
    );
}
export default BasicCard;