const Avatar = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} />
    </div>
  );
};

export default Avatar;
