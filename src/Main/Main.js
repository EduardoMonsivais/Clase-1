import Counter from './Counter'
import img from './img/Familia.jpg'

function Main() {
  return (
    <div>
        <Counter datos={['Eduardo', '20989', '5A' ]}/>
        <img src = {img} width="720" alt="Familia.jpg"></img>
    </div>
  )
}

export default Main
