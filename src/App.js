import "./App.css";
import Card from "./components/card/Card";
import CardTitle from "./components/card/CardTitle";
import CardLayout from "./components/UI/CardLayout";
import users from "./utils/data/data";

function App() {
  return (
    <div className="App">
      <CardTitle/>
      <CardLayout>
        {users.map((item) => {
          return (
            <Card
              number={item.id}
              userName={item.username}
              bgcolor={item.wallpaper}
              userInfo={item.userInfo}
              profilePic={item.profilePic}
              insta= {item.insta}
              youtube={item.youtube}
            ></Card>
          );
        })}
      </CardLayout>
    </div>
  );
}

export default App;
