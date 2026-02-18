import CardiffMap from './CardiffMap.tsx'
import AmenityPanel from './AmenityPanel.tsx'
import 'maplibre-gl/dist/maplibre-gl.css';
import '../styles/main.css'

export default function Main() {
    return (
        <main>
            <p>main component here</p>
            <div className="display-container">
                <CardiffMap />
                <AmenityPanel/>
            </div>
        </main>
    )
}