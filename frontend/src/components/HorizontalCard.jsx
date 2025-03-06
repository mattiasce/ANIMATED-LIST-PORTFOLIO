export default function HorizontalCard({ id, nomeCliente, nomeProgetto, descrizioneProgetto, anno }) {

    return (
            <tr className="card">
                {/* <td className="id">{id}</td> */}
                <td className="nome_cliente">{nomeCliente}</td>
                <td className="nome_progetto">{nomeProgetto}</td>
                <td className="descrizione_progetto nsm">{descrizioneProgetto}</td>
                <td className="anno">{anno}</td>
            </tr>
    )
}