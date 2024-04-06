type TitleProps = {
    children: string;
}

const Title = (props: TitleProps): JSX.Element => (
    <p className="text-4xl font-bold text-center m-4 text-sky-500">
        {props.children}
    </p>
);

export default Title;