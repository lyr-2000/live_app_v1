import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators'

import {store} from "@/store";

@Module({
    name: 'loading', dynamic: true, namespaced: true, store,
})
class Loading extends VuexModule {
    _loadingStatus = false;

    @Mutation
    setLoading(loading:boolean) {
        // console.log("设置 loaing")
        this._loadingStatus = loading;
    }

    get loadingStatus() {
        return this._loadingStatus;
    }

}
export const loadingModule = getModule(Loading)
