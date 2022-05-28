import create from "zustand";
import { State } from "../types/State";

const usePostStore = create<State>((set)=>({
    currentPage: 1,
    totalPages: 0,
    totalResults: 0,
    viewMode: "list",
    searchText: "",
    orderBy: "",
    setCurrentPage: (currentPage:number) => set(state=>({currentPage:currentPage})),
    setTotalPages: (totalPages:number) => set(state=>({totalPages:totalPages})),
    setTotalResults: (totalResults:number) => set(state=>({totalResults:totalResults})),
    setViewMode: (viewMode:string) => set(state=>({viewMode:viewMode})),
    setSearchText: (searchText:string) => set(state=>({searchText:searchText})),
    setOrderBy: (orderBy:string) => set(state=>({orderBy:orderBy})),
  }));

  export default usePostStore;