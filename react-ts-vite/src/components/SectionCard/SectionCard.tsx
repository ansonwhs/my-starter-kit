import { Card, CardTitle, CardBody } from '@ui/Card';
import type { PropsWithChildren } from 'react';

type SectionCardProps = PropsWithChildren<{
    title: string;
}>

const SectionCard = (props: SectionCardProps): JSX.Element => (
    <Card >
        <CardTitle>{props.title}</CardTitle>
        <CardBody>{props.children}</CardBody>
    </ Card>
);

export default SectionCard;