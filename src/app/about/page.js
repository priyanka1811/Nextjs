import { pool } from "@/utils/dbConnect";
import dbConnect from "@/utils/dbConnect";
import Link from "next/link";

const About = () => {
     dbConnect();

    async function createForm(data) {
        "use server"

        let name = data.get("name");
        let email = data.get("email");
       
       try {
            const newcontact = await pool.query('INSERT INTO notes(name, email) VALUES($1, $2) RETURNING *', [name, email]);
            console.log(newcontact.rows[0]);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
         <h1>Form</h1>   
        <form action={createForm}>
            <input type="text" name="name" /><br /><br />
            <input type="email" name="email" />
            <button type="submit">Save</button>    
        </form> 
    </>
    )
}
 
export default About;