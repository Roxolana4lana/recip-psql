import dbConnect, { pool } from "@/db"
import ChartTest from "@/components/ChartTest"
import BarChart from "@/components/BarChart"

export default async function Page() {
    dbConnect()
    //READ
    const data = await pool.query("SELECT u.name AS author_name, COALESCE(COUNT(r.author_id), 0) AS recipe_count FROM users u LEFT JOIN recipes r ON r.author_id = u.id GROUP BY u.name;")
    const listOfAuthors = data.rows?.map(r => r.author_name)
    const listOfCountRecipes = data?.rows?.map(r => r.recipe_count)


    const ratingData = await pool.query("SELECT u.name AS author_name, r.author_id, AVG(r.rating) AS average_rating FROM recipes r JOIN users u ON r.author_id = u.id GROUP BY u.name, r.author_id;")
    const listOfAuthorsWithR = ratingData?.rows?.map(a => a.author_name);
    const listOfRatings = ratingData?.rows?.map(r => r.average_rating);

    return (
        <section className="min-h-screen p-24">

            {/* <ChartTest labels={listOfAuthors} dataList={listOfCountRecipes} /> */}
            <BarChart labels={listOfAuthors} dataList={listOfCountRecipes} title="Number of recipes added by the author" subtitleX="List of authors" subtitleY="Recipes count" />
            <BarChart labels={listOfAuthorsWithR} dataList={listOfRatings} title="Average rating of the author" subtitleX="List of authors" subtitleY="Average rating" />
        </section>
    );
}
