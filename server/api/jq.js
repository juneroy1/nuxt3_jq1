 export default defineEventHandler(async (event) => {

    // handle query params
    // const { name } = useQuery(event) old method
    const { name } = getQuery(event); //new method
    const { currencyKey } = useRuntimeConfig();
    const { data } = await $fetch(
      `https://api.currencyapi.com/v3/currencies?apikey=${currencyKey}`
    );



    const {age, name:name_post} = await readBody(event)
    return {
      message: {message: `Hello ${name_post}, you are ${age} years old`, data},
    };
 })