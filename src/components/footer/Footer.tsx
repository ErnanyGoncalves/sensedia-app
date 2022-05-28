import { Box, Pagination, PaginationItem, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { purple } from '@mui/material/colors';
import usePostStore from '../../hooks/usePostStore'

const useStyles = makeStyles(() => ({
  ul: {
    "& .Mui-selected": {
      backgroundColor: purple[900],
      color: "white"
    }
  }
}));

export const Footer = () => {
  const page = usePostStore(state => state.currentPage);
  const results = usePostStore(state => state.totalResults);
  const pages = usePostStore(state => state.totalPages);
  const setCurrentPage = usePostStore(state => state.setCurrentPage);
  const classes = useStyles();
  const handleChange = (ev: object, page: number) => {
    setCurrentPage(page);
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pr: 1, pl: 1, pt: 2, pb: 2 }}>
      <Typography sx={{ fontSize: 16, fontWeight: 500 }} color="text.secondary" component="div">
        TOTAL RESULTS {results}
      </Typography>
      <Pagination page={page} classes={{ ul: classes.ul }} onChange={handleChange} count={pages} />
    </Box>
  )
}