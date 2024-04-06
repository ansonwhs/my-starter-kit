import dayjs from 'dayjs';

type DisplayBase = {
    className?: string;
}

type DateDisplay = DisplayBase & {
    displayType: 'date';
    value: string | Date;
}

type NormalDisplay = DisplayBase & {
    displayType: 'string';
    value: string;
}

const DisplayField = (props: NormalDisplay | DateDisplay): JSX.Element => {

    const { displayType, value, className } = props;

    const content = displayType === 'date' ? dayjs(value).format('DD/MM/YYYY') : value;

    return (
        <p className={className}>
            {content}
        </p>
    )
}

export default DisplayField;