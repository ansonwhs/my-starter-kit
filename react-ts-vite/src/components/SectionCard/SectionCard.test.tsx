import { render } from '@testing-library/react';
import SectionCard from './SectionCard';

describe('Test on Card Components', () => {
	test('on Render', () => {
		const { getByText } = render(
			<>
				<SectionCard title='Card Title'>Card Body</SectionCard>
			</>
		);

		expect(getByText('Card Title')).toBeInTheDocument();
		expect(getByText('Card Body')).toBeInTheDocument();
	});
});
