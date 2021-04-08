<template lang="html">
    <GridLayout rows="auto, *" class="nt-drawer__content" backgroundColor="rgba(67, 55, 142, 1)">
      
        <StackLayout v-if="isConnected()" row="0" class="nt-drawer__header">
            <Image class="nt-drawer__header-image fas " src.decode="font://&#xf2bd;"/>
            <Label class="nt-drawer__header-brand" :text="getUserName()"/>
        </StackLayout>
        <StackLayout v-else row="0" class="nt-drawer__header">
            <Image class="nt-drawer__header-image fas " src.decode="font://&#xf2bd;"/>
            <Button class="nt-drawer__header-brand" text="Se connecter" @tap="ToLoginPage()"/>
        </StackLayout>

        <ScrollView row="1" class="nt-drawer__body">
            <StackLayout>
                <GridLayout v-for="promocode in promoCodes" :key="promocode.id" class="couponBox" columns="10%, 20%, 10%, auto" rows="2* , 2*, 2*">
                    <Label col="1" row="1" rowSpan="3" text.decode="&#xf02c;" class="nt-icon fas"/>
                    <Label col="3" row="0" :text="promocode.code" class="p-r-10 couponName" :class="{'used' : promocode.is_used}"/>
                    <Label col="3" row="1" :text="promocode.pourc_reduc + '% de réduction sur ' + promocode.libelle" class="p-r-10 libelle"/>
                    <Label col="3" row="2" :text="'Valide jusqu\'au: ' + promocode.date" class="p-r-10"/>
                </GridLayout>
            </StackLayout>
        </ScrollView>

    </GridLayout>
</template>

<script>
  import Home from "./Home";
  import * as utils from "~/shared/utils";
  import LoginPage from "./LoginPage";
  import Browse from "./Browse";
  import { Http } from '@nativescript/core';


  export default {
    data() {
      return {
      };
    },
    computed:{
      promoCodes: function () {
        return this.$root.coupons
      },
    },
    components: {
      Home,
      LoginPage,
    },
    methods: {
      onNavigationItemTap(component) {
        this.$navigateTo(component, {
          clearHistory: true
        });
        utils.closeDrawer();
      },
      isConnected(){
        return this.$root.isConnected;
      },
      getUserName(){
        return this.$root.userName;
      },
      getUserToken(){
        return this.$root.userToken;
      },
      ToLoginPage(){
                console.log("Button was pressed");

        this.$navigateTo(Browse)
      },
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';
    
    .nt-drawer__header-brand{
      margin-top: 15;
    }
    .couponName{
      font-size: 15em;
      font-weight: bold;
    }
    .couponName.used{
      text-decoration: line-through;
      text-decoration-thickness: 10;
    }
    .couponBox{
      justify-self: center;
      align-self: center;
      margin-left: 10;
      margin-top: 20;
      border: solid;
    }
</style>
