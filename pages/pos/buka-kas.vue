<template>
  <div>
    <div>
      <b-card>
        <h2>Buka Kas</h2>
        <br />
        <b-form>
          <div class="row">
            <div class="col">
              <money-input money-value="500"></money-input>
              <money-input money-value="1.000"></money-input>
              <money-input money-value="2.000"></money-input>
              <money-input money-value="5.000"></money-input>
            </div>
            <div class="col">
              <money-input money-value="10.000"></money-input>
              <money-input money-value="20.000"></money-input>
              <money-input money-value="50.000"></money-input>
              <money-input money-value="100.000"></money-input>
            </div>
          </div>
        </b-form>
        <br />
        <b-alert show variant="info">
          <b-row>
            <b-col align="start"><b>Total Kas :</b></b-col>
            <b-col></b-col>
            <b-col align="end"><b>Rp 10.000.000,00</b></b-col>
          </b-row>
        </b-container>
      </b-alert>
      <div class="pull-right">
        <b-button variant="primary" class="mr-sm-2">
          <i class="fa fa-floppy-o"></i>
          Simpan
        </b-button>
        <b-button variant="secondary">
          <i class="fa fa-ban"></i>
          Batal</b-button>
        </div>
      </b-card>

    </div>
  </div>
</template>
<script>
import MoneyInput from '~/components/MoneyInput'

export default {
  components: {
    MoneyInput
  }
}
</script>
