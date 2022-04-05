import { Summary } from '../Summary'
import { TrasanctionsTable } from '../TransactionsTable'
import { Container } from './styles'
import {  } from './styles'


export function Dashboard() {
    return (
        <Container>
            <Summary></Summary>
            <TrasanctionsTable></TrasanctionsTable>
        </Container>
    )
}