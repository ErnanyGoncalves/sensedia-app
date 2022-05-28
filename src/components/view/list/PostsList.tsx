import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Footer } from '../../footer/Footer';
import usePostStore from '../../../hooks/usePostStore';
import { Post } from '../../../types/Post';
import { purple } from '@mui/material/colors';
import { Posts } from '../../../types/Posts';


export const PostsList = ({ posts }: Posts) => {
    const orderBy = usePostStore(state => state.orderBy);
    const setOrderBy = usePostStore(state => state.setOrderBy);

    const checkOrderBy = (orderBy:string) =>{
        return orderBy === "" ? "asc" : orderBy === "asc" ? "desc" : "asc";
    }

    const orderByIcon = (orderBy: string) =>{
        if(orderBy === "") return <UnfoldMoreIcon />
        if(orderBy === "asc") return <ExpandLessIcon />
        if(orderBy ==="desc") return <ExpandMoreIcon />
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell size="small" align='center'>POSTID</TableCell>
                            <TableCell size="small">TITLE <Button onClick={() => setOrderBy(checkOrderBy(orderBy))} variant="text" sx={{ color: purple[900], fontSize: 16, borderRadius: 50, p: 1, width: 30 }}>{orderByIcon(orderBy)}</Button></TableCell>
                            <TableCell size="small">AUTHOR</TableCell>
                            <TableCell size="small">BODY</TableCell>
                            <TableCell size="small">CREATION DATE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map(({ id, title, body }: Post) => {
                            return (
                                <TableRow key={id}>
                                    <TableCell sx={{ maxWidth: 50 }} align='center'>
                                        {id}
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={{ fontWeight: 500, maxWidth: 400, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</Typography></TableCell>
                                    <TableCell sx={{ minWidth: 150 }}>Ernany Gonçalves</TableCell>
                                    <TableCell>
                                        <Typography sx={{ maxWidth: 300, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{body}</Typography>
                                    </TableCell>

                                    <TableCell sx={{ minWidth: 150 }}>{new Date().toLocaleString()}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Footer />
        </Paper>
    )
}