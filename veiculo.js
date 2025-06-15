  const modelosPorMarca = {
    Chevrolet: ['Onix', 'Prisma', 'S10', 'Spin', 'Tracker'],
    Fiat: ['Uno', 'Palio', 'Toro', 'Argo', 'Cronos'],
    Ford: ['Ka', 'Fiesta', 'EcoSport', 'Ranger'],
    Honda: ['Civic', 'Fit', 'HR-V'],
    Hyundai: ['HB20', 'Creta', 'i30'],
    Jeep: ['Compass', 'Renegade'],
    Kia: ['Sportage', 'Cerato'],
    Nissan: ['Versa', 'Kicks', 'Frontier'],
    Peugeot: ['208', '2008', '3008'],
    Renault: ['Sandero', 'Duster', 'Kwid'],
    Toyota: ['Corolla', 'Hilux', 'Etios'],
    Volkswagen: ['Gol', 'Polo', 'Virtus'],
    BMW: ['320i', 'X1', 'X5'],
    'Mercedes-Benz': ['Classe A', 'Classe C', 'GLA'],
    Audi: ['A3', 'A4', 'Q3'],
    Mitsubishi: ['L200', 'ASX', 'Outlander']
  };

  const marcaInput = document.getElementById('marca');
  const modeloInput = document.getElementById('modelo');
  const datalistModelos = document.getElementById('modelos');

  marcaInput.addEventListener('input', () => {
    const marcaSelecionada = marcaInput.value;
    const modelos = modelosPorMarca[marcaSelecionada] || [];

    // Limpa os modelos antigos
    datalistModelos.innerHTML = '';

    // Adiciona os novos modelos
    modelos.forEach(modelo => {
      const option = document.createElement('option');
      option.value = modelo;
      datalistModelos.appendChild(option);
    });
  });

  const form = document.getElementById('form-veiculo');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita o envio real do formulário
  alert('Veículo cadastrado com sucesso!');
  form.reset(); // Opcional: limpa o formulário após cadastrar
});


