/**
 * @description - This is an example of useState and useEffect methods combined in a react app.
 * 
 * @author - Utshab
 */
import Welcome from "./components/Welcome";
import Support from "./components/Support";
import ListCast from './components/ListCast';

// Importing CSS framework Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <Welcome name="Stars" />
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
            <ListCast />
          <Support />
        </hgroup>
      </article>
    </div>
  )
}
export default App
