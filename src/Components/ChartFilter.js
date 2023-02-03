import React from "react";
const ChartFilter = () => {
    return (
        <div class="pl-100 justify-items-start">
            <div>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-4 border-gray-400 rounded shadow">1D</button>
                <button class="bg-white hover:border-4 border-blue-500/100 text-gray-800 font-semibold py-2 px-4 border-4 border-gray-400 rounded shadow">1W</button>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-4 border-gray-400 rounded shadow">6M</button>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-4 border-gray-400 rounded shadow">1Y</button>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-4 border-gray-400 rounded shadow">...</button>
            </div>
            <div class="">
                <select>
                    <option value="Cryptocurrency">Cryptocurrency</option>
                    <option value="Bitcoin">Bitcoin</option>
                </select>
            </div>
            <div class="">
                <select>
                    <option value="Chart type">Chart type</option>
                    <option value="Line">Line</option>
                    <option value="Bar chart vertical">Bar chart vertical</option>
                </select>
            </div>
        </div>


    );

}
export default ChartFilter;