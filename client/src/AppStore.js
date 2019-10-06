import {action, configure, observable, set} from "mobx";
import React from "react";
// import {LoginStore} from "./components/login/LoginStore";
// import BrandStore from "./components/brand/BrandStore";
// import SampleStore from "./components/sample/SampleStore";

configure({enforceActions: 'never'});

class RootStore {

    constructor() {
        // this.loginStore = new LoginStore(this);
        // this.brandStore = new BrandStore(this);
        // this.sampleStore = new SampleStore(this);
    }

    // user = observable.object({
    //     isLogin: localStorage.getItem('conv_token') !== null,
    //     name: localStorage.getItem('conv_username'),
    //     token: localStorage.getItem('conv_token'),
    //     profileImage: localStorage.getItem('conv_profileimage')
    // })

    // @action
    // setUser = (user) => {
    //     this.user.name = user.userName; //computed 값이 복사가 안되서 수작업.
    //     this.user.isLogin = user.isLogin;
    //     this.user.token = user.token;
    // }
    //
    // @action
    // setUserProfileImage = (imgUrl) => {
    //     localStorage.setItem('conv_profileimage', imgUrl);
    // }
    //
    // @action
    // clearUser = () => {
    //     this.user.name = '';
    //     this.user.isLogin = '';
    //     this.user.token = '';
    //     localStorage.removeItem('conv_token');
    //     localStorage.removeItem('conv_username');
    //     localStorage.removeItem('conv_profileimage');
    //     console.log(this.user);
    // }
    //
    // @action
    // copyUserToStorage = () => {
    //     localStorage.setItem('conv_token', this.user.token);
    //     localStorage.setItem('conv_username', this.user.userName);
    // }
    //
    // @action
    // getToken = () => localStorage.getItem('conv_token')

}

const rootStore = new RootStore();

export default rootStore;