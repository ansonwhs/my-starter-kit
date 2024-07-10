import { render } from '@testing-library/react';
import Header from './Header';

describe('Test on Header', () => {
	beforeEach(() => {
		jest.useFakeTimers({ now: new Date('2024-01-01') });
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	test('on render', () => {
		const { getByText } = render(<Header />);

		expect(getByText('Test App')).toBeInTheDocument();
		expect(getByText('Today is')).toBeInTheDocument();
		expect(getByText('01/01/2024')).toBeInTheDocument();
		expect(getByText('Welcome to my starter kit!')).toBeInTheDocument();
	});
});
