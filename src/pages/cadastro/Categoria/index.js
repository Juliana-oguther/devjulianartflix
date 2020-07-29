import React from 'react';
import { Link } from 'react-router-dom';
import PageDefaulf from '../../../components/PageDefault';

function CadastroCategoria() {
    return (
      <PageDefaulf>
        <h1>Cadastro de Categoria</h1>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefaulf>
    )
  }

  export default CadastroCategoria;