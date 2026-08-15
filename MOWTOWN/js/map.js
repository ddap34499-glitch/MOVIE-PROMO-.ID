/* =========================================================
   UNIVERSITY OF MOWTOWN
   MAP.JS
   ========================================================= */

const mapBusElement =
  document.getElementById("mapBus");

const mapBusStatus =
  document.getElementById("mapBusStatus");

const mapEta =
  document.getElementById("mapEta");

const mapDistance =
  document.getElementById("mapDistance");


const routes = {
  "ATH-07": {
    name: "ATHENA-07",
    eta: "04 min",
    distance: "1.8 km"
  },

  "APL-04": {
    name: "APOLLO-04",
    eta: "07 min",
    distance: "3.2 km"
  },

  "ZEU-11": {
    name: "ZEUS-11",
    eta: "11 min",
    distance: "5.6 km"
  }
};


/* =========================================================
   UPDATE MAP
   ========================================================= */

function updateLiveMap(busId) {

  const route =
    routes[busId];

  if (!route) return;


  if (mapBusElement) {
    mapBusElement.textContent =
      route.name;
  }


  if (mapEta) {
    mapEta.textContent =
      route.eta;
  }


  if (mapDistance) {
    mapDistance.textContent =
      route.distance;
  }


  if (mapBusStatus) {
    mapBusStatus.textContent =
      "LIVE";
  }

}


/* =========================================================
   LISTEN FOR BUS CHANGES
   ========================================================= */

document.addEventListener(
  "mowtown:bus-change",
  event => {

    updateLiveMap(
      event.detail.busId
    );

  }
);


/* =========================================================
   SIMULATE LIVE MOVEMENT
   ========================================================= */

function simulateBusMovement() {

  const bus =
    document.querySelector(".moving-bus");

  if (!bus) return;


  let position = 0;


  setInterval(() => {

    position += 1;

    if (position > 100) {
      position = 0;
    }


    /*
     * Gerakan kecil supaya bus terasa hidup.
     */

    bus.style.filter =
      `drop-shadow(
        ${8 + position % 4}px
        ${12 + position % 3}px
        5px
        rgba(0,0,0,.45)
      )`;

  }, 1200);

}


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updateLiveMap("ATH-07");

    simulateBusMovement();

  }
);
