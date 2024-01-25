import Header from 'src/components/Layout/components/Header';
import Sidebar from '~/components/Layout/DefaultLayout/Sidebar';

function DefaultLayout({ children }) {
    return (<>
        <Header />
        <div className='container'>
            <Sidebar />

            <div className='content'>{children}</div>
        </div>
    </>);
}

export default DefaultLayout;