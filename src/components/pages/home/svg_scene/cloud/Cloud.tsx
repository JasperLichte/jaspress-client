import React, {useState} from "react";

interface IProps {
    onClick: () => any,
    text: string,
    pos: {x: number, y: number,}
    scale: number,
    animationDelay: number,
}

const Cloud: React.FC<IProps> = ({onClick, text, pos, scale, animationDelay}) => {
    const [s, setScale] = useState(scale);
    const baseAnimationDuration = calculateRandomAnimationDuration();

    const colorShiftDuration = Math.floor(Math.random() * (18000 - 4000 + 1)) + 4000;

    return <g className="cloud" style={{animationDelay: `${animationDelay}ms, 0ms`}}>
        <g
            transform={`translate(${pos.x}, ${pos.y})`}
            onClick={onClick}
            onMouseEnter={() => setScale(scale)}
            onMouseLeave={() => setScale(scale)}
        >
            <circle cx={0} cy={0} r={30 * s} className="base" style={{
                animationDuration: animationDurationString(baseAnimationDuration, colorShiftDuration)
            }} />
            <circle cx={120 * s} cy={0} r={30 * s} className="base" style={{
                animationDuration: animationDurationString(baseAnimationDuration, colorShiftDuration)
            }} />
            <rect width={120 * s} height={60 * s} x={0} y={-30 * s} className="base" style={{
                animationDuration: animationDurationString(baseAnimationDuration, colorShiftDuration)
            }} />
            <circle cx={80 * s} cy={-30 * s} r={50 * s} className="big" style={{
                animationDuration: animationDurationString(baseAnimationDuration, colorShiftDuration)
            }} />
            <circle cx={25 * s} cy={-30 * s} r={30 * s} className="small" style={{
                animationDuration: animationDurationString(baseAnimationDuration, colorShiftDuration)
            }} />
            <text x={60 * s} y={-5 * s} dominantBaseline="middle" textAnchor="middle" style={{
                animationDuration: animationDurationString(baseAnimationDuration, colorShiftDuration)
            }}>{text}</text>
        </g>
    </g>
};

export default Cloud;

const animationDurationString = (duration: number, d2: number) => `${duration}ms, ${d2}ms`;

function calculateRandomAnimationDuration(): number {
    return getRandomInt(2000, 5000);
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
