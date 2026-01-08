let category = "";
let service = "";

/* ================= STEP FLOW ================= */

function showWomen() {
  category = "women";
  showStep("step-type");
  document.getElementById("typeTitle").innerText = "Choose Women Service";

  loadOptions([
    {
      name: "Kurti",
      img: "https://images.meesho.com/images/products/217987748/no9ff_512.webp",
      desc: "Elegant everyday ethnic wear with perfect fitting."
    },
    {
      name: "Blouse",
      img: "https://designerblouse.co/blog/wp-content/uploads/2024/11/Traditional-Wedding-Blouse-Back-Neck-Designs.jpg",
      desc: "Perfectly tailored blouses with premium finishing."
    },
    {
      name: "Lehenga",
      img: "https://wholetex.sgp1.cdn.digitaloceanspaces.com/full/designer-party-wear-net-lehenga-choli-2489-5645.jpg",
      desc: "Graceful lehengas for weddings and special occasions."
    }
  ]);
}

function showMen() {
  category = "men";
  showStep("step-type");
  document.getElementById("typeTitle").innerText = "Choose Men Service";

  loadOptions([
    {
      name: "Shirt",
      img: "https://brightandfly.in/cdn/shop/files/greenBestqualityformalsatincottonshirtforman_a94c1268-ad58-4837-92a3-49c6a9322a6d.jpg?v=1725453035&width=1946",
      desc: "Smartly stitched shirts with sharp modern fit."
    },
    {
      name: "Pant",
      img: "https://i.pinimg.com/474x/53/76/b0/5376b0dc53dcb9b4c4f07c630b756da4.jpg",
      desc: "Tailored pants crafted for comfort and style."
    },
    {
      name: "Kurta",
      img: "https://imagescdn.jaypore.com/img/app/product/3/39606142-12247268.jpg?w=500&auto=format",
      desc: "Traditional kurtas blended with modern elegance."
    }
  ]);
}

/* ================= UPDATED CARD CREATION ================= */

function loadOptions(items) {
  const box = document.getElementById("typeOptions");
  box.innerHTML = "";

  items.forEach(item => {
    box.innerHTML += `
      <div class="card" onclick="selectService('${item.name}')">
        <img src="${item.img}" alt="${item.name}">
        <div class="card-overlay">
          <h2>${item.name}</h2>
          <p>${item.desc}</p>
          <button>${item.name}</button>
        </div>
      </div>
    `;
  });
}

/* ================= SERVICE SELECT ================= */

function selectService(item) {
  service = item;
  showStep("step-fabric");
}

/* ================= FABRIC OPTION ================= */

function chooseFabric(type) {

  if (type === "ours") {

    localStorage.setItem("selectedService", service);

    if (service === "Kurti") {
      window.location.href = "kurti.html";
    } 
    else if (service === "Blouse") {
      window.location.href = "blouse.html";
    } 
    else if (service === "Lehenga") {
      window.location.href = "lehenga.html";
    } 
    else if (service === "Shirt") {
      window.location.href = "shirt.html";
    } 
    else if (service === "Pant") {
      window.location.href = "pant.html";
    }

  } else {
    showStep("step-measure");
    loadMeasurementForm();
  }
}

/* ================= MEASUREMENTS ================= */

function loadMeasurementForm() {
  const form = document.getElementById("measurementForm");

  form.innerHTML = `
    <input placeholder="Chest (in inches)" required>
    <input placeholder="Waist (in inches)" required>
  `;

  if (service === "Pant" || service === "Lehenga") {
    form.innerHTML += `<input placeholder="Hip (in inches)">`;
  }

  if (service === "Shirt" || service === "Kurti") {
    form.innerHTML += `<input placeholder="Shoulder (in inches)">`;
  }

  form.innerHTML += `
    <button type="button" onclick="showStep('step-book')">
      Confirm Booking
    </button>
  `;
}

/* ================= STEP SWITCH ================= */

function showStep(id) {
  document.querySelectorAll(".step").forEach(step => {
    step.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function resetFlow() {
  showStep("step-category");
}

/* ================= RETURN FROM FABRIC PAGE ================= */

window.onload = function () {
  const selectedFabric = localStorage.getItem("selectedFabric");

  if (selectedFabric) {
    showStep("step-measure");
    loadMeasurementForm();

    localStorage.removeItem("selectedFabric");
    localStorage.removeItem("fabricPrice");
  }
};
