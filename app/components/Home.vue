<template>
    <Page class="page" backgroundColor="rgba(67, 55, 142, 0.7)">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="*, 50">
          <Label class="action-bar-title" text="Home" col="0" colSpan="2"/>

          <Label class="fas" col="1" text.decode="&#xf0c9;" @tap="onDrawerButtonTap"/>
        </GridLayout>
      </ActionBar>


        <GridLayout class="page__content">

            <Button class="scan-btn" text="Scanner QRC" @tap="scanQRCode" />
        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";  
  import LoginPage from './LoginPage';
  import { Http } from '@nativescript/core';


  export default {
    mounted() {
      if(!this.$isConnected){
        this.$navigateTo(LoginPage);
      }
    },
    components: {
      LoginPage,
    },
    methods: {
      onDrawerButtonTap() {
        utils.showDrawer();
      },
      async scanQRCode(){  
          await Http.request({
              url: "http://gostyle.thibaultdct.fr:8080/gostyle/user_coupons/addToUser?coupon_id=f5482c2f-ad69-4dd6-b72c-849c56100ace&user_id=af08f8cd-5a9f-414a-9e08-cfffaf0d90ad",
              method: "GET",
              headers: { "Content-Type": "application/json"},
          });
          await this.fetchCoupons();
          this.$forceUpdate();
      },
      async fetchCoupons(){
          await Http.request({
              url: "http://gostyle.thibaultdct.fr:8080/gostyle/user_coupons/all/"+this.getUserId(),
              method: "GET",
              headers: { "Content-Type": "application/json", "Authorization": "Bearer "+this.getUserToken()},
          }).then(response => this.setCoupons(response.content.toJSON()));
      },
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';
    .coverImage {
      background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fphototrend.fr%2F2016%2F03%2Fmp-171-utiliser-cadrage-vertical-ameliorer-vos-photos-de-paysage%2F&psig=AOvVaw3H_spVEiWQVHkZqD-rTKaa&ust=1617999727572000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCJquu87-8CFQAAAAAdAAAAABAJg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    .scan-btn{
      border-radius: 15;
    }

    // Custom styles
</style>
