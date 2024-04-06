import Title from '@root/components/ui/Title';
import SubHeader from './SubHeader';

const Header = (): JSX.Element => (
    <>
        <Title>
            {import.meta.env.VITE_APPLICAITON_NAME}
        </Title>
        <SubHeader />
        <hr />
    </>
)

export default Header;