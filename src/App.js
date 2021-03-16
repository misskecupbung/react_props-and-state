import './App.css';
import Tugas4 from './Tugas4';

function App (props) {
	return (
  		<div>
  		<Tugas4 pengirim="Ana" content="Halo! saya Ana." />
  		<Tugas4 pengirim="Dwi" content="Halo Ana, saya Dwi" />
  		<Tugas4 pengirim="Ana" content="Apa kabar Dwi?" />
  		<Tugas4 pengirim="Dwi" content="Saya baik, terima kasih!" />
  		</div>
	);
}

export default App;
