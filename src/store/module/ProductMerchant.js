import {ProductMerchantApi} from '@/api'

const state  = () => ({
  productMerchants: {},
  productMerchant: {},
  productMerchantList: {},
  merchantList: []
})

const getters = {

}

const actions = {

  async getAllMerchant (store) {
    await ProductMerchantApi.getMerchantListApi().then((merchantList) => {
      store.commit('SET_MERCHANT_LIST', merchantList)
    }).catch(error => {
      store.dispatch("Notification/setNotification", error, {root: true})
    })
  },

  async getProductMerchant (store, {productId, pagination}) {
    await ProductMerchantApi.getProductMerchantApi(productId, pagination).then((productMerchants) => {
      store.commit('SET_PRODUCT_MERCHANTS', productMerchants)
    }).catch(error => {
      store.dispatch("Notification/setNotification", error, {root: true})
    })
  },

  async getProductMerchantList (store, productId) {
    await ProductMerchantApi.getProductMerchantListApi(productId).then((productMerchantList) => {
      store.commit('SET_PRODUCT_MERCHANT_LIST', productMerchantList)
    }).catch(error => {
      store.dispatch("Notification/setNotification", error, {root: true})
    })
  },

  async getProductMerchantByProductMerchantId (store, {productId, productMerchantId}) {
    await ProductMerchantApi.getProductMerchantByProductMerchantIdApi(productId, productMerchantId).then((productMerchant) => {
      store.commit('SET_PRODUCT_MERCHANT', productMerchant)
    }).catch(error => {
      store.dispatch("Notification/setNotification", error, {root: true})
    })
  },

  async createProductMerchant (store, {productMerchant, router}) {
    await ProductMerchantApi.createProductMerchantApi(productMerchant).then((productMerchant) => {
      store.commit('SET_PRODUCT_MERCHANT', productMerchant)
      router.push({name: 'product-merchant-list'})
    }).catch(error => {
      store.dispatch("Notification/setNotification", error, {root: true})
    })
  },

  async updateProductMerchant (store, {productMerchant, router}) {
    await ProductMerchantApi.updateProductMerchantApi(productMerchant).then((productMerchant) => {
      store.commit('SET_PRODUCT_MERCHANT', productMerchant)
      router.push({name: 'product-merchant-list'})
    }).catch(error => {
      store.dispatch("Notification/setNotification", error, {root: true})
    })
  },

  async activateProductMerchant (store, productMerchant) {
    await ProductMerchantApi.activateProductMerchantApi(productMerchant).then((productMerchant) => {
      store.commit('SET_PRODUCT_MERCHANT', productMerchant)
    }).catch(error => {
      store.dispatch("Notification/setNotification", error, {root: true})
    })
  },

  async blockProductMerchant (store, productMerchant) {
    await ProductMerchantApi.blockProductMerchantApi(productMerchant).then((productMerchant) => {
      store.commit('SET_PRODUCT_MERCHANT', productMerchant)
    }).catch(error => {
      store.dispatch("Notification/setNotification", error, {root: true})
    })
  },
  
  async deleteProductMerchant (store, productMerchant) {
    await ProductMerchantApi.deleteProductMerchantApi(productMerchant).then((productMerchant) => {
      store.commit('SET_PRODUCT_MERCHANT', productMerchant)
    }).catch(error => {
      store.dispatch("Notification/setNotification", error, {root: true})
    })
  }
}

const mutations = {
  'SET_PRODUCT_MERCHANT' (state, productMerchant) {
    state.productMerchant = productMerchant
  },
  'SET_PRODUCT_MERCHANTS' (state, productMerchants) {
    state.productMerchants = productMerchants
  },
  'SET_PRODUCT_MERCHANT_LIST' (state, productMerchantList) {
    state.productMerchantList = productMerchantList
  },
  'SET_MERCHANT_LIST' (state, merchantList) {
    state.merchantList = merchantList
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}