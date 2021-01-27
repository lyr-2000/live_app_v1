import axios, {AxiosPromise} from "axios";
import {apiUrl} from "@/common/config";

import RegisterUser from '@/common/domain/RegisterUser.ts'
import {Result} from "@/common/domain/Result";

export function getCode(data:RegisterUser):AxiosPromise<Result<RegisterUser>> {
    return axios({
        method:"POST",
        url:'/register',
        data
    })
}
//用户注册接口
interface RegisterCodeDTO {
    //id
    id?:number;
    //邮箱验证码
    code:string;
}
export function registerByCode(data:RegisterCodeDTO):AxiosPromise<Result<any>> {
    console.log(data)
    return axios({
        method:"POST",
        url:`/register/verify/${data.id}`,
        params:data
    })
}
