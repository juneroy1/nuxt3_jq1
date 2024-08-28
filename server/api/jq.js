 export default defineEventHandler((event) => {

    // handle query params
    // const { name } = useQuery(event) old method
    const { name } = getQuery(event); //new method
    return {
      message: `Hello ${name}`,
    };
 })