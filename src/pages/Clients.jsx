import React from "react";

const Clients = () => {
  const clientsDetais = [
   
    {
      logo: "medicef-logo-new1.png",
      name: "Medicef Pharma",
    },
    {
      logo: "sym.png",
      name: "Symbiotec Pharmalab Pvt Ltd.",
    },
    {
      logo: "newajio.png",
      name: "Agio Pharmaceuticals Limited",
    },
    {
      logo: "logomediva.png",
      name: "Mediva Pharmaceutical",
    },
    {
      logo: "vitailogo1.png",
      name: "VitalityRX Pharmaceutical",
    },
    {
      logo: "novagenlogo-removebg-preview.png",
      name: "Novagen Pharma",
    },
    {
      logo: "AlphallifeLogo-removebg-preview.png",
      name: "Alphalife Pharmaceuticals ",
    },
    {
      logo: "ethicalcurelogo-removebg-preview.png",
      name: "Ethicalcure Pharma",
    },
    {
      logo: "cureWave-removebg-preview.png",
      name: "Curewave Pharmaceuticals ",
    },
    {
      logo: "GenoLogo.png",
      name: "Genomed Pharma",
    },
    {
      logo: "innocare-removebg-preview.png",
      name: "Innocare Pharmaceuticals",
    },
    {
      logo: "innovexlogo-removebg-preview.png",
      name: "Innovex Pharmaceuticals",
    },
    {
      logo: "optimedlogo-removebg-preview.png",
      name: "Optimed Pharmaceuticals",
    },
    {
      logo: "zenithcurelogo-removebg-preview.png",
      name: "Zenithcure Pharmaceuticals",
    },
   
  ];

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-3 fw-bold"  style={{ color: "#5e98bf" }}>
        Companies we've worked with
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
      {clientsDetais.map((itm) => {
  return (
    <>
        <div className="row">
          <div className="col-md-4">
            <div
              className="card m-3 shadow-sm rounded"
              style={{
                width: "20rem",
                backgroundColor: "#f8f9fa",
                border: "none",
                maxHeight: "230px",
                minHeight: "200px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "180px",
                  backgroundColor: "#e9ecef",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              >
                <div
                  style={{
                    width: "100px",
                  }}
                >
                  <img
                    src={itm.logo}
                    className="card-img-top "
                    alt={itm.name}
                  />
                </div>
              </div>
              <div className="card-body text-center">
                <h5
                  className="card-title"
                  style={{ fontWeight: "600", color: "#343a40" }}
                >
                  {itm.name}
                </h5>
              </div>
            </div>
        </div>
      </div>
    </>
  );
})}
    </div>
    </div>
  );
};

export default Clients;
