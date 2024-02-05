import { BrowserRouter } from 'react-router-dom'
import Layout from '@components/Layout'
import RouterSetup from '@components/Router/RouterSetup'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <RouterSetup />
            </Layout>
        </BrowserRouter>
    )
}

export default App
