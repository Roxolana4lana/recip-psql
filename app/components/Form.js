import Image from "next/image";
import dbConnect, { pool } from "@/db"
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation"

export default async function Form() {

    const generateRecipe = async (data) => {
        'use server';
        let name = data.get("title")?.valueOf()
        let ingredients = data.get("ingredients")?.valueOf()
        let directions = data.get("directions")?.valueOf()
        let author_id = data.get("author")?.valueOf()
        try {
            const newRecipe = await pool.query('INSERT INTO recipes (name, ingredients,directions,author_id) VALUES ($1, $2, $3, $4) RETURNING *', [name, ingredients, directions, author_id])
            console.log(newRecipe.rows[0])
        } catch (err) {
            console.log(err)
        }
        redirect('/')
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form action={generateRecipe} className="space-y-5">
                <input type="text"
                    name='title'
                    placeholder='title'
                    className="shadow-lg rounded-md shadow-grey h-10 p-3 w-[100%]" />
                <input type="text"
                    name='ingredients'
                    id='note' placeholder='Ingredients' className="shadow-lg rounded-md shadow-grey h-10 p-3 w-[100%]" />
                <input type="text"
                    name='Directions'
                    id='note' placeholder='Directions' className="shadow-lg rounded-md shadow-grey h-10 p-3 w-[100%]" />
                <input type="text"
                    name='author'
                    id='note' placeholder='Author' className="shadow-lg rounded-md shadow-grey h-10 p-3 w-[100%]" />
                <button type="submit" className="bg-orange-500 font-bold text-white hover:bg-red-600 p-3 rounded-md shadow-lg shadow-orange-400 hover:shadow-red-400">SUBMIT</button>
            </form>
        </main>
    );
}
