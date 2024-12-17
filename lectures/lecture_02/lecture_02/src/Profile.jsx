const Profile = (props) => {
  return (
    <div>
      <div>
        <h1>{props.ime}</h1>
        <h1>{props.godini}</h1>
        <img src={props.avatarSlika} />
        <h1>{props.isPrivate.toString()}</h1>
      </div>
    </div>
  );
};

export default Profile;
