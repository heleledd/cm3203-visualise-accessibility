import Header from './Header.tsx'
import Footer from './Footer.tsx'
import CardiffMap from './interactive-map/CardiffMap.tsx'
import AmenityPanel from './interactive-map/AmenityPanel.tsx'
import 'maplibre-gl/dist/maplibre-gl.css';
import '../styles/app.css'

function App() {

  return (
    <>
        <Header />
        <div className="display-container">
            <CardiffMap />
            <AmenityPanel/>
        </div>
        <Footer />
    </>
  )
}

export default App