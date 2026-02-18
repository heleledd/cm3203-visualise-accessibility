import { useState } from 'react'
import LikertSlider from './LikertSlider.tsx'


export default function AmenityPanel() {
    const [weights, setWeights] = useState({
        hospital: 3,
        school: 3,
        park: 3
    })

    return (
        <div className="amenity-panel-container">
            <h3>Indicate how important proximity to these amentities is to you</h3>
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
    )
}