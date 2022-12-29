import { news } from "../assets/Data/latestNews"

export default function LatestNews() {
    console.log(news)

    const result = news.map( (newsInfo, index) => {

        return (
            <div key={index} className="news">
                <h3>{newsInfo.title}</h3>
                <p>{newsInfo.description}</p>
            </div>
        )

    })

    return (
        <section className="latest--news">
            <h2>News</h2>

            <div>
                {result}
            </div>
        </section>
    )


}
