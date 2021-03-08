const Message = ({ message, error }) => {
  const textColor = error ? "red" : "black";
  return <p style={{ fontSize: "50px", color: textColor }}>{message}</p>;
};

export default Message;
