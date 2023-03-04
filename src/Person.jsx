function Person(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <p>Gender: {props.gender}</p>
      </div>
    );
  }

  export default Person;