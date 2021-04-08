<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="*, 50">
          <Label class="action-bar-title" text="Home" col="0" colSpan="2"/>

          <Label class="fas" col="1" text.decode="&#xf0c9;" @tap="onDrawerButtonTap"/>
        </GridLayout>
      </ActionBar>

        <GridLayout class="page__content">
            <Label class="page__content-icon fas" text.decode="&#xf015;"/>
        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";  
  import LoginPage from './LoginPage';

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
      onScanResult(){
        console.log("Scan")
      },
    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
