import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil,faEraser,faRotateLeft,faRotateRight,faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'
const Menu = () => {
  return (
    <div className={styles.menuContainer}>
        <div className={styles.iconWrspper}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={faPencil} />
            </div>
        </div>
        <div className={styles.iconWrspper}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={faEraser} />
            </div>
        </div>
        <div className={styles.iconWrspper}>
            <div className={styles.icon}>
            <FontAwesomeIcon icon={faRotateLeft} />
        </div>
        </div>
        <div className={styles.iconWrspper}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={faRotateRight} />
            </div>
        </div>
        <div className={styles.iconWrspper}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={faFileArrowDown} />
            </div>
        </div>
    </div>
  )
}

export default Menu