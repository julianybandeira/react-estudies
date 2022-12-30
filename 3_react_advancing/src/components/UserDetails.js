const UserDetails = ({name, age, job}) => {
  return (
    <>
    <h2>{name}</h2>
    <p>Idade: {age}</p>
    <p>Profissão: {job}</p>
    {age>=18 ? (<p>Pode tirar a habilitação!</p>) : (<p>Menor de idade.</p>)}
    </>
  )
}

export default UserDetails