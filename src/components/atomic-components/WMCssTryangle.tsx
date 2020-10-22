import React from 'react';

type WMCssTryangleProps = {
    className?: string
    onClick?: () => void
    color?: string
    size?: number
}

export const Up = ({
    className = '',
    onClick,
    color = 'black',
    size = 5,
}: WMCssTryangleProps) => {
    return (
        <div className={className} onClick={onClick}>
            <div style={{
                width: 0,
                height: 0,
                borderLeft: `${size}px solid transparent`,
                borderRight: `${size}px solid transparent`,
                borderBottom: `${size}px solid ${color}`,
            }}/>
        </div>
    );
}

export const Down = ({
    className = '',
    onClick,
    color = 'black',
    size = 5,
}: WMCssTryangleProps) => {
    return (
        <div className={className} onClick={onClick}>
            <div style={{
                width: 0,
                height: 0,
                borderLeft: `${size}px solid transparent`,
                borderRight: `${size}px solid transparent`,
                borderTop: `${size}px solid ${color}`,
            }}/>
        </div>
    );
}

export const Left = ({
    className = '',
    onClick,
    color = 'black',
    size = 5,
}: WMCssTryangleProps) => {
    return (
        <div className={className} onClick={onClick}>
            <div style={{
                width: 0,
                height: 0,
                borderTop: `${size}px solid transparent`,
                borderBottom: `${size}px solid transparent`,
                borderRight: `${size}px solid ${color}`,
            }}/>
        </div>
    );
}

export const Right = ({
    className = '',
    onClick,
    color = 'black',
    size = 5,
}: WMCssTryangleProps) => {
    return (
        <div className={className} onClick={onClick}>
            <div style={{
                width: 0,
                height: 0,
                borderTop: `${size}px solid transparent`,
                borderBottom: `${size}px solid transparent`,
                borderLeft: `${size}px solid ${color}`,
            }}/>
        </div>
    );
}