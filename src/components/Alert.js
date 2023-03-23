import "./styles.css";
export default function Alert(props) {
  return (
    props.msg && (
      <div className="copy" role="alert">
        {props.msg}
      </div>
    )
  );
}
