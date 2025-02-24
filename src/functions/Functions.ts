const formatarData = (timestamp: number) => {
  return new Date(timestamp).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const formatarTelefone = (numero: number | string) => {
  const numeroStr = numero.toString().replace(/\D/g, "");
  if (numeroStr.length === 11) {
    return `+55 (${numeroStr.slice(0, 2)}) ${numeroStr.slice(
      2,
      7
    )}-${numeroStr.slice(7)}`;
  }

  if (numeroStr.length === 13) {
    return `+55 (${numeroStr.slice(2, 4)}) ${numeroStr.slice(
      4,
      9
    )}-${numeroStr.slice(9)}`;
  }

  return "Número inválido";
};
export { formatarData, formatarTelefone };
