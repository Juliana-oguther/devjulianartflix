import React from 'react';
import { Link } from 'react-router-dom';
import PageDefaulf from '../../../components/PageDefault';

function CadastroVideo() {
    return (
      <PageDefaulf>
        <h1>Cadastro de Vídeo</h1>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefaulf>
    )
  }

  export default CadastroVideo;