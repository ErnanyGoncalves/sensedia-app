export interface State{
    currentPage:number;
    totalPages:number;
    totalResults:number;
    viewMode:string;
    searchText:string;
    orderBy:string;
    setCurrentPage:(currentPage:number)=>void;
    setTotalPages:(totalPages:number)=>void;
    setTotalResults:(totalResults:number)=>void;
    setViewMode:(viewMode:string)=>void;
    setSearchText:(searchText:string)=>void;
    setOrderBy:(orderBy:string)=>void;
}