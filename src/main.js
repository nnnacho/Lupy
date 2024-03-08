console.log("cargo el js");
function sendMail() {
  const params = {
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  if (validateEmail() == true && validateMessage() == true) {
    loader();
    emailjs
      .send("service_eerj0aj", "template_cicuem7", params)
      .then((result) => {
        loader();
        document.getElementById("email_id").value = "";
        document.getElementById("message").value = "";
        Toastify({
          text: "Mensaje enviado con éxito",
          duration: 3500,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #ff8e3c, #d9376e)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      })
      .catch((err) => {
        alert("Ha ocurrido un error en el envío");
      });
  }
}

function loader() {
  const loader = document.getElementById("loader");
  if (loader.classList.contains("hidden")) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
}
function validateEmail() {
  const email = document.getElementById("email_id").value;
  const validate =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let regValidate = validate.test(email);

  if (email == "" || regValidate == false) {
    document.getElementById("spanCorreo").classList.remove("hidden");
    return false;
  } else {
    document.getElementById("spanCorreo").classList.add("hidden");
    return true;
  }
}
function validateMessage() {
  const message = document.getElementById("message").value;
  if (message == "") {
    document.getElementById("spanMensaje").classList.remove("hidden");
    return false;
  } else {
    document.getElementById("spanMensaje").classList.add("hidden");
    return true;
  }
}
