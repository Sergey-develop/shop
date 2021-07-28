<template>
  <div class="basket" :class="{ active: this.$store.state.bOpen }">
    <div class="basket-overlay" @click="close"/>
    <div class="basket-wrap">
      <div class="basket-wrap-header">
        <div class="basket-wrap-header-title">Корзина</div>
        <div class="basket-wrap-header-close" @click="close">+</div>
      </div>
        <div class="basket-wrap-body" v-if="foo > 0">
          <div class="basket-wrap-desc">Товары в корзине</div>
          <BasketCart v-for="item in $store.state.bItem" :key="item.id" :item="item"/>
        </div>
      <div class="basket-wrap-body" v-else>
        <div class="basket-empty">
          Пока что вы ничего не добавили
          в корзину.
        </div>
        <button class="basket-submit" @click="close">Перейти к выбору</button>
      </div>
      <BasketForm/>
    </div>
  </div>
</template>

<script>
import BasketCart from "~/components/BasketCart";
import BasketForm from "~/components/BasketForm";
export default {

  components: { BasketForm, BasketCart },

  data() {
    return{
      isOpen: this.$store.state.bOpen
    }
  },

  methods: {
    close() {
       this.$store.commit('bOpen')
      console.log(this.$store.state.bOpen)
      /*this.$store.dispatch('fff')*/
    }
  },

  computed: {
    foo() {
      return this.$store.getters.GetCount
    }
  }

}
</script>


<style scoped>

.basket {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: none;
}

.basket.active {
  display: block;
}

.basket-overlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  opacity: 0.8;
}

.basket-wrap {
  overflow-y: auto;
  width: 460px;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background: #FFFFFF;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0 0 8px;
  padding: 52px 48px 0 48px;
}

.basket-wrap-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.basket-wrap-header-close {
  font-size: 40px;
  line-height: 40px;
  width: 40px;
  text-align: center;
  transform: rotate(45deg);
  cursor: pointer;
}

.basket-wrap-desc {
  margin-top: 24px;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #59606D;
  margin-bottom: 16px;
}

.basket-wrap-body{
  margin-top: 16px ;
}

.basket-wrap-header-title {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #1F1F1F;
}

.basket-empty {
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 24px;
}

.basket-submit {
  background: #1F1F1F;
  border-radius: 8px;
  color: #FFFFFF;
  width: 100%;
  height: 50px;
}
</style>
