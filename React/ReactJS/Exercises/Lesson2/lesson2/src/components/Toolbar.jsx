import { ButtonWithNoPropagation } from "./ButtonWithNoPropagation";

export default function Toolbar() {
  return (
      <div className="Toolbar" style={{backgroundColor: 'black', padding: '10px'}} onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
          </button>
          
          <ButtonWithNoPropagation onClick={() => alert('No propagation!')}>
            Change Channel
          </ButtonWithNoPropagation>
    </div>
  );
}

