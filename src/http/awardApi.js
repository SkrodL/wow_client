import {$host} from "./index";

export const getAwards = async (heroId) => {
    const {data} = await $host.get('api/award', {params: {heroId}})
    return data
}