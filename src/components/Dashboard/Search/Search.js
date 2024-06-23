import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const Search=({Search,onSearchChange})=>{
    return (
      <div className="m-4 flex justify-start items-center gap-6 pl-11 pr-11 pb-4 pt-4 text-[#888] bg-[#1b1b1b] w-[80%] ml-auto mr-auto rounded-[3rem]">
     <SearchRoundedIcon sx={{ color: "var(--grey)", fontSize: "1.5rem" }} />
       <input className='bg-[#1b1b1b] w-full font-[Inter] text-[1.2rem] text-[#888] border-none focus:outline-none' placeholder='Search' type='text' value={Search} onChange={(e)=>onSearchChange(e)} />
      </div>
    );
}

export default Search;