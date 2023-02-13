import React from "react";
const Search = ()=>{
    return (   
<form class="flex items-center">   
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative items-center pr-2 mr-4 w-100">
        <div class="flex absolute inset-y-0 left-4 pl-3 pointer-events-none">
            <svg class="px- 6 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input class="px-20 pr-2 mr-4 bg-white-50 border-gray-300 rounded-md xl:max-w-[270%]" type="text" placeholder="Search by coin..."></input>
    </div>
</form>
    );
};
export default Search;