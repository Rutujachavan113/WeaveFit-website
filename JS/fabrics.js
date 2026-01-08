function chooseFabric(name, price) {

  // Save selected fabric details
  localStorage.setItem("selectedFabric", name);
  localStorage.setItem("fabricPrice", price);

  // OPTIONAL: show confirmation once
  alert(
    "Fabric Selected Successfully!\n\n" +
    "Fabric: " + name + "\n" +
    "Price: ₹" + price + "\n\n" +
    "Proceeding to measurement & booking."
  );

  // Redirect back to services page
  window.location.href = "services.html";
}
