export default {
  screen: {
    home: {
      registerProduct: 'Cadastrar',
      list: {
        emptyState: {
          title: 'Error',
          message: 'Não foi possível atender sua solicitação tente novamente.',
        },
      },
    },
    register: {
      inputs: {
        title: {
          label: 'Titulo',
          placeholder: 'Nome do produto',
        },
        category: {
          label: 'Categoria',
          placeholder: 'Selecione uma categoria',
          doneText: 'Finalizar',
        },
        price: {
          label: 'Valor',
          placeholder: 'Preço R$99.90',
        },
        tags: {
          label: 'Tags',
          placeholder: 'Escreva uma tag e confirme para adiciona-la a lista',
          selectedTags: '(%{count}) Tags selecionadas',
        },
      },
      actions: {
        goBack: {
          buttonText: 'Voltar',
        },
        reset: {
          buttonText: 'Limpar',
        },
        send: {
          buttonText: 'Enviar',
        },
        update: {
          buttonText: 'Atualizar',
        },
      },
      alerts: {
        onDeleteTag: {
          title: 'Atenção',
          message: 'Tem certeza que deseja excluir a tag %{tag}?',
          actions: {
            delete: 'Deletar',
            cancel: 'cancelar',
          },
        },
      },
      errors: {
        onTagExists: 'Essa tag já existe nesse produto.',
        onTagNull: 'Informe um valor para a tag.',
      },
    },
  },
  default: {
    serverErrorMessage: 'Erro com nossos servidores tente novamente.',
    emptyState: {
      retry: 'Tentar novamente',
    },
    errors: {
      input: {
        required: 'Esse campo é obrigatório por favor preencha.',
        price: {
          minimum: 'O valor mínimo do produto deve ser 1',
        },
      },
    },
  },
};
