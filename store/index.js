
export const state=()=>({
    test2State:"test2State",
    totalPrice:789
})

export const mutations={
    settest2State(state,val){
        console.log(state.state.str);
        state.test2State=val;
    }
}
export const actions={
    ayncTest(context){
        context.commit(settest2State,"asynctest2")
    }
}