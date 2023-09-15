import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        name:"xx"
    }, 
    getters:{},
    mutations:{},
    actions:{}
})















// state
// -Vue의 data와 같음
// -View와 직접적으로 연결되어있는 Model
// -state는 mutation 을 통해서만 변경 가능
// -> mutation을 통해 state가 변경이 일어나면 View가 업데이트

// mutations
// -state를 변경하는 유일한 방법
// -commit을 통해서 호출 
// -첫 번째 인자는 state, 두 번째 인자는 payload

// actions
// -비동기 작업 가능
// -mutation을 호출하기 위한 commit 가능
// -action에서도 mutation을 통해 state 변경 가능
// -dispatch를 통해 호출
// -첫 번째 인자는 context, 두 번째 인자는 payload
