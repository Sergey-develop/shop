<template>
  <div class="sidebar">
    <div class="sidebar-title">
     Каталог
   </div>
    <div class="sidebar-list">
      <div class="sidebar-items" @click="sortCat" :data-id="item.id" v-for="item in items" :key="item.id">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      items: [],
    }
  },

  methods: {
    sortCat(e) {
      this.$el.querySelectorAll('.sidebar-items').forEach(el=>el.classList.remove('active'))
      let elem = e.target
      elem.classList.add('active')
      this.$axios.get(`https://frontend-test.idaproject.com/api/product`)
        .then((r) => {

          this.$parent.items = r.data.filter(e => Number(elem.getAttribute('data-id')) === e.category)
        })
    },
    open() {
      this.$el.classList.add('active')
      console.log(23)
    }
  },

  mounted() {
  this.$axios
    .get(`https://frontend-test.idaproject.com/api/product-category`)
    .then((r) => {
      this.items = r.data
    });
  }
}


</script>

<style scoped>

.sidebar {
  position: fixed;
  left: 0;
  top: 66px;
  width: 248px;
  padding-left: 88px;
  z-index: 999;
}

@media (max-width:992px) {
  .sidebar {
    padding-left: 20px;
    left: -248px;
  }
}

.sidebar-title {
  font-size: 32px;
  line-height: 41px;
  font-family: "PT Sans";
  font-weight: bold;
  font-style: normal;
  color: #1f1f1f;
}

.sidebar-list {
  margin-top: 24px;
}

.sidebar-items {
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: flex-end;
  color: #959DAD;
}

.sidebar-items.active {
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: flex-end;
  text-decoration-line: underline;
  color: #1F1F1F;
}

.sidebar-items:hover {
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: flex-end;
  color: #59606D;
}

</style>
