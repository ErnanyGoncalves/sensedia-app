import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchPosts = (currentPage: number | string, viewMode: string, searchText: string, orderBy: string) => {
    const [postsList, setPostsList] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const limit = viewMode === "list" ? 10 : 8;
        const url = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}&title_like=${searchText}&_sort=title&_order=${orderBy}`;
        setLoading(true);
        axios.get(url)
            .then(({ data, headers }: any) => {
                setTotalPages(Math.ceil(headers["x-total-count"] / limit));
                setTotalPages(headers["x-total-count"]);
                setPostsList(data);
                setLoading(false);
            })
            .catch((err: any) => {
                setError(err);
                setLoading(false);
            });
    }, [currentPage, viewMode, searchText, orderBy]);

    return { postsList, error, loading, totalPages, totalResults }
}