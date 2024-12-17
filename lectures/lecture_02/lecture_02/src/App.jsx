import { useState } from "react";
import "./App.css";
import Avatar from "./Avatar";
import Profile from "./Profile";
import UserProp from "./First";
const profileMartin = {
  name: "Martin Petroski",
  isPrivate: false,
  age: 26,
  avatarImg:
    "https://www.cnet.com/a/img/resize/bc48bbd2f4dbb7f5799eb4bc28bdcf6f19f6f408/hub/2022/05/10/708507de-bb07-4c16-9a94-bbf206a59fd5/avatar.jpg?auto=webp&fit=crop&height=675&width=1200",
};

function App() {
  return (
    // <Avatar
    //   name="Martin Petroski"
    //   img="https://www.cnet.com/a/img/resize/bc48bbd2f4dbb7f5799eb4bc28bdcf6f19f6f408/hub/2022/05/10/708507de-bb07-4c16-9a94-bbf206a59fd5/avatar.jpg?auto=webp&fit=crop&height=675&width=1200"
    // />

    // <Profile
    //   ime={profileMartin.name}
    //   godini={profileMartin.age}
    //   isPrivate={profileMartin.isPrivate}
    //   avatarSlika={profileMartin.avatarImg}
    // />
    <UserProp
      name="Petroski Martin"
      img="https://www.cnet.com/a/img/resize/bc48bbd2f4dbb7f5799eb4bc28bdcf6f19f6f408/hub/2022/05/10/708507de-bb07-4c16-9a94-bbf206a59fd5/avatar.jpg?auto=webp&fit=crop&height=675&width=1200"
      width="200px"
      heigth="200px"
    />
  );
}

export default App;
