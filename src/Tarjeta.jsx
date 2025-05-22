

export const Tarjeta = ({menu, precio}) => {
  return (
    <>
    <div className="w-3xs h-80 bg-gray-300 rounded-lg flex flex-col justify-center items-center gap-2 p-1.5">
        <div className="w-[90%] h-full bg-cyan-600 rounded-lg" >imagen</div>
        <h2>Menu: {menu}</h2>
        <h3>Precio: {precio}</h3>
    </div>
    </>
  )
}
