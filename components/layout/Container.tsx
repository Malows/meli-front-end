import { ReactNode } from 'react'

export default function Container ({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div className="container">
            <div className="content">
                {children}
            </div>

            <style global jsx>{`
                .container {
                    display: grid;

                    grid-template-columns: 1fr 10fr 1fr;
                    grid-template-areas: ". content .";
                    grid-auto-flow: row;
                }

                .content {
                    grid-area: content;
                }
            `}</style>
        </div>
    )
}
