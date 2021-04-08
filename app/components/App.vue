<template lang="html">
    <RadSideDrawer ref="drawer" drawerLocation="Right" gesturesEnabled="true" :drawerTransition="transition">
        <StackLayout ~drawerContent backgroundColor="#43378E">
            <DrawerContent/>
        </StackLayout>
        <Frame ~mainContent ref="drawerMainContent" >
            <Home/>
        </Frame>
    </RadSideDrawer>
</template>

<script>
  import DrawerContent from './DrawerContent'
  import Home from './Home'
  import { SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';

  export default {
    data() {
      return {
        transition: new SlideInOnTopTransition()
      }
    },

    components: {
      DrawerContent,
      Home
    }
  }
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
