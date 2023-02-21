

function SearchBar() {
  return (
    <div>
      <input type="text" className="py-1 px-2 w-full bg-neutral-600 rounded-sm outline-none"/>
    </div>
  )
}








export default function () {
  return (
    <>
      <div className="flex flex-col p-4 w-64 h-full bg-neutral-800 rounded-md">
        <div>
          <SearchBar/>
        </div>
      </div>
    </>
  )
}