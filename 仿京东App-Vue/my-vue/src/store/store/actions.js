const actions = {
    hideNav(content) {
        content.commit('HIDENAV');
    },
    showNav(content) {
        content.commit('SHOWNAV');
    },
    addProduct({ commit }, data) {
        commit('ADDPRODUCT', data);
    },
    delProduct({ commit }) {
        commit('DELPRODUCT');
    },
    gIncrement({ commit }, data) {
        commit('GINCREMENT');
    },
    gDecrement({ commit }, data) {
        commit('GDECREMENT');
    },
    delCartData({ commit }, data) {
        commit('DELCARTDATA');
    },
    allCheckStatue({ commit }, data) {
        commit('ALLCHECKSTATUE')
    },
    checkChange({ commit }) {
        commit('CHECKCHANGE')
    }
}
export default actions;