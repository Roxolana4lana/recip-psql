import dbConnect, { pool } from "@/db"
import Card from "./components/Card"
import Form from "./components/Form"
import Nav from "./components/Nav"

export default async function Home() {
  dbConnect()
  const recipes = await pool.query("select r.id, r.name,r.rating, u.name as author_name, to_char(r.inserted_date, 'dd/mm/yyyy') as formatted_date from recipes r join users u on r.author_id = u.id")
  const resultRecipes = recipes.rows
  return (
    <main className="min-h-screen p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex overflow-x-auto">
          {resultRecipes.map(i => {
            return (
              <Card author={i.author_name} title={i.name} date={i.formatted_date} id={i.id} rating={i.rating} />
            )
          })}
        </div>
      </div>
      <Form></Form>
    </main>
  );
}
