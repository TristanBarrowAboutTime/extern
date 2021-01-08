import * as React from 'react';

type CircleGaugeProps = {
    value: number
    total?: number
    color?: string
    bgColor?: string
    showAsInverse?: boolean
    strokeWidth?: number

}

const CircleGauge = ({
    value,
    total = 100,
    strokeWidth = 10,
    color = '#85B554',
    showAsInverse = false,
    bgColor = 'rgba(133, 181, 84, 0.31)'
}: CircleGaugeProps) => {
    const binding = useCircleGauge({strokeWidth, value, total, showAsInverse});
    
    return (
        <svg viewBox={'0 0 100 100'} width='100%' height='100%'>
            <circle
                r={binding.rad}
                cx='50'
                cy='50'
                fill="transparent"
                stroke={bgColor}
                strokeWidth={strokeWidth}
            />
            <circle
                r={binding.rad}
                cx='50'
                cy='50'
                fill="transparent"
                stroke={color}
                transform={`rotate(${binding.rotation} 50 50)`}
                strokeDasharray={binding.cir}
                strokeDashoffset={binding.prog}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
            />
            <text x={binding.percentLocation} y='56' style={{fontSize: 30, fontWeight: 'bold', fill: '#525252'}}>
                {binding.percent}
            </text>
            <text x={binding.percentSignLocation} y='50' style={{fontSize: 17, fontFamily: 'Arial', fill:'#CCCCCC'}}>
                %
            </text>
            <text x={binding.ratioTextPos} y='75' 
                textLength={binding.ratioTextLength}
                lengthAdjust={'spacingAndGlyphs'}
                style={{
                    fontSize: 13, 
                    fontFamily: 'Arial', 
                    fill:'#CCCCCC', 
                    width: 100, 
                    textAlign: 'center'
                }}>
                {binding.ratio}
            </text>
        </svg>
    );
}

type UseCircleGaugeArgs = {
    strokeWidth: number
    value: number
    total: number
    showAsInverse: boolean

}

const useCircleGauge = (args: UseCircleGaugeArgs) => {
    const calculatedValue = args.value / args.total * 100;
    const value = (calculatedValue > 95 && calculatedValue < 100) ? calculatedValue * 0.97 : calculatedValue;
    const percent = `${Math.floor(calculatedValue)}`;
    const rad = 50 - (args.strokeWidth/2);
    const cir = 2 * Math.PI * rad;
    const prog = (100 - value) / 100 * cir;
    const ratioText = `${args.value}/${args.total}`;
    const ratio = `${Math.floor(args.value)}/${Math.floor(args.total)}`;
    const ratioTextLength = ratio.length * 7;
    const ratioTextPos = 50 - ratioTextLength/2;
    const rotation = args.showAsInverse ? 270 - (360 * (value / 100)) : 270;

    let percentLocation = 30;
    let percentSignLocation = 66;
    if (percent.length === 1) {
        percentLocation = 40;
        percentSignLocation = 58;
    }
    if (percent.length === 2) percentLocation = 30;
    if (percent.length === 3) {
        percentLocation = 16;
        percentSignLocation = 68
    }

    return {
        rad,
        cir,
        prog,
        percent,
        ratioText,
        ratioTextLength,
        ratioTextPos,
        percentLocation,
        percentSignLocation,
        ratio,
        rotation,
    }
}

export default CircleGauge; 

