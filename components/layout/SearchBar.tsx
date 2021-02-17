import { useState, ChangeEvent } from 'react'
import Image from 'next/image'

export default function SearchBar (): JSX.Element {
    const [value, setValue] = useState('')

    function handleChange ({ target: { value } }: ChangeEvent<HTMLInputElement>) {
        setValue(value)
    }

    return (
        <div className="search-bar">
            <input
                className="search-bar__input"
                type="text"
                placeholder="Nunca dejes de buscar"
                {...value}
                onChange={handleChange}
            />

            <button className="search-bar__button">
                <Image src="/ic_Search.png" width={20} height={20} layout="intrinsic" />
            </button>

            <style jsx>{`
                .search-bar {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: 2rem;
                }

                .search-bar__input {
                    flex-grow: 1;
                    height: 100%;
                }

                .search-bar__button {
                    flex-grow: 0;
                    width: 2rem;
                    height: 2rem;
                }

                input {
                    font-size: 18px;
                    font-size: max(18px, 1em);
                    font-family: inherit;
                    border: none;
                    padding: 0 1rem;
                    border-top-left-radius: var(--border-radius);
                    border-bottom-left-radius: var(--border-radius);
                }

                button {
                    border: none;
                    padding: 0;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    background-color: var(--light-color);
                    display: grid;
                    justify-content: center;
                    align-content: center;
                    border-top-right-radius: var(--border-radius);
                    border-bottom-right-radius: var(--border-radius);
                }
            `}</style>
        </div>
    )
}
