import './App.css'
import Disciplina from './Disciplina';
import Cachorro from './Cachorro';

function App() {
  return (
    <div id='container'>
    <Disciplina codigo='DCC200' nome='DWeb'></Disciplina>
    <Cachorro estado_do_cachorro='triste' nome_do_cachorro='FAbiano'></Cachorro>
    </div>
  );
}

export default App;

