import React from "react";
const Search = ()=>{
    return (   
<div class='max-w-md mx-auto'>
    <div class="relative flex items-center w-full rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="py-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search by coin" /> 
    </div>
</div>
    );
};
export default Search;