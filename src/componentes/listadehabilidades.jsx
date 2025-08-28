export default function ListaDeHabilidades({ lista }) {
  return (
      
      <ul>
        {
        lista?
        lista.map((skill, i) => (
          <li key={i}>{skill}</li>
        )):<h2>No hay habilidades</h2>
    }
      </ul>
  )
}