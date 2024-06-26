import { FaEye } from "react-icons/fa";
import DataLineChart from "./DataLineChart";
import DataBarChart from "./DataBarChart";


const DashboardHome = () => {
    return (
        <div className="space-y-7">
            <div className="grid grid-cols-4 items-center gap-10">
                <div className="bg-white border p-7 space-y-4 shadow-lg">
                    <FaEye className="text-purple-700 text-2xl"/>
                    <h1 className="text-xl font-semibold">$300.5K</h1>
                    <div className="flex justify-between">
                    <p className="text-xs">Total View</p>
                    <p className="text-green-500 text-xs text-end">3.4%</p>
                    </div>
                </div>
                <div className="bg-white border p-7 space-y-4 shadow-lg">
                    <FaEye className="text-purple-700 text-2xl"/>
                    <h1 className="text-xl font-semibold">$300.5K</h1>
                    <div className="flex justify-between">
                    <p className="text-xs">Total View</p>
                    <p className="text-green-500 text-xs text-end">3.4%</p>
                    </div>
                </div>
                <div className="bg-white border p-7 space-y-4 shadow-lg">
                    <FaEye className="text-purple-700 text-2xl"/>
                    <h1 className="text-xl font-semibold">$300.5K</h1>
                    <div className="flex justify-between">
                    <p className="text-xs">Total View</p>
                    <p className="text-green-500 text-xs text-end">3.4%</p>
                    </div>
                </div>
                <div className="bg-white border p-7 space-y-4 shadow-lg">
                    <FaEye className="text-purple-700 text-2xl"/>
                    <h1 className="text-xl font-semibold">$300.5K</h1>
                    <div className="flex justify-between">
                    <p className="text-xs">Total View</p>
                    <p className="text-green-500 text-xs text-end">3.4%</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-7">
                <div className="col-span-1"><DataLineChart/></div>
                <div className="col-span-1"><DataBarChart/></div>
            </div>
        </div>
    );
};

export default DashboardHome;