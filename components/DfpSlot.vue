<template>
  <div :id="id"></div>
</template>
<script>
export default {
  name: "DfpSlot",
  props: { size: Array, path: String, id: String },
  beforeCreate() {
    if (process.client) {
      window.googletag.cmd.push(() => {
        window.googletag.destroySlots();
      });
    }
  },
  mounted() {
    const { path, size, id } = this;
    // 取得目前所有的廣告 obj
    let slotObjMap = window.googletag.pubads().getSlotIdMap();
    // 轉成 array
    let slotArray = $.map(slotObjMap, function (value, index) {
      let slotArraySp = index.split("_");
      let slotLess = slotArraySp[slotArraySp.length - 1];
      let slotArrayFn = index.replace("_" + slotLess, "");
      return [slotArrayFn];
    });

    // 現在註冊的 path 沒有在 array 中才執行
    if ($.inArray(String(this.path), slotArray) < 0) {
      window.googletag.cmd.push(() => {
        let slotObj = window.googletag
          .defineSlot(this.path, this.size, this.id)
          .addService(window.googletag.pubads());

        window.googletag.pubads().enableSingleRequest();
        window.googletag.enableServices();
        window.googletag.display(id);
      });
    }
  },
};
</script>