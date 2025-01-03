export default function Joke(props) {
  return (
    <>
      {props.setup && <p className="setup">Setup: {props.setup}</p>}
      <p>Punchline: {props.punchline}</p>
      <hr />
    </>
  );
}
