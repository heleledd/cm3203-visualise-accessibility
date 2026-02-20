import Header from './Header.tsx'
import Footer from './Footer.tsx'
import { useState } from 'react'
import CardiffMap from './interactive-map/CardiffMap.tsx'
import AmenityPanel from './interactive-map/AmenityPanel.tsx'
import 'maplibre-gl/dist/maplibre-gl.css';
import '../styles/app.css'

function App() {
  const [showStreetNetwork, setShowStreetNetwork] = useState(false)
  const [showGrid, setShowGrid] = useState(false)
  
  return (
    <>
        <Header />
        <div className="display-container">
            <CardiffMap 
              showStreetNetwork={showStreetNetwork}
              showGrid={showGrid}
            />
            <AmenityPanel 
              showStreetNetwork={showStreetNetwork} 
              setShowStreetNetwork={setShowStreetNetwork}
              showGrid={showGrid}
              setShowGrid={setShowGrid}
            />
        </div>
        <Footer />
    </>
  )
}

export default App