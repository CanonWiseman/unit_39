const Person = (props) => (
    <div>
        <p>Learn some information about {props.name.length > 8 ? props.name.slice(0,6) : props.name}</p>
        <p>***********************************</p>
        <h3>{props.age >= 18 ? "Please Go vote" : "You must be 18 to vote"}</h3>
        <h4>Hobbies</h4>
        <ul>
            {props.hobbies.map(hobby => (
                <li>{hobby}</li>
            ))}
        </ul>
    </div>
);