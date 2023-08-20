import Image from 'next/image'

import styles from '../styles/Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <Image
                className={styles["header-logo"]}
                src="/images/logo.svg"
                alt="Harry Potter and others Characters"
                width={375}
                height={165}
                priority
            />
            <form
                className={styles["header-search"]}>
                    <fieldset className={styles["header-search-fieldset"]}>
                        <label className={styles["header-search-label"]}>
                            <span className={styles["header-search-heading"]}>Accio</span>
                            <input
                                 className={styles["header-search-input"]}
                                 placeholder=""
                                 type='search'
                            />
                            <button
                                 className={styles["header-search-submitIcon"]}>
                                    <Image
                                        className={styles["header-logo"]}
                                        src="/images/wand.svg"
                                        alt="Accio"
                                        width={42}
                                        height={42}
                                    />
                            </button>
                        </label>
                    </fieldset>
            </form>
        </header>
    )
}

export default Header