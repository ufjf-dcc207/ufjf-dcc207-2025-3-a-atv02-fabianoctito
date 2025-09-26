import { useEffect, useState } from 'react';
import './Cachorro.css'

type cachorroProps = {
  estado_do_cachorro: string,
  nome_do_cachorro: string
}

function Cachorro(props : cachorroProps) {
  const [estadoCachorro, setEstadoCachorro] = useState('feliz');
  const [imgCachorro, setImgCachorro] = useState('');
  const [nomeCachorro, setNomeCachorro] = useState('');

  useEffect(()=>{
    if(estadoCachorro == 'feliz'){
      setImgCachorro('https://static.vecteezy.com/ti/fotos-gratis/p2/6305848-fofo-cachorrinho-golden-retriever-em-no-jardim-ao-ar-livre-em-fundo-desfocado-gratis-foto.JPG');
    }
    else if(estadoCachorro == 'triste'){
      setImgCachorro('https://media.istockphoto.com/id/544343644/pt/foto/pugilista-alem%C3%A3o-cachorrinho-em-branco.jpg?s=612x612&w=0&k=20&c=1N3S8m6JdLixvzO7HGc-UkF750aQxAyvqm44grWJQgM=');

    }
  },[estadoCachorro]);

  useEffect(() => {
    setEstadoCachorro(props.estado_do_cachorro);
    setNomeCachorro(props.nome_do_cachorro);
  }, [])

  return (
    <div id='dog-container'>
    <img src={imgCachorro} onMouseOver={()=>{console.log(`cachorro ${nomeCachorro} diz: OBRIGADO PELO CARINHO`)}}></img>
    <p>oI esse é o {nomeCachorro} e ele tá {estadoCachorro}!!!!!!!!!!!!11 </p>
    <p>faça carinho nele imediatamente</p>
    </div>
  );
}

export default Cachorro;

