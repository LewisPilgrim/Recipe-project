import styles from "./header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <span>
        <h1>Listy</h1>
      </span>
      <span>
        <button>Menu</button>
      </span>
    </header>
  )
}

export default Header
