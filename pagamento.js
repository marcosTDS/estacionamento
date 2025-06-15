function showTab(tab) {
      const container = document.getElementById('flipContainer');
      if (tab === 'back') {
        container.classList.add('flipped');
      } else {
        container.classList.remove('flipped');
      }
    }

    function copiarPix() {
      const pixCode = document.getElementById('pixCode').innerText;
      navigator.clipboard.writeText(pixCode).then(() => {
        alert('Código Pix copiado!');
      });
    }

    function mostrarQRCode() {
      document.getElementById('conteudoPix').style.display = 'block';
      document.getElementById('botaoGerarPix').style.display = 'none';
    }