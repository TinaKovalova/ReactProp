function Joke(props) {
    if (props.question) {
        return (<div className="joke-card">
            <div className="joke-text">
                <h2 className="joke-question">{props.question}</h2>
            </div>
            <div className="joke-text">
                <h2 className="joke-punchLine">{props.punchLine}</h2>
            </div>
        </div>)
    }
    return (<div className="joke-card">
        <div className="joke-text">
            <h2 className="joke-punchLine">{props.punchLine}</h2>
        </div>
    </div>)

}
export default Joke