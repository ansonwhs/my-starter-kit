import type { ReactNode } from 'react';

const CardTitle = (props: { children: ReactNode }): JSX.Element => (
	<p className='p-3 m-2 text-lg text-center font-medium'>{props.children}</p>
);

export default CardTitle;
