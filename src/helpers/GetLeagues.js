

export const getLeagues = async (country) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '68a0538217msh0a2102ef8818cc5p1d8abajsne7b036bc243c'
        }
    };

    const url = `https://run.mocky.io/v3/4921682a-b5ed-4ed4-b7e0-6e9733252c1e`;
    // const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?country=${country}`;
    const resp = await fetch(url, options);
    const { response } = await resp.json();

    const league = response.map(({ league, country }) => ({
        id: league.id,
        name: league.name,
        type: league.type,
        logo: league.logo,
        flagCountry: country.flag
    }));

    return league;

    // console.log(league);
}