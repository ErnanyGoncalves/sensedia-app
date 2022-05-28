import { ViewComfy } from '@mui/icons-material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { purple } from '@mui/material/colors';
import { useState } from 'react';
import styled from 'styled-components';
import usePostStore from '../../hooks/usePostStore';


const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
`;

export const Search = () => {

    const [text,setText] = useState("");

    const viewMode = usePostStore(state => state.viewMode);
    const searchText = usePostStore(state => state.searchText);
    const setSearchText = usePostStore(state => state.setSearchText);
    const setCurrentPage = usePostStore(state => state.setCurrentPage);
    const setOrderBy = usePostStore(state => state.setOrderBy);
    const setViewMode = usePostStore(state => state.setViewMode);

    const manageSubmit = (ev: any) => {
        ev.preventDefault();
        
        setSearchText(text);
        setText("");
    };
    
    const manageClear = () => {     
        setText("");
        setSearchText("");
        setOrderBy("");
    }
    
    const manageViewSelection = ({ target }: any) => {
        setViewMode(target.value);
        setCurrentPage(1);
    }

    return (
        <form noValidate onSubmit={manageSubmit}>
            <SearchWrapper>
                <FormControl  id="filled-basic" sx={{ minWidth: 850, height:"100%" }}>
                    <TextField id="title" value={text} onChange={({target}:any)=>setText(target.value)} label="Type for search..." variant="filled" />
                </FormControl>
                <FormControl variant="filled" sx={{ minWidth: 240 }}>
                    <InputLabel id="viewMode">View mode</InputLabel>
                    <Select
                        labelId="viewModel"
                        id="viewMode"
                        value={viewMode}
                        onChange={manageViewSelection}
                    >
                        <MenuItem value={"list"}><FormatListBulletedIcon sx={{ mr: 1 }} /> List View</MenuItem>
                        <MenuItem value={"card"}><ViewComfy sx={{ mr: 1 }} /> Card View</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" sx={{ backgroundColor: purple[900], fontSize: 16, borderRadius: 50, p: 2, width: 150 }}><SearchIcon sx={{ mr: 1 }} /> SEARCH</Button>
                <Button type="button" onClick={manageClear} variant="text" sx={{ color: purple[900], fontSize: 16, borderRadius: 50, p: 2, width: 130 }}>CLEAR</Button>
            </SearchWrapper>
        </form>
    )
}