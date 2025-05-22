import useGoogleSheets from "use-google-sheets";
import { Tarjeta } from "./Tarjeta";

let apiKey = "AIzaSyCfcv2Y8KIuuRshcTVa61tmgSCFNXIv5Lg";
let idSheets = "1y1TkiL-nNQQeFV5NSOQNAFQyM7K41iT5rfY_PsJHn5M";
let datosPrecios;

function App() {
  const { data, loading, error } = useGoogleSheets({
    apiKey: apiKey,
    sheetId: idSheets,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  data.map((elemento) => {
    datosPrecios = elemento.data;
    console.log(datosPrecios);
  });

  return (
    <>
      <h1 className="bg-amber-800">hola mundo precios</h1>
      <br />

      <div className="flex flex-wrap justify-center gap-2.5">
        {datosPrecios.map((elemento) => {
        return <Tarjeta menu={elemento.producto} precio={elemento.precio} />;
      })}
      </div>
 
    </>
  );
}

export default App;
