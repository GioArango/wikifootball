import { useEffect, useState } from "react";
import { getLeagues } from "../helpers/GetLeagues";
import { LeagueItem } from "./LeagueItem";

export const LeagueGrid = ({ country }) => {

    const [leagues, setLeagues] = useState([]);

    const getNewLeagues = async () => {
        const newLeagues = await getLeagues(country);
        setLeagues(newLeagues);
    }

    useEffect(() => {
        getNewLeagues();
    }, []);

    return (
        <>
            <h3>{country}</h3>
            <div className="grid md:grid-cols-4 gap-4 bg-cyan-100 justify-items-center self-center">
            {
                leagues.map((league) => (
                    <LeagueItem
                        key={league.id}
                        {...league}
                    />
                ))
            }
            </div>
        </>
    )
}
