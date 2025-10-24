// Exemplo completo de tratamento de erros com try, throw, catch e finally

// Função que divide dois números
function dividir(a, b) {

  // if serve pra prever condições normais, antes de dar erro
  if (typeof a !== "number" || typeof b !== "number") {
    // se o valor não for número, eu lanço (throw) um erro manualmente
    throw new Error("Os valores precisam ser números!");
  }

  // se o divisor for 0, eu também lanço um erro manualmente
  if (b === 0) {
    throw new Error("Não é possível dividir por zero!");
  }

  // se tudo estiver certo, retorno o resultado
  return a / b;
}


// Agora vou tentar executar com try...catch
try {
  // o try tenta executar o código normalmente
  console.log("Resultado 1:", dividir(10, 2)); // funciona

  console.log("Resultado 2:", dividir(5, 0)); // erro! vai direto pro catch

  console.log("Essa linha nunca será executada"); // o JS para no erro anterior

} catch (erro) {
  // o catch é executado quando ocorre um erro dentro do try
  console.log("❌ Erro capturado:", erro.message);

} finally {
  // o finally roda SEMPRE — mesmo se deu erro ou não
  console.log("🔚 Finalizando operação...");
}

console.log("✅ O programa continua rodando normalmente!");
