import React, { memo } from 'react';

export const IconInstagram = memo(() => {
    return (
        <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect
                width="96"
                height="96"
                rx="48"
                fill="url(#paint0_radial_1_11321)"
            />
            <rect
                width="96"
                height="96"
                rx="48"
                fill="url(#paint1_radial_1_11321)"
            />
            <rect
                width="96"
                height="96"
                rx="48"
                fill="url(#paint2_radial_1_11321)"
            />
            <rect
                width="96"
                height="96"
                rx="48"
                fill="url(#pattern0_1_11321)"
            />
            <defs>
                <pattern
                    id="pattern0_1_11321"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image0_1_11321"
                        transform="translate(0.291667 0.291667) scale(0.00434028)"
                    />
                </pattern>
                <radialGradient
                    id="paint0_radial_1_11321"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(34.2857 72) rotate(-55.3758) scale(87.4958)"
                >
                    <stop stopColor="#B13589" />
                    <stop offset="0.79309" stopColor="#C62F94" />
                    <stop offset="1" stopColor="#8A3AC8" />
                </radialGradient>
                <radialGradient
                    id="paint1_radial_1_11321"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(30.8571 99.4286) rotate(-65.1363) scale(77.466)"
                >
                    <stop stopColor="#E0E8B7" />
                    <stop offset="0.444662" stopColor="#FB8A2E" />
                    <stop offset="0.71474" stopColor="#E2425C" />
                    <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                    id="paint2_radial_1_11321"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-5.14285 3.42857) rotate(-8.1301) scale(133.34 28.5201)"
                >
                    <stop offset="0.156701" stopColor="#406ADC" />
                    <stop offset="0.467799" stopColor="#6A45BE" />
                    <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
                </radialGradient>
                <image
                    id="image0_1_11321"
                    width="96"
                    height="96"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
});
