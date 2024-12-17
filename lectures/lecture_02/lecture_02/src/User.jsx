import Card from "./Card";
import Profile from "./Profile";

const User = ({ name, isVerified }) => {
  return <Card isVerified={isVerified} />;
};

export default User;
