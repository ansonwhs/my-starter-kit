import type { ReactNode } from 'react';

const CardBody = (props: { children: ReactNode }): JSX.Element => (
	<div className='p-3 m-2 text-sm h-56 overflow-auto'>{props.children}</div>
);

export default CardBody;
