<template>
  <div>
    <MenuNav />
    <Basket/>
    <div class="container">
      <div class="sort">
        <div class="sort-title">Сортировать по:</div>
        <div @click="openSort" class="sort-select">
          <div class="sort-selected-text" ref="SelectedText">цене</div>
          <div class="sort-select-icon">
            <svg width="5" height="3" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D"/>
            </svg>
          </div>
        </div>
        <div @click="openSort" class="sort-list" :class="{ active: eleActive }">
          <div class="sort-list-item" @click="sortItems('price')">По цене</div>
          <div class="sort-list-item" @click="sortItems('rating')" >По популярности </div>
        </div>
      </div>
      <div class="cart-list">
        <CartItem v-for="item in items" :key="item.id" :item="item"/>
      </div>
      <Sidebar />
    </div>
  </div>
</template>

<script>
import Basket from "~/components/Basket";
import Sidebar from "~/components/Sidebar";
import MenuNav from "~/components/MenuNav";
import CartItem from "~/components/CartItem";

export default {
  components: { CartItem, Sidebar, MenuNav, Basket },

  data() {
    return {
      items: [],
      eleActive: false,
      basketOpen: false,
      basketCount: 0,
    }
  },

  methods: {
    openSort() {
      this.eleActive = !this.eleActive
    },

    sortItems(e) {
      if (e === 'price') {
        this.items = this.items.sort((a, b) => b.price - a.price);
        this.$refs.SelectedText.textContent = 'цене'
      }
      if (e === 'rating') {
        this.items = this.items.sort((a, b) => b.rating - a.rating);
        this.$refs.SelectedText.textContent = 'популярности'
      }
    }
  },

  mounted() {
    this.$axios
      .get(`https://frontend-test.idaproject.com/api/product`)
      .then(res => {
        this.items = res.data
    });

    this.$store.commit('checkCache')
  },
}
</script>

<style scoped>

@media (max-width:992px) {
  .container {
    margin-left: auto !important;
    display: flex;
    justify-content: center;
  }
  .cart-list {
    justify-content: center;
  }
}

.container {
  margin-left: 248px;
  margin-top: 163px;
}
.cart-list {
  display: flex;
  flex-wrap: wrap;
  z-index: 8;
}

.sort {
  z-index: 11;
  position: fixed;
  top: 108px;
  right: 88px;
  display: flex;
}

.sort-select {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 30;
}

.sort-selected-text {
  margin-left: 3px;
  color: #59606D;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  cursor: pointer;
  position: relative;
z-index: 30;
}

.sort-select-icon{
  height: 100%;
  position: absolute;
  top: -2px;
  right: -8px;
  height: 3px;
}

.sort-title {
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #1F1F1F;
}

.sort-list {
  z-index: 8;
  display: none;
  position: absolute;
  left: 0;
  width: 100%;
  right: 0;
  background: #FFFFFF;top: calc(100% + 6px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.sort-list.active {
  display: block;
}

.sort-list-item {
  width: 100%;
  color: #959DAD;
  cursor: pointer;
  padding: 12px 0 12px 12px;
  z-index: 8;
}

.sort-list-item:hover {
  color: #1f1f1f;
  background: #f8f8f8;
}
</style>
