function Hash() {

  let route = window.location.hash;
  console.log(route);
  const mainHeader = document.getElementById("mainheader");

  switch (route) {
    case "#/skills":
      mainHeader.innerText = "Fletcher Green (Skills Page)";
      break;
    default:
      mainHeader.innerText = "Fletcher Green (Home Page)";
      break;
  }
}

window.addEventListener("hashchange", Hash);
Hash();