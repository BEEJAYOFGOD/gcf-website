import React, { type ReactElement, type CSSProperties } from "react";

interface InfiniteScrollProps {
    speed?: number;
    itemCount?: number;
    direction?: "horizontal" | "vertical";
    translateMode?: "items" | "track";
    reverse?: boolean;
    paused?: boolean;
    renderItem?: (index: number) => ReactElement;
    className?: string;
    containerStyle?: CSSProperties;
}

export const InfiniteScroll = ({
    speed = 10,
    itemCount = 10,
    direction = "horizontal",
    translateMode = "items",
    reverse = false,
    paused = false,
    renderItem,
    className = "",
    containerStyle = {},
}: InfiniteScrollProps) => {
    const renderStamp = Date.now();

    const defaultRenderItem = (index: number): ReactElement => (
        <div className="flex items-center justify-center h-full w-full bg-gray-200 rounded-lg border border-gray-400 text-2xl md:text-4xl font-mono">
            {index}
        </div>
    );

    const itemRenderer = renderItem || defaultRenderItem;

    return (
        <div
            className={`relative overflow-hidden ${className}`}
            style={
                {
                    ...containerStyle,
                    containerType: "size",
                } as CSSProperties
            }
        >
            <style>{`
        @keyframes trackTranslateAnim {
          to {
            transform: translate(var(--dest-x, 0), var(--dest-y, 0));
          }
        }

        @keyframes itemSlideAnim {
          100% {
            transform: translate(var(--dest-x), var(--dest-y));
          }
        }

        .scroll-track-anim {
          animation: trackTranslateAnim calc(var(--speed) * 1s) infinite linear;
        }

        .scroll-track-anim.anim-paused,
        .scroll-track-anim.anim-paused .scroll-item-anim {
          animation-play-state: paused !important;
        }

        .scroll-track-anim.anim-reverse {
          animation-direction: reverse !important;
        }

        .scroll-item-anim {
          animation: itemSlideAnim var(--duration) var(--delay) infinite linear;
          animation-play-state: running;
        }

        .scroll-item-anim.anim-paused {
          animation-play-state: paused !important;
        }
      `}</style>

            <ul
                className={`flex p-0 m-0 list-none scroll-track-anim ${
                    paused ? "anim-paused" : ""
                } ${reverse ? "anim-reverse" : ""}`}
                style={
                    {
                        flexDirection:
                            direction === "vertical" ? "column" : "row",
                        height:
                            direction === "horizontal" ? "100%" : "fit-content",
                        width:
                            direction === "horizontal" ? "fit-content" : "100%",
                        alignItems:
                            direction === "horizontal" ? "center" : "stretch",
                        gap: translateMode === "items" ? 0 : "1rem",
                        ["--speed" as string]: speed,
                        ...(translateMode === "track" &&
                            direction === "horizontal" && {
                                ["--dest-x" as string]: "-100%",
                            }),
                        ...(translateMode === "track" &&
                            direction === "vertical" && {
                                ["--dest-y" as string]: "-100%",
                            }),
                    } as CSSProperties
                }
            >
                {Array(itemCount)
                    .fill(0)
                    .map((_, index) => (
                        <li
                            key={`item-${renderStamp}-${index}`}
                            className={`flex-shrink-0 ${
                                translateMode === "items"
                                    ? "scroll-item-anim"
                                    : ""
                            } ${paused ? "anim-paused" : ""}`}
                            style={
                                {
                                    height:
                                        direction === "horizontal"
                                            ? "80%"
                                            : "auto",
                                    width:
                                        direction === "vertical"
                                            ? "100%"
                                            : "auto",
                                    aspectRatio: "4 / 3",
                                    ["--index" as string]: index,
                                    ...(translateMode === "items" && {
                                        ["--duration" as string]: `${speed}s`,
                                        ["--delay" as string]: `calc((${speed}s / ${itemCount}) * (${index} - (${itemCount} * 0.5)) - (${itemCount} * 0.5s))`,
                                        ...(direction === "horizontal" && {
                                            ["--dest-x" as string]: `calc((${index} + 1) * -100%)`,
                                            ["--dest-y" as string]: 0,
                                            transform: `translate(calc((${itemCount} - ${index}) * 100%), 0)`,
                                        }),
                                        ...(direction === "vertical" && {
                                            ["--dest-x" as string]: 0,
                                            ["--dest-y" as string]: `calc((${index} + 1) * -100%)`,
                                            transform: `translate(0, calc((${itemCount} - ${index}) * 100%))`,
                                        }),
                                    }),
                                } as CSSProperties
                            }
                        >
                            {itemRenderer(index)}
                        </li>
                    ))}
            </ul>
        </div>
    );
};
