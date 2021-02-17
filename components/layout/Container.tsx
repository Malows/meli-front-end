import { ReactNode } from 'react'

export default function Container ({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div className="container">
            {children}

            <style jsx>{`
                .container {
                    display: grid;

                    grid-template-columns: 1fr 10fr 1fr;
                    grid-template-areas: ". content .";
                }

                .container > * {
                    grid-area: content;
                }
            `}</style>
        </div>
    )
}
