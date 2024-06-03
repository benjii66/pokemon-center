import React from 'react';

export default function HeightSlider({ label, min, max, step, value, onChange, rotation }) {
    return (
        <div style={{ marginBottom: '10px' }}>
            <label>
                {label}:
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => onChange(parseFloat(e.target.value))}
                />
            </label>
            <span>{value.toFixed(2)}</span>
        </div>
    );
}
