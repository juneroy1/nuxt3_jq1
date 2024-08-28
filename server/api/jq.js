 export default defineEventHandler(async (event) => {

    // handle query params
    // const { name } = useQuery(event) old method
    const { name } = getQuery(event); //new method


    const {age, name:name_post} = await readBody(event)
    return {
      message: `Hello ${name_post}, you are ${age} years old`,
    };
 })