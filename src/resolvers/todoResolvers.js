
import { getTodos } from "../services/jsonplaceholder.js";
import {translate} from "@vitalets/google-translate-api";
export const resolvers = {
    Query : {
        todos : async () => {
            const data =  await getTodos()
            const result = await translate(data[0].title,{
                from : "la",
                to : "en"
            })
            console.log(result.text)
            const translateData = data.slice(0,5).map( async (e)=>{
                const translateTitle = await translate(e.title,{
                    from : "la",
                    to : "en"
                })
                return {...e,title:translateTitle.text}
            })
            return translateData
        }
    }
}