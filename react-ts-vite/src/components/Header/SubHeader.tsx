import DisplayField from '@ui/DisplayField';

const SubHeader = (): JSX.Element => (
	<div className='flex justify-around m-5'>
		<div className='flex text-lg gap-3'>
			<DisplayField displayType='string' value='Today is' />
			<DisplayField
				className='font-bold underline'
				displayType='date'
				value={new Date()}
			/>
		</div>

		<DisplayField
			className='text-xl font-medium'
			displayType='string'
			value='Welcome to my starter kit!'
		/>
	</div>
);

export default SubHeader;
