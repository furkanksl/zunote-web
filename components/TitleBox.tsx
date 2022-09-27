type Props = {
    title: string;
};

function TitleBox(props: Props) {
    return (
        <div className="title-box">
            <p>{props.title}</p>
        </div>
    );
}

export default TitleBox;
