import {  Card, CardContent, Typography } from "@mui/material";
import { Post } from "../../../types/Post";

export const CardSensedia = ({ id, title, body }: Post) => {
  return (
    <Card key={id} variant="outlined" sx={{ width:"100%", height:300}}>
      <CardContent sx={{p:2}}>
        <Typography sx={{ fontSize: 22, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}} component="div">
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14, mt:1,mb:2 }} color="text.secondary">
          Ernany Gonçalves
        </Typography>
        <Typography sx={{height:170}} color="text.secondary">
          {body}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {new Date().toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  )
}