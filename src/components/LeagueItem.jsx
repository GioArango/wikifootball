
export const LeagueItem = ({ name, type, logo, flagCountry }) => {
    console.log(name, type, logo, flagCountry);
    return (
        <div className="grid bg-stone-50 w-10/12 justify-items-center rounded m-2 md:h-full shadow-lg">
            
                <p className='text-xl text-center self-start mt-2'>
                    {name}
                </p>
                <div>
                    <img className="justify-items-center sm:mb-3" src={logo} width='160'/>
                </div>
                    <button className="bg-blue-200 mb-3 w-10/12 h-10 rounded text-white text-xl font-semibold shadow-lg hover:bg-blue-500 hover:transition-colors hover:translate-y-0.5 self-end">
                        View Teams
                    </button>
        </div>
    )
}
