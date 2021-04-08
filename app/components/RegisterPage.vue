<template>
    <Page class="page" backgroundColor="rgba(67, 55, 142, 0.7)">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="*, 50">
          <Label class="action-bar-title" text="Créer un compte" col="0" colSpan="2" />

          <Label class="fas" col="1" text.decode="&#xf2f6;" />
        </GridLayout>
      </ActionBar>
        <GridLayout
            rows="auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto">
            <Label row="1" class="loginForm resizeTop "
                text="Nom :" />
            <TextField row="2" class="loginForm form-textfield"
                v-model="nameRegisterValue" hint="Ex : Dupont " />

            <Label row="3" class="loginForm" text="Prénom :" />
            <TextField row="4" class="loginForm form-textfield"
                v-model="firstnameRegisterValue" hint="Ex : Alain" />

            <Label row="5" class="loginForm" text="E-mail :" />
            <TextField row="6" class="loginForm form-textfield"
                v-model="emailRegisterValue"
                hint="Ex : mail@mail.com" />

            <Label row="7" class="loginForm" text="Pseudo :" />
            <TextField row="8" class="loginForm form-textfield"
                v-model="usernameRegisterValue" hint="Ex : Dupont44" />

            <Label row="9" class="loginForm" text="Mot de passe :" />
            <TextField row="10" secure="true" class="loginForm form-textfield"
                v-model="passwordRegisterValue" hint="Ex : 123AbCd" />

            <Button row="11" class="buttonLogin" text="Valider"
                @tap="onCreateAccount" />

        </GridLayout>

    </Page>
</template>

<script>

    import LoginPage from "./LoginPage";
    import { Http } from '@nativescript/core';

    export default {
        data() {
            return {
                nameRegisterValue: '',
                firstnameRegisterValue: '',
                emailRegisterValue: '',
                usernameRegisterValue: '',
                passwordRegisterValue: '',
            };
        },
        methods: {
            async createUser(){
                await Http.request({
                    url: "http://gostyle.thibaultdct.fr:8080/gostyle/users",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({
                            mail: this.emailRegisterValue,
                            mdp: this.passwordRegisterValue,
                            nom: this.nameRegisterValue,
                            prenom: this.firstnameRegisterValue,
                            pseudo: this.usernameRegisterValue,
                    })
                })
            },
            async onCreateAccount() {
                await this.createUser();
                this.$navigateTo(LoginPage);
            }
        }
    };
</script>
<style>
    .form-textfield{
        margin-bottom: 20;
    }
</style>