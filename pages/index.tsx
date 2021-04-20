import { Hero } from '../src/components'
import About from '../src/components/sections/About'
import Portfolio from '../src/components/sections/Portfolio'

import client from '../src/utils/helpers'

export default function Home({ portfolio }) {
    console.log("stuff", portfolio)
    return (
        <>
            <div className="w-full" >
                <Hero />
                <About />
                <Portfolio portfolio={portfolio} />
            </div>
        </>
    )
}

export async function getStaticProps() {
    let data = await client.getEntries({
        content_type: 'portfolio'
    })

    return {
        props: {
            portfolio: data.items,
        }
    }
};