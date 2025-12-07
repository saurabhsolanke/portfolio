import React from 'react';

const LineArtBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <style jsx>{`
                @keyframes lineShift1 {
                    0%, 100% { transform: translateX(0) translateY(0); }
                    50% { transform: translateX(20px) translateY(-20px); }
                }
                @keyframes lineShift2 {
                    0%, 100% { transform: translateX(0) translateY(0); }
                    50% { transform: translateX(-20px) translateY(20px); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.3; }
                }
                @keyframes pulseDark {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.15; }
                }
            `}</style>
            <div
                className="absolute inset-0 opacity-20 dark:opacity-10"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 1rem,
                        rgba(128, 128, 128, 0.3) 1rem,
                        rgba(128, 128, 128, 0.3) calc(1rem + 1px)
                    )`,
                    animation: 'lineShift1 20s ease-in-out infinite, pulse 8s ease-in-out infinite'
                }}
            />
            <div
                className="absolute inset-0 opacity-20 dark:opacity-10"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 1rem,
                        rgba(128, 128, 128, 0.3) 1rem,
                        rgba(128, 128, 128, 0.3) calc(1rem + 1px)
                    )`,
                    animation: 'lineShift2 20s ease-in-out infinite, pulse 8s ease-in-out infinite 4s'
                }}
            />
        </div>
    );
};

export default LineArtBackground;
