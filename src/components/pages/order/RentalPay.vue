<template>
  <div class="container">
    <div class="my-5" style="width: 100%">
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
    <p>1. Basic usage</p>
    <div class="date">
      <font-awesome-icon
        icon="fa-solid fa-calendar-days"
        transform="down-2.5 right-20"
        style="z-index: 1; cursor: default"
        @click="clickCalIcon('dp1')"
      />
      <Datepicker
        v-model="picked"
        :ref="inputs.dp1"
        class="datepicker"
        :locale="locale"
        :weekStartsOn="0"
        :inputFormat="inputFormat"
        :clearable="true"
      />
      <button type="button" @click="getCalValue('dp1')">Get Value</button>
    </div>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>

    <hr />

    <hr />

  </div>
</div>
</template>

<script>
import { ref, reactive, defineComponent } from 'vue';
// vue3-datepicker
import Datepicker from 'vue3-datepicker';
import { ko } from 'date-fns/locale';
import { defineRefs } from './helper.js';

export default defineComponent({
  name: 'App',
  components: {
    Datepicker,
  },
  setup() {
    // :weekStartsOn="0" 'Sunday' is first
    const picked = ref(new Date());
    const locale = reactive(ko);
    const inputFormat = ref('yyyy-MM-dd');

    // dp2
    const now = new Date();
    const dp2 = ref(new Date());
    const dp2From = ref(new Date(now.setDate(now.getDate() - 7)));
    const dp2To = ref(new Date(now.setDate(now.getDate() + 14)));
    // [from, to]'s value before changing value
    let oldVal = '';

    // dp3
    const dp3 = ref(new Date());

    // refs
    // const datepicker1 = ref(null);
    // dynamic refs
    const inputs = defineRefs(['dp1', 'dp2From', 'dp2To', 'dp2', 'dp3']);

    const clickCalIcon = (refId) => {
      const dp = inputs[refId].value;
      // console.log(dp);
      dp.inputRef.focus();
    };
    const getCalValue = (refId) => {
      console.log(refId);
      // console.log(datepicker1.value.input);
      // ref="datepicker1"

      const dp = inputs[refId].value;
      // console.log(dp);
      alert(dp.input);
    };
    const setOldValue = (val) => {
      // console.log(val);
      oldVal = val;
    };
    const validateFromTo = (target, refFrom, refTo) => {
      setTimeout(() => {
        const dpFrom = inputs[refFrom].value;
        const dpTo = inputs[refTo].value;
        // alert(dpFrom.input + ' ~ ' + dpTo.input);

        if (dpFrom.input > dpTo.input) {
          alert('Validation Error!!');

          let date = null;
          if (oldVal) {
            const arrOldVal = oldVal.split('-');
            date = new Date(
              Number(arrOldVal[0]),
              Number(arrOldVal[1]) - 1,
              Number(arrOldVal[2]),
            );
          }
          // console.log(date);

          if (target === 'from') {
            dp2From.value = date;
          } else if (target === 'to') {
            dp2To.value = date;
          }
          return;
        }
      }, 10);
    };
    const isTodayOver = (date) => {
      return date > new Date();
    };

    return {
      picked,
      locale,
      inputFormat,
      // datepicker1,
      inputs,
      clickCalIcon,
      getCalValue,
      dp2From,
      dp2To,
      dp2,
      setOldValue,
      validateFromTo,
      dp3,
      isTodayOver,
    };
  },
});
</script>

<style scope>
div {
  text-align: center;
}
div.date {
  display: inline-flex;
}
</style>