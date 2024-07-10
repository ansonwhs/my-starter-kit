import { render } from '@testing-library/react';
import Home from './Home';

describe('Test on Home', () => {
	test('on render', () => {
		const { getByText, getAllByText } = render(<Home />);

		expect(
			getByText(
				'Reminder: This kit is based on React 18 and using Functional Component. All Configuration is using ESM JS as much as possible.'
			)
		).toBeInTheDocument();
		expect(getAllByText('Typescript Configuration').length).toBe(2);
		expect(getByText('Vite Configuration')).toBeInTheDocument();
		expect(getByText('Prettier Configuration')).toBeInTheDocument();
		expect(getByText('Eslint Configuration')).toBeInTheDocument();
	});
});
