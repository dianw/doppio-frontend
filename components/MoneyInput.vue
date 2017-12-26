<template>
  <b-form-group :id="'label-denom' + moneyValue" :label="'Pecahan Rp ' + moneyValue + ',00'" :label-for="'input-denom' + moneyValue">
    <b-input-group>
      <b-btn variant="primary">
        <i class="fa fa-minus"></i>
      </b-btn>
      <b-form-input :id="'input-denom' + moneyValue"  type="number" placeholder="0"></b-form-input>
      <b-btn variant="primary">
        <i class="fa fa-plus"></i>
      </b-btn>
    </b-input-group>
  </b-form-group>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: [
    'moneyValue'
  ]
}
</script>
