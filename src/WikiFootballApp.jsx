import { useState } from "react";
import { AddLeague } from "./components/AddLeague";
import { LeagueGrid } from "./components/LeagueGrid";

export const WikiFootballApp = () => {

    const [leagues, setLeagues] = useState([]);

    const onAddLeague = (onNewLeague) => {
        if (leagues.includes(onNewLeague)) return;
        setLeagues([onNewLeague, ...leagues]);
    }

    return (
        <>
            <h1>WikiFootballApp</h1>

            <AddLeague
                onNewLeague={onAddLeague}
            />

            <button onClick={onAddLeague}>Agregar</button>

            {
                leagues.map((league) => (
                    <LeagueGrid
                        key={league}
                        country={league}
                    />
                ))
            }
        </>
    )
}
