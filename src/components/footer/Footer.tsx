import { Box, Pagination, Typography } from '@mui/material'


export const Footer = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pr: 1, pl: 1, pt: 2, pb:2 }}>
            <Typography sx={{ fontSize: 16, fontWeight: 500 }} color="text.secondary" component="div">
                TOTAL RESULTS XXX
            </Typography>
            <Pagination count={10} color="secondary" />
        </Box>
    )
}