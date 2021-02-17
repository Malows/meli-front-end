import { ReactNode } from 'react'

import NavBar from './NavBar'

export default function Layout ({ children }: { children: ReactNode }): JSX.Element {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}
