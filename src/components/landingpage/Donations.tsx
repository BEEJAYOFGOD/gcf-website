import { useState, useEffect } from "react";

const Donations = () => {
    const [animationProgress, setAnimationProgress] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const duration = 500; // 2 seconds
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setAnimationProgress(eased);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }, []);

    const data = [
        { label: "Child care home", value: 40, color: "#FF6B9D" },
        { label: "Cleanliness program", value: 35, color: "#C084FC" },
        { label: "Helping the poor", value: 10, color: "#60A5FA" },
        { label: "Excursions", value: 10, color: "#34D399" },
        { label: "Feeding the poor", value: 5, color: "#FBBF24" },
    ];

    const total = data.reduce((sum, item) => sum + item.value, 0);
    const radius = 140;
    const centerX = 200;
    const centerY = 200;
    const strokeWidth = 80;

    let currentAngle = -90;
    const segments = data.map((item, index) => {
        const percentage = (item.value / total) * 100;
        const angle = (item.value / total) * 360 * animationProgress;
        const startAngle = currentAngle;
        const endAngle = currentAngle + angle;
        currentAngle = endAngle;

        // For hover effect, calculate expanded radius
        const hoverRadius = hoveredIndex === index ? radius + 10 : radius;
        const hoverStart = polarToCartesian(
            centerX,
            centerY,
            hoverRadius,
            startAngle
        );
        const hoverEnd = polarToCartesian(
            centerX,
            centerY,
            hoverRadius,
            endAngle
        );
        const largeArc = angle > 180 ? 1 : 0;

        const path =
            angle > 0
                ? `M ${centerX},${centerY} L ${hoverStart.x},${hoverStart.y} A ${hoverRadius},${hoverRadius} 0 ${largeArc} 1 ${hoverEnd.x},${hoverEnd.y} Z`
                : "";

        return {
            ...item,
            path,
            percentage,
            displayValue: Math.round(percentage * animationProgress),
        };
    });

    function polarToCartesian(
        cx: number,
        cy: number,
        r: number,
        angle: number
    ) {
        const rad = (angle * Math.PI) / 180;
        return {
            x: cx + r * Math.cos(rad),
            y: cy + r * Math.sin(rad),
        };
    }

    return (
        <div className="w-full min-h-screen bg-black flex items-center justify-center p-8">
            <div className="container mx-auto w-full flex md:flex-row flex-col  items-center justify-between">
                <div className="text-left mb-8">
                    <h1 className="text-white text-4xl font-bold mb-2">
                        How we spend your
                    </h1>
                    <h1 className="text-white text-4xl font-bold mb-4">
                        donations and where it goes
                    </h1>
                    <p className="text-gray-400 text-sm max-w-2xl">
                        We are committed to being fully transparent about how we
                        spend the donations we receive. Below is a breakdown of
                        where your contributions go.
                    </p>

                    <div className="space-y-4 grid md:grid-cols-3 grid-cols-2 gap-4">
                        {data.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                                        hoveredIndex === index
                                            ? "bg-gray-800 scale-105"
                                            : hoveredIndex === null
                                            ? "bg-transparent"
                                            : "bg-transparent opacity-50"
                                    }`}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div
                                        className="w-4 h-4 rounded-sm flex-shrink-0 transition-transform duration-300"
                                        style={{
                                            backgroundColor: item.color,
                                            transform:
                                                hoveredIndex === index
                                                    ? "scale(1.3)"
                                                    : "scale(1)",
                                        }}
                                    />
                                    <span className="text-white text-base">
                                        {item.value}% {item.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
                    {/* Pie Chart */}
                    <div className="relative">
                        <svg width="400" height="400" viewBox="0 0 400 400">
                            {segments.map((segment, index) => (
                                <path
                                    key={index}
                                    d={segment.path}
                                    fill={segment.color}
                                    opacity={
                                        hoveredIndex === null ||
                                        hoveredIndex === index
                                            ? animationProgress
                                            : animationProgress * 0.5
                                    }
                                    className="transition-all duration-300 cursor-pointer"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        filter:
                                            hoveredIndex === index
                                                ? "brightness(1.2)"
                                                : "brightness(1)",
                                    }}
                                />
                            ))}
                            <circle
                                cx={centerX}
                                cy={centerY}
                                r={radius - strokeWidth}
                                fill="black"
                            />

                            {/* Center text showing hovered percentage */}
                            {hoveredIndex !== null && (
                                <g>
                                    <text
                                        x={centerX}
                                        y={centerY - 10}
                                        textAnchor="middle"
                                        fill="white"
                                        fontSize="36"
                                        fontWeight="bold"
                                    >
                                        {data[hoveredIndex].value}%
                                    </text>
                                    <text
                                        x={centerX}
                                        y={centerY + 20}
                                        textAnchor="middle"
                                        fill="#9CA3AF"
                                        fontSize="10"
                                    >
                                        {data[hoveredIndex].label}
                                    </text>
                                </g>
                            )}
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donations;
