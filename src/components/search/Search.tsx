import { ViewComfy } from '@mui/icons-material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import styled from 'styled-components';


const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
`;


export const Search = () => {
    return (
        <form>
            <SearchWrapper>
                <TextField sx={{ minWidth: 850 }} id="filled-basic" label="Type for search..." variant="filled" />
                <FormControl variant="filled" sx={{ minWidth: 240 }}>
                    <InputLabel id="viewMode">View mode</InputLabel>
                    <Select
                        labelId="viewModel"
                        id="viewMode"
                    // value={viewMode}
                    // onChange={handleChange}
                    >
                        <MenuItem value={"list"}><FormatListBulletedIcon sx={{ mr: 1 }} /> List View</MenuItem>
                        <MenuItem value={"card"}><ViewComfy sx={{ mr: 1 }} /> Card View</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" sx={{ backgroundColor: "#5C21AA", fontSize: 16, borderRadius: 50, p: 2, width: 150 }}><SearchIcon sx={{ mr: 1 }} /> SEARCH</Button>
                <Button variant="text" sx={{ color: "#5C21AA", fontSize: 16, borderRadius: 50, p: 2, width: 130 }}>CLEAR</Button>
            </SearchWrapper>
        </form>
    )
}