import type { ApiGetInformation } from "../@types/Information"
import { api } from "./api"

//Information
// export const getInformation = async (locale: string) => {
//     return await api<ApiGetInformation>({
//         endpoint: `informations/${locale}`
//     })
// }

export const getInformation = async (
    locale: string
): Promise<{
    data?: ApiGetInformation
    error?: string
}> => {
    return api<ApiGetInformation>({
        endpoint: `informations/${locale}`
    })
}