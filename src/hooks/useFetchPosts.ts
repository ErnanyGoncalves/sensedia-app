import axios from "axios";
import { useEffect, useState } from "react";
import usePostStore from "./usePostStore";

export const useFetchPosts = (currentPage: number, viewMode: string, searchText: string, orderBy: string) => {
    const setTotalPages = usePostStore(state=>state.setTotalPages);
    const setTotalResults = usePostStore(state=>state.setTotalResults);

    const [postsList, setPostsList] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const limit = viewMode === "list" ? 10 : 8;
        const orderByTitle = orderBy ? `&_sort=title&_order=${orderBy}` : ``;
        const url = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}&title_like=${searchText}${orderByTitle}`;
        setLoading(true);
        axios.get(url)
            .then(({ data, headers }: any) => {            
                setTotalPages(Math.ceil(headers["x-total-count"] / limit));
                setTotalResults(headers["x-total-count"]);
                setPostsList(data);
                setLoading(false);
            })
            .catch((err: any) => {
                setError(err);
                setLoading(false);
            });
    }, [currentPage, viewMode, searchText, orderBy]);

    return { postsList, error, loading }
}