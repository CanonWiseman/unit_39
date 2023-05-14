const App = () => (
    <div>
        <FirstComponent/>
        <NamedComponent name = "Canon"/>
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);