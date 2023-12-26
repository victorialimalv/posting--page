<script>
    // Função para enviar os dados para a API simulada (neste caso, uma saída no console)
    function criarPost() {
      const titulo = document.querySelector('#titulo').value;
      const conteudo = document.querySelector('#conteudo').value;

      // Simulando uma requisição POST para uma API
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: titulo,
          body: conteudo,
          userId: 1 // Poderia ser o ID do usuário logado, por exemplo
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log('Post criado:', data);
        document.getElementById('tituloRenderizar').innerHTML = data.title;
        alert('Post criado com sucesso!’);
      })
      .catch(error => {
        console.error('Erro ao criar post:', error);
        alert('Erro ao criar post. Por favor, tente novamente.');
      });
    }
    
  </script>
