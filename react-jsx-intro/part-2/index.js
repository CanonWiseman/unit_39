const App = () => (
    <div>
        <Tweet username = "user 1" name = "name 1" date = "1/1/23" msg = "This is an example tweet" />
        <Tweet username = "user 2" name = "name 2" date = "1/1/23" msg = "I love React!" />
        <Tweet username = "user 3" name = "name 3" date = "1/1/23" msg = "Who Am I?" />
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);