import Joke from "./Joke"

function App() {
    return (<div>
        <Joke
            question="I hate my mood swings"
            punchLine="They're greate!" />

        <Joke
            question="Honey, do you think I'm fat?"
            punchLine="Let's put it this way:You're the greatest!" />

        <Joke
            question="My neighbors are listening to great music"
            punchLine="Whether they like it or not." />

        <Joke
            // question="What do electric cars and diarrhea have in common? "
            punchLine="The idea, “I will make it home." />

    </div>)
}
export default App