
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import './App.scss';
import { Header } from './components/header/Header';
import { Search } from './components/search/Search';
import { CardsList } from './components/view/card/CardsList';
import { PostsList } from './components/view/list/PostsList';
import { Loading } from './components/view/Loading';
import { useFetchPosts } from './hooks/useFetchPosts';
import usePostStore from "./hooks/usePostStore";

function App() {

  const currentPage = usePostStore(state=>state.currentPage);
  const viewMode = usePostStore(state=>state.viewMode);
  const searchText = usePostStore(state=>state.searchText);
  const orderBy = usePostStore(state=>state.orderBy);
  
  const { postsList, loading, error } = useFetchPosts(currentPage, viewMode, searchText, orderBy);
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Box sx={{mb:5}}>
          <Search />
        </Box>
        {!loading && postsList && <>
          {viewMode === "list" ? <PostsList posts={postsList} /> : <CardsList posts={postsList} />}
        </>}
        {loading && <Loading />}
      </Container>
    </>
  )
}

export default App
