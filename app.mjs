function startApp() {
  // Your entire app should not necessarily be coded inside this
  // single function (though there's no penalty for that),
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!

  //collect DOM elements
  let telInput = document.querySelector("#telInput");
  // let telDisplay = document.querySelector("");
  let errorMsg = document.querySelector("#telError");
  // let img = document.querySelector("");
  console.log("welcome home");
  //get all network providers prefixes
  const mtn_pref = [
    ` 0703, 0706, 0803, 0806, 0810, 0813, 0814, 0816, 0903, 0906, 0913,`,
  ];
  const etisalat_pref = [`0809, 0817, 0818, 0908, 0909`];
  const glo_pref = [`0805, 0807, 0811, 0705, 0815, 0905`];
  const airtel_pref = [`0802, 0808, 0812, 0701, 0902, 0907, 0901, 0708`];
  let ntel_pref = `0804`;
  let smile_pref = `0702`;

  //validations
  const validate = () => {
    if (isNaN(telInput.value)) {
      errorMsg.innerHTML = "Only Numbers are allowed";
    } //if the first number is not 0
    else if (telInput.value.charAt(0) !== "0") {
      errorMsg.innerHTML = "Number must start with 0";
    } // check if input is less than 4
    else if (telInput.value.length < 4 || telInput.value.length > 11) {
      errorMsg.innerHTML = "Number cannot be less than 4 or greater than 11";
    } else {
      errorMsg.innerHTML = "";
    }
  };

  // check if input match prefix
  const checkPrefix = () => {
    let phoneNo = Number(telInput.value).substr(0, 4);
    if (mtn_pref.includes(phoneNo)) {
      telDisplay.innerHTML = "Your Number is an MTN Number";
      telDisplay.style.color = "#ffcb01";
      img.src = "./img/MTN.svg";
    } else if (etisalat_pref.includes(phoneNo)) {
      telDisplay.innerHTML = "Your Number is an Etisalat Number";
      telDisplay.style.color = "#016e53";
      img.src = "./img/9mobile.svg";
    } else if (glo_pref.includes(phoneNo)) {
      telDisplay.innerHTML = "Your Number is a Glo Number";
      telDisplay.style.color = "10a507";
      img.src = "./img/Glo.png";
    } else if (airtel_pref.includes(phoneNo)) {
      telDisplay.innerHTML = "Your Number is an Airtel Number";
      telDisplay.style.color = "#ed1d24";
      img.src = "./img/Airtel.png";
    } else if (ntel_pref.includes(phoneNo)) {
      telDisplay.innerHTML = "Your Number is an Ntel Number";
      telDisplay.style.color = "#8acfb2";
      img.src = "./img/ntel.png";
    } else if (smile_pref.includes(phoneNo)) {
      telDisplay.innerHTML = "Your Number is a Smile Number";
      telDisplay.style.color = "#8acfb2";
      img.src = "./img/smile.png";
    } else {
      telDisplay.innerHTML = "";
      img.src = "./img/Nigeria.jpg";
    }
  };

  telInput.addEventListener("input", () => {
    console.log("hhiiii");
    validate();
    // checkPrefix();
  });
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
