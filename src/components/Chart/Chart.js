import React from 'react';

import CharBar from './ChartBar.js';
import './Chart.css';

const Char = props => {
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValue);

    return (<div className="chart">
        {props.dataPoints.map(dataPoint => ( 
        <CharBar 
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
        />
        ))}
    </div>
    );
};
export default Char;