<template>
    <Page class="page" backgroundColor="rgba(67, 55, 142, 0.7)">
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
                    <Button row="5" class="buttonLogin" text="Connexion" @tap="onLoginTap" />
                    <Button row="6" class="buttonLogin" text="Nouveau compte" @tap="onRegisterTap" />
                </GridLayout>

    </Page>
</template>

<script>

    import Home from "./Home";
    import RegisterPage from "./RegisterPage";
    import { Http } from '@nativescript/core';



    export default {
        data() {
            return {
                usernameLoginValue: '',
                passwordLoginValue: '',
            }
        },
        methods: {
            async fetchToken(){
                await Http.request({
                    url: "http://gostyle.thibaultdct.fr:8080/gostyle/authenticate",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({
                            username: this.usernameLoginValue,
                            password: this.passwordLoginValue,
                    })
                }).then(response => this.setUserToken(response.content.toJSON().token));
            },
            async fetchUserData(){  
                await Http.request({
                    url: "http://gostyle.thibaultdct.fr:8080/gostyle/users/byPseudo/"+this.usernameLoginValue,
                    method: "GET",
                    headers: { "Content-Type": "application/json", "Authorization": "Bearer "+this.getUserToken()},
                }).then(response => this.setUserId(response.content.toJSON().id));
            },
            async fetchCoupons(){
                await Http.request({
                    url: "http://gostyle.thibaultdct.fr:8080/gostyle/user_coupons/all/"+this.getUserId(),
                    method: "GET",
                    headers: { "Content-Type": "application/json", "Authorization": "Bearer "+this.getUserToken()},
                }).then(response => this.setCoupons(response.content.toJSON()));
            },
            onRegisterTap() {
                this.$navigateTo(RegisterPage);
            },
            async onLoginTap() {
                this.$root.isConnected = true;
                this.$root.userName = this.usernameLoginValue;
                await this.fetchToken();
                await this.fetchUserData();
                await this.fetchCoupons();
                this.$navigateTo(Home);
            },
            getUserToken(){
                return this.$root.userToken;
            },
            setUserToken(args){
                this.$root.userToken = args;
            },
            setUserId(args){
                this.$root.userId = args;
            },
            getUserId(){
            return this.$root.userId;
            },
            setCoupons(args){
                this.$root.coupons = args;
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
        border-radius: 20;
    }
</style>