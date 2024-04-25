# nextjsbasictoadvance

siddharthmehra~$npx create-next-app@latest

    What is your project named? … chapter
    Would you like to use TypeScript? … No
    Would you like to use ESLint? … No
    Would you like to use Tailwind CSS? …  Yes
    Would you like to use `src/` directory? …  Yes
    Would you like to use App Router? (recommended) …  Yes
    Would you like to customize the default import alias (@/*)? … No

chapter 1 : Basic

chapter 2 : Data Fetching

chapter 3 : Backend
            (Create API similar to what we do in Express)
            Create a folder "api" inside "app" folder.

chapter 4 : Mongo DB (Without Server Action)
        a. npm i mongoose
        
        Note : Option "b" and "c" are for initialising mongoose connection using env. 
               Option "d" is for creating the schema for the database. 
               Now to create connection "connectDB()" has to be called in "api/posts/route.js" i.e. Backend.

        b. "lib" folder --- connectDB.js
                import mongoose from "mongoose"
                export default async () => {
                    try {
                        const DB_OPTIONS = {
                            dbName : process.env.DBNAME,
                            user : process.env.DBUSERNAME,
                            pass : process.env.DBPASSWORD,
                            authsource : process.env.DBAUTHSOURCE
                        }
                        await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS)
                        console.log("Connected Successfully...")
                    } catch (error) {
                        console.log(error)
                    }
                }

        c. ".env.local" folder
                DATABASE_URL = "mongodb+srv://<username>:<password>@cluster0.zdnidu4.mongodb.net"
                DBNAME = "newblog"
                DBUSERNAME = ""
                DBPASSWORD = ""
                DBAUTHSOURCE = ""

        Note : Username and Password.

        d. "models" folder --- Post.js
                import mongoose from "mongoose";
                const postSchema = new mongoose.Schema({
                    title : {type : String , required : true , trim : true},
                    body : {type : String , required : true , trim : true}
                })
                const Post = mongoose.models.Post || mongoose.model('Post', postSchema)
                export default Post    


chapter 5 : Mongo DB (Server Action) + CRUD
