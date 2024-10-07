import styles from './LogIn.module.scss'
import Logo from '../../assets/Logo.svg'

const LogIn = () => {
	return (
		<>
			<div className={styles.Home}>
				<img className={styles.Logo} src={Logo} />
				<div className={styles.input__Block}>
					<input className={styles.input} placeholder='Имя' type='text' />
					<input className={styles.input} placeholder='Возраст' type='text' />
					<input className={styles.input} placeholder='Рост' type='text' />
					<input className={styles.input} placeholder='Вес' type='text' />
				</div>
				<button>Далее</button>
			</div>
		</>
	)
}

export default LogIn
