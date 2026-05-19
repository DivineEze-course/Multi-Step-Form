export default function({steps}){
return(
    <>
    <div className="md:hidden bg-[url(bg-sidebar-mobile.svg)] bg-no-repeat bg-cover relative pt-8 pb-20 justify-center flex ">
        <div className="steps flex gap-4">
    <div className={`step rounded-full  p-1 ps-3 pe-3 ${steps === 1 ? 'bg-blue-900 text-white' : 'bg-white'}`}>1</div>
    <div className={`step rounded-full  p-1 ps-3 pe-3 ${steps === 2 ? 'bg-blue-900 text-white' : 'bg-white'}`}>2</div>
    <div className={`step rounded-full  p-1 ps-3 pe-3 ${steps === 3 ? 'bg-blue-900 text-white' : 'bg-white'}`}>3</div>
    <div className={`step rounded-full  p-1 ps-3 pe-3 ${steps === 4 ? 'bg-blue-900 text-white' : 'bg-white'}`}>4</div>
    </div>
    </div>

    
        <div className="hidden lg:block bg-[url(bg-sidebar-desktop.svg)] bg-no-repeat bg-cover rounded-lg w-1/3 h-full relative">
        <div className="steps flex flex-col gap-6 absolute top-8 left-10">
            <div>
                <div className="flex items-center gap-4"><p  className={`step rounded-full border-white border font-bold p-1 ps-3 pe-3 ${steps === 1 ? 'bg-blue-300 border' : 'text-white'}`}>1</p> <p className="text-white font-bold">YOUR INFO</p></div>
            </div>
             <div>
                <div className="flex items-center gap-4"><p  className={`step rounded-full border-white border font-bold p-1 ps-3 pe-3 ${steps === 2 ? 'bg-blue-300 border ' : 'text-white'}`}>2</p> <p className="text-white font-bold">SELECT PLAN</p></div>
            </div>
             <div>
                <div className="flex items-center gap-4"><p  className={`step rounded-full border-white border font-bold p-1 ps-3 pe-3 ${steps === 3 ? 'bg-blue-300 border ' : 'text-white'}`}>3</p> <p className="text-white font-bold">ADD-ONS</p></div>
            </div>
             <div>
                <div className="flex items-center gap-4"><p  className={`step rounded-full border-white border font-bold p-1 ps-3 pe-3 ${steps === 4 ? 'bg-blue-300 border ' : 'text-white'}`}>4</p> <p className="text-white font-bold">SUMMARY</p></div>
            </div>
            </div>
    </div>
    </>
)
    
}