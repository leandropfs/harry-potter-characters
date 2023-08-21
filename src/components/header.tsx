import { useContext, useRef } from 'react'
import { SearchContext } from '@/contexts/SearchContext'
import Image from 'next/image'

import styles from '../styles/Header.module.scss'

const Header = () => {

    const { onChangeQuery } = useContext(SearchContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        onChangeQuery(e.target.value)
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as HTMLFormElement;
        onChangeQuery(target.query.value)
    }

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
                className={styles["header-search"]}
                onSubmit={handleSubmit}
            >
                    <fieldset className={styles["header-search-fieldset"]}>
                        <label className={styles["header-search-label"]}>
                            <span className={styles["header-search-heading"]}>Accio</span>
                            <input
                                 className={styles["header-search-input"]}
                                 placeholder=""
                                 id="query"
                                 name="query"
                                 type='search'
                                 onChange={handleChange}
                                 autoComplete='off'
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