import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRouter } from '~/routes';
import { DefaultlLayout } from '~/components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    {
                        publicRouter.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultlLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />;
                        })
                    }
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
