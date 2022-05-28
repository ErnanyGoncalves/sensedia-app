import { Typography } from "@mui/material"
import { Box } from "@mui/system"

export const Loading = () => {
    return (
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", height:600}}>
        <Typography sx={{ fontSize: 16 }} color="text.primary">
            Loading...
        </Typography>
        </Box>
    )
}