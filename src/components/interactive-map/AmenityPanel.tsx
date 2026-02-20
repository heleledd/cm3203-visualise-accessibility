import { useState } from 'react'
import LikertSlider from './LikertSlider.tsx'

interface AmenityPanelProps {
    showStreetNetwork: boolean
    setShowStreetNetwork: (value: boolean) => void
    showGrid: boolean
    setShowGrid: (value: boolean) => void
}

export default function AmenityPanel(
    {
        showStreetNetwork, 
        setShowStreetNetwork,
        showGrid,
        setShowGrid
    }: AmenityPanelProps) 
    {
    const [weights, setWeights] = useState({
        hospital: 3,
        school: 3,
        park: 3
    })

    return (
        <div className="amenity-panel-container">
            <h3>Indicate how important proximity to these amentities is to you</h3>
            <div className="all-likert-container">
                <LikertSlider
                    label="GP"
                    value={weights.hospital}
                    onChange={(val) => setWeights(prev => ({ ...prev, hospital: val }))}
                />
                <LikertSlider
                    label="School"
                    value={weights.school}
                    onChange={(val) => setWeights(prev => ({ ...prev, school: val }))}
                />
                <LikertSlider
                    label="Hospital"
                    value={weights.park}
                    onChange={(val) => setWeights(prev => ({ ...prev, park: val }))}
                />
            </div>
            <div className="map-options-container">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label htmlFor="vehicle1">Show GP practices</label><br />
                
                <input 
                    type="checkbox" 
                    id="streetNetwork" 
                    checked={showStreetNetwork}
                    onChange={(e) => setShowStreetNetwork(e.target.checked)}
                />
                <label htmlFor="streetNetwork">Show street network</label><br />

                <input 
                    type="checkbox" 
                    id="grid" 
                    checked={showGrid}
                    onChange={(e) => setShowGrid(e.target.checked)}
                />
                <label htmlFor="grid">Show grid</label><br />
            </div>
        </div>
    )
}