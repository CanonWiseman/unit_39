const Tweet = ({username, name, date, msg}) => (
    <div>
        <h1>Tweet</h1>
        <p>---------------</p>
        <h3>{username}</h3>
        <h5>{name}</h5>
        <p><b>{msg}</b></p>
        <p><i>{date}</i></p>
    </div>
    
);