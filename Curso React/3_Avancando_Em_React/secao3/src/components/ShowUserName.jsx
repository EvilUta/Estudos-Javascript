

const ShowUserName = (props) => { // se chama de props
  return (
    <div>
      <h2>O nome do usaurio: {props.name} </h2> {/*Se chama o parametro props, e o elemento colocado no app.jsx */}
    </div>
  )
}

export default ShowUserName
