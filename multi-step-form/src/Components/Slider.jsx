export default function({steps}){
return(
    <div className="bg-[url(bg-sidebar-mobile.svg)] bg-no-repeat bg-cover relative pt-8 pb-20 justify-center flex">
        <div className="steps flex gap-4">
    <div className={`step rounded-full  p-1 ps-3 pe-3 ${steps === 1 ? 'bg-blue-900 text-white' : 'bg-white'}`}>1</div>
    <div className={`step rounded-full  p-1 ps-3 pe-3 ${steps === 2 ? 'bg-blue-900 text-white' : 'bg-white'}`}>2</div>
    <div className={`step rounded-full  p-1 ps-3 pe-3 ${steps === 3 ? 'bg-blue-900 text-white' : 'bg-white'}`}>3</div>
    <div className={`step rounded-full  p-1 ps-3 pe-3 ${steps === 4 ? 'bg-blue-900 text-white' : 'bg-white'}`}>4</div>
    </div>
    </div>
)
    
}