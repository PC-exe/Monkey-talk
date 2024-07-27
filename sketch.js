class Animal {
  constructor(breed='red', talkingStyle = 'brr'){
    this.breed = breed;
    this.talkingStyle = talkingStyle
  }
  talk(){
    console.log(this.talkingStyle);
  }
}

function setup() {
  let mrMonkey = new Animal ('yellow', "Hu-Hi-Hah-ha!")
  mrMonkey.talk();
}
