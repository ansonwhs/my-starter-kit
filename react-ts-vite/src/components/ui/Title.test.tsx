import { render } from '@testing-library/react';
import Title from './Title';

describe('Test on Title', () => {
	test('on Render', () => {
		const { getByText } = render(<Title>123</Title>);

		expect(getByText('123')).toBeInTheDocument();
	});
});
