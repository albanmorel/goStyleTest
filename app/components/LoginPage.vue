<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="*, 40">
          <Label class="action-bar-title" text="Connexion" col="0" colSpan="2" />

          <Label class="fas" col="1" text.decode="&#xf2f6;" />
        </GridLayout>
      </ActionBar>
                <GridLayout rows="auto,auto,auto,auto,auto,auto,auto">
                    <Label row="1" class="loginForm resizeTop "
                        text="Pseudo :" />
                    <TextField row="2" class="loginForm resizeBottom"
                        v-model="usernameLoginValue" hint="Ex : Dupont44 " />
                    <Label row="3" class="loginForm" text="Mot de passe :" />
                    <TextField row="4" secure="true"
                        class="loginForm resizeBottom"
                        v-model="passwordLoginValue" hint="Ex : 123AbCd" />
                    <Button row="5" class="buttonLogin" text="Connexion"
                        @tap="onLoginTap" />
                    <Button row="6" class="buttonLogin" text="Nouveau compte"
                        @tap="onRegisterTap" />
                </GridLayout>

    </Page>
</template>

<script>

    import Home from "./Home";
    import RegisterPage from "./RegisterPage";
    export default {
        data() {
            return {
                usernameLoginValue: '',
                passwordLoginValue: '',
            }
        },
        methods: {
            onRegisterTap() {
                this.$navigateTo(RegisterPage);
            },
            onLoginTap() {
                this.$root.isConnected = true;
                this.$root.userName = this.usernameLoginValue;
                this.$navigateTo(Home);
            }
        }
    };
</script>

<style scoped>
    .loginForm {
        font-size: 16;
        margin-left: 50;
        margin-right: 50;
    }
    .resizeTop {
        margin-top: 50;
    }
    .resizeBottom {
        margin-bottom: 50;
    }
    .buttonLogin {
        background-color: #43378E;
    }
</style>