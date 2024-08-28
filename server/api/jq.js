 export default defineEventHandler(async (event) => {

    // handle query params
    // const { name } = useQuery(event) old method
    const { name } = getQuery(event); //new method

    const { data } = await $fetch(
      "https://api.currencyapi.com/v3/currencies?apikey=cur_live_27e9nuVF3j90eubaFn02niLvPIB9m2FCTTp9qbrF"
    );
    const {age, name:name_post} = await readBody(event)
    return {
      message: `Hello ${name_post}, you are ${age} years old`,
    };
 })