import React from 'react';

import ChartskiBar from './ChartskiBar';
import '../style/Chartski.css';

const Chartski = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartskiBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>)}
        </div>
    )
};

export default Chartski;
