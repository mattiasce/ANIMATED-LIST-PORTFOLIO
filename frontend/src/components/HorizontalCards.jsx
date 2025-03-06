import HorizontalCard from "./HorizontalCard";

export default function HorizontalCards() {

    const portfolio = [
        { ID: 1, nomeCliente: 'NeuraTech', nomeProgetto: 'QuantumNet', anno: 2020, descrizioneProgetto: 'AI per ottimizzazione aziendale' },
        { ID: 2, nomeCliente: 'OmniLabs', nomeProgetto: 'HoloSync', anno: 2021, descrizioneProgetto: 'Sincronizzazione dati in AR' },
        { ID: 3, nomeCliente: 'XenoWorks', nomeProgetto: 'AI Wave', anno: 2022, descrizioneProgetto: 'AI per analisi predittive' },
        { ID: 4, nomeCliente: 'FutureFlow', nomeProgetto: 'MetaSphere', anno: 2023, descrizioneProgetto: 'Mondi virtuali immersivi' },
        { ID: 5, nomeCliente: 'VortexX', nomeProgetto: 'CryptoXchange', anno: 2020, descrizioneProgetto: 'Scambio criptovalute in tempo reale' },
        { ID: 6, nomeCliente: 'HyperNova', nomeProgetto: 'Project Singularity', anno: 2021, descrizioneProgetto: 'Ricerca su intelligenza artificiale' },
        { ID: 7, nomeCliente: 'NebulaCore', nomeProgetto: 'CloudQuantum', anno: 2022, descrizioneProgetto: 'Cloud computing quantistico sicuro' },
        { ID: 8, nomeCliente: 'AetherWorks', nomeProgetto: 'NeuroConnect', anno: 2023, descrizioneProgetto: 'Interfacce neurali avanzate' },
        { ID: 9, nomeCliente: 'FluxTech', nomeProgetto: 'SmartCityOS', anno: 2020, descrizioneProgetto: 'Gestione risorse urbane smart' },
        { ID: 10, nomeCliente: 'StellarX', nomeProgetto: 'Intergalactic Network', anno: 2021, descrizioneProgetto: 'Rete di comunicazione spaziale' }
    ];

    const sorted_portfolio = portfolio.sort((a, b) => b.anno - a.anno);


    return (
        <>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Client</th>
                    <th>Project</th>
                    <th className="nsm">Description</th>
                    <th>Year</th>
                </thead>
                <tbody>
                    {sorted_portfolio.map((e) => (
                        <HorizontalCard
                            key={e.ID}
                            // id={e.ID}
                            nomeCliente={e.nomeCliente}
                            nomeProgetto={e.nomeProgetto}
                            descrizioneProgetto={e.descrizioneProgetto}
                            anno={e.anno}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
}
