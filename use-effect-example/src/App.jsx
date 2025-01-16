/**
 * @description - This is an example of Hooks Component in a react app.
 * 
 * @author - Utshab
 */
import Welcome from "./components/Welcome";
import Support from "./components/Support";

// Importing CSS framework Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="https://cdn.shopify.com/s/files/1/0766/1066/6774/files/svg-clipart-file-4_1024x1024.png?v=1716464525" alt="StarGazers Group" />
          <Welcome name="Stars" />
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <Support />
        </hgroup>
      </article>
    </div>
  )
}
export default App
