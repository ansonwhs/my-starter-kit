import Header from '@components/Header';
import DescriptionSection from './DescriptionSection';

const Home = (): JSX.Element => (
    <>
        <Header />
        <p className='text-center p-5 font-semibold text-red-500'>Reminder: This kit is based on React 18 and using Functional Component. All Configuration is using ESM JS as much as possible.</p>
        <DescriptionSection />
    </>
);

export default Home;
