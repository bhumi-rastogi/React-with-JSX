import './App.css';
import elephant from "./images/elephant.jpeg";

const elephant_image_data = () => {
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    },
  ];

  return data;
};
const many_image = elephant_image_data(); // Initialize the images variable here

function App() {

  return (
    <div className="images">

      {many_image.map((image) => (

        <div key={image.id}>

          <img src={image.img} alt="" />

        </div>

      ))}

    </div>

  );
}

export default App;
