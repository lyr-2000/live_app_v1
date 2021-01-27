import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators'

import {store} from "@/store";

interface UserInfo {
    username?:string
    userId?:number
}
import axios from "axios";

@Module({
    name: 'loading', dynamic: true, namespaced: true, store,
})
class Loading extends VuexModule {
    login=false
    username?:string

    userId?:number
    @Mutation
    setUserInfo(userInfo:UserInfo) {
        this.username = userInfo.username
        this.userId = userInfo.userId
    }

    // @Action({commit:'setUserInfo'})
    // getUserInfo(userId:number) {
    //     const x = await  axios({
    //         method:"GET",
    //         url:"/login"
    //     })
    // }

}
export const loadingModule = getModule(Loading)
