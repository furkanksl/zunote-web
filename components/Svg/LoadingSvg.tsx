const LoadingSvgComponent = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ background: "transparent", display: "block", width: "40px", height: "40px", margin: "-8px 14px" }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
    >
        <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#fff"
            strokeWidth="5"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="0.5681818181818182s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
            ></animateTransform>
        </circle>
    </svg>
);

export default LoadingSvgComponent;
