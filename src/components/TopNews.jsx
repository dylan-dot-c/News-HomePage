
export default function TopNews(props) {

    // console.log(props)
    return (
        <div className="top--news">
            <img src={props.data.imageSrc} />

            <div>
                <span>{('00' + props.data.id).slice(-2)}</span>
                <h3>{props.data.title}</h3>
                <p>{props.data.description}</p>
            </div>
        </div>
    )
}