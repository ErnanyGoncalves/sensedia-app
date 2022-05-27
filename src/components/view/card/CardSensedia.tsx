import {  Card, CardContent, Typography } from "@mui/material";

export const CardSensedia = ({ id, title, body }: CardSensediaType) => {
  return (
    <Card key={id} variant="outlined" sx={{width:"100%", height:300}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Ernany Gonçalves
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {body}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {new Date().toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  )
}