function swap(arg, ind, ind2) {
  if (ind === ind2) {
    return; 
  }
  
  var temporaria = arg[ind];
  arg[ind] = arg[ind2];
  arg[ind2] = temporaria;
}

function shuffle(arg) {
  var temporario = arg.slice();
  var origem = arg.length;
  var aliatorio;

  var repeticoes = 0;
  var maximaRepeticoes = arg.length; 

  while (0 !== origem) {
    aliatorio = Math.floor(Math.random() * origem);
    origem -= 1;

    swap(arg, origem, aliatorio);
  }

  if (JSON.stringify(temporario) === JSON.stringify(arg)) {
    repeticoes++;
    if (repeticoes >= maximaRepeticoes) {
      return arg;
    } else {
      return shuffle(arg);
    }
  } else {
    return arg;
  }
}

function bubble_sort(arg) {
  var tamanho = arg.length;
  var troca;

  do {
    troca = false;
    for (var ind = 0; ind < tamanho - 1; ind++) {
      if (arg[ind] > arg[ind + 1]) {
        swap(arg, ind, ind + 1);
        troca = true;
      }
    }
    tamanho--;
  } while (troca);

  return arg;
}

function selection_sort(arg) {
  var tamanho = arg.length;
  for (var ind = 0; ind < tamanho - 1; ind++) {
    var miniOrigem = ind;
    for (var ind2 = ind + 1; ind2 < tamanho; ind2++) {
      if (arg[ind2] < arg[miniOrigem]) {
        miniOrigem = ind2;
      }
    }
    swap(arg, ind, miniOrigem);
  }
  return arg;
}

function quick_sort(arg) {
  Suporte(arg, 0, arg.length - 1);
  return arg;
}

function Suporte(arg, esquerda, direita) {
  if (esquerda < direita) {
    var turno = particionamento(arg, esquerda, direita);
    Suporte(arg, esquerda, turno - 1);
    Suporte(arg, turno + 1, direita);
  }
}

function particionamento(arg, esquerda, direita) {
  var turno = Math.floor((esquerda + direita) / 2);
  var valorDoTurno = arg[turno];
  swap(arg, turno, direita);
  var resposta = esquerda;
  for (var ind = esquerda; ind < direita; ind++) {
    if (arg[ind] < valorDoTurno) {
      swap(arg, ind, resposta);
      resposta++;
    }
  }
  swap(arg, resposta, direita);
  return resposta;
}