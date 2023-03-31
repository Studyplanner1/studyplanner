const user={
    name: '중앙',
    nickname: "중앙앙"
}

function user(name, nickname){
    this.name= name;
    this.nickname=nickname;
}

useruser = new user('중앙', '중앙앙');

useruser.name();
useruser.nickname();