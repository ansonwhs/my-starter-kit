import { render } from '@testing-library/react';
import DisplayField from './DisplayField';

describe('Test on DisplayField', () => {
	test('Test on string', () => {
		const { getByText } = render(
			<DisplayField displayType='string' value='abc' />
		);

		expect(getByText('abc')).toBeInTheDocument();
	});

	test('Test on date display 1', () => {
		const { getByText } = render(
			<DisplayField displayType='date' value='2023-01-03' />
		);

		expect(getByText('03/01/2023')).toBeInTheDocument();
	});

	test('Test on date display 2', () => {
		const { getByText } = render(
			<DisplayField displayType='date' value={new Date('2023-12-31')} />
		);

		expect(getByText('31/12/2023')).toBeInTheDocument();
	});

	test('Test on date display 1', () => {
		const { getByText } = render(
			<DisplayField displayType='date' value='abc' />
		);

		expect(getByText('Invalid Date')).toBeInTheDocument();
	});
});
