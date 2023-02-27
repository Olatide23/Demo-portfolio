function Header({logo}) {
  return (
    <div className="Header sm:fixed sm:top-0 sm:left-0 sm:right-0 m-2 md:flex md:flex-row md:justify-between
     md:align-center bg-gray-100 rounded-md
      shadow-md">
      <div className=" px-3 md:py-5 md:px-4 py-2  flex flex-row justify-between align-center">
        <h3 className=" font-bold text-lime-800 text-lg md:text-xl">{logo}</h3>
         <div className="md:hidden">
          <div className=" bg-lime-800 w-6 h-1 m-1"></div>
          <div className=" bg-lime-800 w-6 h-1 m-1"></div>
          <div className=" bg-lime-800 w-6 h-1 m-1"></div>
        </div>
      </div>
     <ul className=" mt-1 p-2 hidden md:flex md:flex-row md:justify-between
     md:align-center">
        <li className="mx-3 font-semibold text-md text-lime-800
        active:bg-lime-800 active:text-white py-1 px-2 active:rounded-sm">Home</li>
        <li className="mx-3 font-semibold text-md text-lime-800
        active:bg-lime-800 active:text-white py-1 px-2 active:rounded-sm">About</li>
        <li className="mx-3 font-semibold text-md text-lime-800
        active:bg-lime-800 active:text-white py-1 px-2 active:rounded-sm">Portfolio</li>
         <li className="mx-3 font-semibold text-md text-lime-800
        active:bg-lime-800 active:text-white py-1 px-2 active:rounded-sm">Contact</li>
     </ul>
    </div>
  );
}
export default Header;