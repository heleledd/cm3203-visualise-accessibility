import Slider from '@mui/material/Slider'; 
// from 'Material UI': https://mui.com/material-ui/react-slider/

interface LikertSliderProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
}

export default function LikertSlider({ label }: LikertSliderProps) {
    
    return (
        <div className="likert-slider-container">
            <p>{label}</p>
            <Slider 
                defaultValue={3} 
                valueLabelDisplay="auto" 
                step={1} 
                marks 
                min={1} 
                max={5}
            />
        </div>
    )
}
    