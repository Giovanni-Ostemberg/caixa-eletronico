const valorSaque = 107;

function saque(valorSaque) {
  let notas200 = {
    valor: 200,
    qtd: 0,
  };
  let notas100 = {
    valor: 100,
    qtd: 0,
  };
  let notas50 = {
    valor: 50,
    qtd: 0,
  };
  let notas20 = {
    valor: 20,
    qtd: 0,
  };
  let notas10 = {
    valor: 10,
    qtd: 0,
  };
  let notas5 = {
    valor: 5,
    qtd: 0,
  };
  let notas2 = {
    valor: 2,
    qtd: 0,
  };

  let valorAuxiliar = valorSaque;

  if (valorAuxiliar % 2 !== 0) {
    valorAuxiliar -= 5;
    notas5.qtd = 1;
  }

  let notasDisponiveis = [
    notas200,
    notas100,
    notas50,
    notas20,
    notas10,
    notas5,
    notas2,
  ];
  let texto = "";

  if (valorSaque > 1000 || valorSaque === 3 || valorSaque === 1) {
    valorSaque > 1000
      ? console.log(
          "Permitidos apenas saques de valor igual ou inferior a R$1000"
        )
      : "";
    valorSaque === 1 || valorSaque === 3
      ? console.log(
          "Caixa não equipado com moedas, por favor, insira um valor válido"
        )
      : "";
  } else {
    // Distribuição de notas
    for (let nota of notasDisponiveis) {
      if (valorAuxiliar >= nota.valor && nota.valor !== 5) {
        nota.qtd = Math.floor(valorAuxiliar / nota.valor);
        valorAuxiliar = valorAuxiliar - nota.valor * nota.qtd;
      }
    }

    // Formatação da saída
    let notasUtilizadas = notasDisponiveis.filter((n) => {
      return n.qtd !== 0;
    });

    let index = 0;

    for (let nota of notasUtilizadas) {
      if (index !== 0) {
        texto += index !== notasUtilizadas.length - 1 ? ", " : " e ";
      }

      texto +=
        nota.qtd +
        (nota.qtd === 1 ? " nota de R$" : " notas de R$") +
        nota.valor;
      index++;
    }

    console.log(texto);
  }
}

saque(valorSaque);
