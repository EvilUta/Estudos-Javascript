const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Idade:</strong> {idade}</p>
      <p><strong>Profissão:</strong> {profissao}</p>

      {/* Renderização condicional */}
      {idade >= 18 ? (
        <p style={{ color: "green" }}>Pode tirar habilitação</p>
      ) : (
        <p style={{ color: "red" }}>Não pode tirar habilitação</p>
      )}
    </div>
  );
};

export default UserDetails;
