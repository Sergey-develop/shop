<template>
  <div>
    <Any />
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import MenuNav from "~/components/MenuNav.vue";
import Sidebar from "~/components/Sidebar.vue";
import Cards from "~/components/Cards.vue";
import Any from "~/pages/Any.vue"
import Basket from "~/components/Basket.vue";

export default Vue.extend({
  components: { Basket, Cards, Sidebar, MenuNav, Any }
})
</script>

<style>
/*@import url('@/assets/media.css');*/
.overflow-hidden {
  overflow: hidden !important;
}
</style>

