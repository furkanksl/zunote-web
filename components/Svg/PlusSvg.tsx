import SvgComponentProp from "../../src/models/types/SvgComponentProp";

const PlusSvgComponent = (props: SvgComponentProp) => (
    <svg onClick={props.function} width={42} height={42} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 35V21m0 0V7m0 14h14m-14 0H7" stroke="#747474" strokeWidth={2} strokeLinecap="round" />
    </svg>
);

export default PlusSvgComponent;
