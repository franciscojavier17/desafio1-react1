import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
      <Header title="Galería de Imágenes con React"></Header>
      <div className="images-container">
        <Card cardTitle="Foto N°1" cardDesc="Descripción Genérica Foto1" imgUrl="https://picsum.photos/200" textBtn="Click Aquí"></Card>
        <Card cardTitle="Foto N°2" cardDesc="Descripción Genérica Foto2" imgUrl="https://picsum.photos/190" textBtn="Click Aquí"></Card>
        <Card cardTitle="Foto N°3" cardDesc="Descripción Genérica Foto3" imgUrl="https://picsum.photos/195" textBtn="Click Aquí"></Card>
        <Card cardTitle="Foto N°4" cardDesc="Descripción Genérica Foto4" imgUrl="https://picsum.photos/205" textBtn="Click Aquí"></Card>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
