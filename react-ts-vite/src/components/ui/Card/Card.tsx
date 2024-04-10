import type { ReactNode } from 'react';

const Card = (props: { children: ReactNode }): JSX.Element => (
	<div className='h-80 w-5/6 bg-yellow-50 my-3 mx-10 border-solid border-blue-200 border-2 rounded-lg hover:border-4 hover:border-blue-400'>
		{props.children}
	</div>
);

export default Card;
