import Image from 'next/image'

import SearchBar from './SearchBar'

export default function NavBar (): JSX.Element {
    return (
        <nav>
            <div className="logo">
                <Image src="/Logo_ML.png" layout="fixed" width={47} height={32} />
            </div>

            <div className="search" >
                <SearchBar />
            </div>

            <style jsx>{`
                nav {
                    background-color: var(--primary-color);
                    padding: .75rem 1.5rem;
                    display: grid;
                    height: 3.5rem;
                    gap: .5rem;
                    grid-template-columns: 1fr 1fr 9fr 1fr;
                    grid-template-areas: ". logo search ..";
                }

                .logo {
                    grid-area: logo;
                    height: 100%;
                }

                .search {
                    grid-area: search;
                }
            `}</style>
        </nav>
    )
}
