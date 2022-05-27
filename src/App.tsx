
import { Container } from '@mui/material';
import { useState } from 'react';
import './App.scss';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Search } from './components/search/Search';
import { CardSensedia } from './components/view/card/CardSensedia';
import { CardsList } from './components/view/card/CardsList';
import { PostsList } from './components/view/list/PostsList';
import { Loading } from './components/view/Loading';
import { useFetchPosts } from './hooks/useFetchPosts';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("card");
  const [orderBy, setOrderBy] = useState("asc");
  const [searchText, setSearchText] = useState("");

  const { postsList, loading, error, totalPages } = useFetchPosts(currentPage, viewMode, searchText, orderBy);

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        {/* <CardSensedia /> */}
        {/* <Search /> */}

        {/* <Footer /> */}
        {!loading && postsList && <>
          {viewMode === "list" ? <PostsList posts={postsList} /> : <CardsList posts={postsList} />}
        </>}
        {loading && <Loading />}
      </Container>
    </>
  )
}

export default App
