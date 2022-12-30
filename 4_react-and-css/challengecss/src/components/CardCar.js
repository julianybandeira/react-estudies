import styles from './CardCar.module.css'

const CardCar = ({ car }) => {
  return (
    <div className={styles.card}>
    <h2 className={styles.title_car}>{car.brand}</h2>
    <p>Cor: {car.color}</p>
    <p>Ano: {car.year}</p>
    <p>KM: {car.km}</p>
    </div>
  )
}

export default CardCar