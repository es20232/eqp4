import axios from 'axios'; 

export const uploadPost = (image, description) => async (dispatch) => {
  try {
    
    // Obter a autorização do sessionStorage
    const authorization = sessionStorage.getItem('authorization');
    console.log(authorization)
    // Verificar se a autorização está presente
    if (!authorization) {
      throw new Error('Autorização não encontrada');
    }

    // Configurar os cabeçalhos da requisição com a autorização
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': authorization,
      },
    };

    // Criar um objeto FormData para enviar os dados do formulário
    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);

    // Enviar a requisição POST para o endpoint de upload de post
    const res = await axios.post(`${process.env.REACT_APP_API_URL}posts/`, formData, config);

    // Despachar uma ação de sucesso com os dados do post
    dispatch({ type: 'UPLOAD_POST_SUCCESS', payload: res.data });
  } catch (error) {
    // Se ocorrer um erro, despachar uma ação de falha com a mensagem de erro
    dispatch({ type: 'UPLOAD_POST_FAIL', payload: error.message });
  }
};
