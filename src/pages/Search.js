import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components"

export const Search = ({apiPath}) => {
    const [searchParams] = useSearchParams();
    const queryParam = searchParams.get('q');
    console.log(queryParam);
    const { data: movies } = useFetch(apiPath, queryParam);
  return (
    <main>
        <section className="py-7">
            <p className="text-3xl text-grey-700 dark:text-white">{ movies.length === 0 ? `No result found for '${queryParam}'` : `Result for '${queryParam}'` }</p>
        </section>
        <section className="max-width-7xl mx-auto py-7">
            <div className="flex justify-start flex-wrap">
                { movies.map((movie) => (
                    <Card key={movie.id} movie={movie}/>
                )) }
            </div>
        </section>
    </main>
  )
}
