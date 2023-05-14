const App = () => (
    <div>
        <Person name = "Canon" age = { 16 } hobbies = {["coding", "videogames"]}/>
        <Person name = "Natalie" age = { 25 } hobbies = {["UX", "painting"]}/>
        <Person name = "KaiWiseman" age = { 28 } hobbies = {["Skateboarding", "reading"]}/>
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);