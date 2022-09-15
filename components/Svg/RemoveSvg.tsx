import SvgComponentProp from "../../src/models/types/SvgComponentProp";

const RemoveSvgComponent = (props: SvgComponentProp) => (
    <svg onClick={props.function} width={28} height={28} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m17.5 17.5-7-7m7 0-7 7" stroke="#000" strokeLinecap="round" />
        <path
            d="M14 25.667c6.443 0 11.667-5.224 11.667-11.667S20.443 2.333 14 2.333 2.333 7.557 2.333 14 7.557 25.667 14 25.667Z"
            stroke="#000"
        />
    </svg>
);

export default RemoveSvgComponent;
