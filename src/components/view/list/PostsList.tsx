import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Footer } from '../../footer/Footer';

export const PostsList = ({ posts }) => {

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>POSTID</TableCell>
                            <TableCell>TITLE</TableCell>
                            <TableCell>AUTHOR</TableCell>
                            <TableCell>BODY</TableCell>
                            <TableCell>CREATION DATE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map(({id,title,body}) => {
                            return (
                                <TableRow>
                                    <TableCell>{id}</TableCell>
                                    <TableCell>{title}</TableCell>
                                    <TableCell>Ernany Gonçalves</TableCell>
                                    <TableCell>{body}</TableCell>
                                    <TableCell>{new Date().toLocaleString()}</TableCell>
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