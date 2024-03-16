

const MyDashboard = () => {
    return (
        <div className="w-full h-full">
            <div className="flex justify-between items-center px-10">
                <div>
                    <h1 className="text-xl font-bold pb-4">Hello, Sara</h1>
                    <data className="text-slate-500 text-base font-medium ">16 March  2024</data>
                </div>
                <div className="space-x-4">
                    <input className="border-2 border-slate-700 text-xl font-semibold py-2 rounded-full text-center" type="text " placeholder="Search" />
                    <button className="btn border-2 px-4 py-2 rounded-2xl text-xl font-semibold border-stone-700 text-white bg-blue-600 hover:text-blue-600 hover:bg-white ">+ Add New Course </button>

                </div>
            </div>
        </div>
    );
};

export default MyDashboard;