<template lang="html">
    <GridLayout rows="auto, *" class="nt-drawer__content">
      
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
                    <Label col="3" row="0" :text="promocode.couponName" class="p-r-10 couponName"/>
                    <Label col="3" row="1" :text="promocode.reduction + ' de réduction sur ' + promocode.item" class="p-r-10"/>
                    <Label col="3" row="2" :text="'Valide jusqu\'au: ' + promocode.validite" class="p-r-10"/>
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


  export default {
    data() {
      return {
        promoCodes: [
          {
            id: 1,
            couponName: "T10",
            reduction: "10%",
            item: "les T-shirt",
            validite: "DD/MM/YYYY"
          },
          {
            id: 2,
            couponName: "CHAUS20",
            reduction: "20%",
            item: "les chaussures",
            validite: "DD/MM/YYYY"
          },
          {
            id: 3,
            couponName: "CHAP3",
            reduction: "30%",
            item: "les chapeaux",
            validite: "DD/MM/YYYY"
          },
          {
            id: 4,
            couponName: "XUGTH",
            reduction: "40%",
            item: "votre commande",
            validite: "DD/MM/YYYY"
          },
        ]
      };
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
      ToLoginPage(){
                console.log("Button was pressed");

        this.$navigateTo(Browse)
      }
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';
    
    .couponName{
      font-size: 15em;
      font-weight: bold;
    }
    .couponBox{
      justify-self: center;
      align-self: center;
      margin-left: 10;
      margin-top: 20;
      border: solid;
    }
</style>
