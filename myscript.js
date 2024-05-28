var rollV, nameV, lastnameV, genderV, addressV, emailV;

function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  lastnameV = document.getElementById("lastname").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("Email").value;
  Swal.fire("Data Read Successfully");
  console.log(rollV, nameV, addressV, genderV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      lastname: lastnameV,
      gender: genderV,
      address: addressV,
      Email: emailV
    });
    Swal.fire("Data Inserted Successfully!");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("Email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("lastname").value = snap.val().name;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().Email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      lastname: lastnameV,
      gender: genderV,
      address: addressV,
      Email: emailV
    });
    Swal.fire("Data Update Successfully!");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
    Swal.fire("Data Deleted Successfully!");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
