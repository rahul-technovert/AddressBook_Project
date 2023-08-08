import axios, {AxiosInstance, AxiosResponse, AxiosError} from "axios";
import { IContact } from "../interface/IContact";


const instance : AxiosInstance = axios.create({
    
     baseURL : "https://localhost:7058/api/contacts"
});


const requests = {
    get : async (url : string) => {
        const response = await instance.get<IContact[]>(url);
        return response.data;
    },
    post : async (url :string, body : IContact) => {
        const response = await instance.post<IContact>(url, body);
        return response.data;
    },
    update : async (url :string, body : IContact) => {
        const response = await instance.put<IContact>(url, body);
        return response.data;
    },
    delete : async (url :string) => {
        const response = await instance.delete<number>(url);
        return response.data;
    },
}

const HttpContact = {
    get : () : Promise<IContact[]> => requests.get(""),
    post : (body : IContact) : Promise<IContact>  => requests.post("", body), 
    update : (id : number, body : IContact) => requests.update(`${id}`, body),
    delete : (id : number) => requests.delete(`${id}`)
}

export default HttpContact;