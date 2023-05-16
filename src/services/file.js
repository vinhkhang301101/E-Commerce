import { FILE_API } from "@/config/api"
import { http } from "@/utils"

export const fileService = {
    uploadFIle(file){
        const formData = new FormData()
        formData.set('file', file)
        return http.post(`${FILE_API}`, formData)
    }
}