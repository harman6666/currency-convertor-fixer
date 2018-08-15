/************************************
 * Author: Harmanpreet Singh
 * Task: Currenct convertor
 * Date: Aug 15th, 2018
 ************************************/

const endpoint = "http://data.fixer.io/api/";
const apiKey = "94b487747691c25f43a213e7c372bbd2"; // My account API key
const dateField = document.querySelector(".date");
const euroField = document.querySelector(".euro");
const usdField = document.querySelector(".usd");
const jpyField = document.querySelector(".jpy");
const errorStrip = document.querySelector(".error-strip");
const loader = document.querySelector(".loader");
const convertorBtn = document.querySelector(".convert-button");
let gotError = false;
let gotFormatError = false;

/***********************
 * Fixer API hit with Axios. We will get response data on the bases of params we are passing 
 * into the function.
 ************************/
const fixerApi = (url, params) => {
    axios.get(url, {
      params
    })
    .then(data => {
      const resData = data.data;
      loader.classList.remove("open");
      (resData.success) ? showConvertion(resData) : showError(resData);
    })
    .catch(function(error) {
      showError(error);
    });
};

/***********************
 * Main function which fires when user clicks on the convert button or hit enter when on date 
 * or euro field.
 ************************/
const moneyConvert = () => {
    loader.classList.add("open");
    gotError = false;
    gotFormatError = false;
    const params = {
        access_key: apiKey,
        base: "EUR", // For free api service only EUR is supported as base. This is also a default value as base even if we not write here, Fixer will take automatically EUR as base.
        symbols: "USD,JPY" // As we just needs data for these two.
    };
    errorCheck();
    if (!gotError) {
        if(gotFormatError) {
            return;
        }
        const apiUrl =
        (dateField.value)
            ? endpoint + dateField.value
            : endpoint + "latest";
        fixerApi(apiUrl, params);
    }
};

/***********************
 * Main function for error checking. If the field is null, negative value or date format is not 
 * correct then we will get the error message correspondingly to a error on a fixed message strip.
 ************************/
const errorCheck = () => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const dateVal = dateField.value;
    if (euroField.value <= '0' || !euroField.value) {
        gotError = true;
        showError("EUR field value should be greater or equal to 0.1.");
        return;
    }
    if (dateVal && !dateRegex.test(dateVal)) {
        gotFormatError = true;
        showError("Please enter date in right format.");
        return;
    }
};

/***********************
 * Added keyboard enter functionality.
 ************************/
const keyEvent = evt => {
    if (evt.keyCode === 13) {
        moneyConvert();
    }
};

const fixPoint = (val, amount) => (val * amount).toFixed(2);

/***********************
 * Showing message in a fixed strip on the top. The message should automatically removed after 3 seconds.
 ************************/
const showError = resData => {
    loader.classList.remove("open");
    errorStrip.innerHTML = resData.error
        ? resData.error.info || resData.error.type
        : resData;
    errorStrip.classList.add("error");
    setTimeout(() => {
        errorStrip.classList.remove("error");
        errorStrip.innerHTML = "";
    }, 3000);
};

/***********************
 * Showing the converted values for USD and JPY after getting result from Fixer API.
 ************************/
const showConvertion = resData => {
    errorStrip.classList.remove("error");
    const usdAmount = resData.rates.USD;
    const jpyAmount = resData.rates.JPY;
    const euroVal = euroField.value;
    const usdVal = fixPoint(euroVal, usdAmount);
    const jpyVal = fixPoint(euroVal, jpyAmount);
    usdField.innerText = usdVal.numberConvertor();
    jpyField.innerText = jpyVal.numberConvertor();
};

/***********************
 * Events attached
 ************************/
convertorBtn.addEventListener("click", moneyConvert);
euroField.addEventListener("keydown", keyEvent);
dateField.addEventListener("keydown", keyEvent);
