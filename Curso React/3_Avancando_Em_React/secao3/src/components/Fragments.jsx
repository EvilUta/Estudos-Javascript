

const Fragments = ({propsFragment}) => {
  return (
    <> {/* Tem o mesmo resultado da div mas vai ser jogado no componente pai do index principal*/}
      <h2>Primeiro titulo</h2>
      <h3>Segundo titulo</h3>
      <h4>{propsFragment}</h4>
    </>
  )
}

export default Fragments
