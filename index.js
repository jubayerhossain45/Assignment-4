let totalCount = document.getElementById("totalCount") ;
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
let tabCount = document.getElementById("tabCount");

let allTab = document.getElementById("allTab");
let interviewTab = document.getElementById("interviewTab");
let rejectedTab= document.getElementById("rejectedTab") ;

let jobContainer = document.getElementById("jobContainer");
let emptyMessage = document.getElementById("emptyMessage");
let interview = 0;
let rejected = 0;


function updateDashboard() {
  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected ;
 
}

function showAll() {
  let cards = jobContainer.children ;
  let visible = 0;

  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "block";
    visible++;
  }

  tabCount.innerText = visible + " of 8 ";
  emptyMessage.classList.add("hidden") ;
}

function filterStatus(status) {
  let cards = jobContainer.children;
  let visible = 0;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].getAttribute("data-status") === status) {
      cards[i].style.display = "block";
      visible++;
    } else {
      cards[i].style.display = "none";
    }
  }

  tabCount.innerText = visible + " of 8 " ;

  if (visible === 0) {
    emptyMessage.classList.remove("hidden");
  } else {
    emptyMessage.classList.add("hidden");
  }
}

allTab.addEventListener("click", function () {
  showAll();
});

interviewTab.addEventListener("click", function () {
  filterStatus("Interview");
});

rejectedTab.addEventListener("click", function () {
  filterStatus("Rejected");
});

jobContainer.addEventListener("click", function (e) {

  if (e.target.classList.contains("interviewBtn")) {
    let card = e.target.closest("div[data-id]");
    let currentStatus = card.getAttribute("data-status");

    if (currentStatus === "Rejected") {
      rejected--;
    }

    if (currentStatus !== "Interview") {
      interview++;
      card.setAttribute("data-status", "Interview");
    }

    updateDashboard();
  }

  if (e.target.classList.contains("rejectBtn")) {
    let card2 = e.target.closest("div[data-id]");
    let currentStatus2 = card2.getAttribute("data-status");

    if (currentStatus2 === "Interview") {
      interview--;
    }

    if (currentStatus2 !== "Rejected") {
      rejected++;
      card2.setAttribute("data-status", "Rejected");
    }

    updateDashboard();
  }
  
  if (e.target.classList.contains("deleteBtn")) {
    let card3 = e.target.closest("div[data-id]");
    let status = card3.getAttribute("data-status");

    if (status === "Interview") {
      interview;
    }

    if (status === "Rejected") {
      rejected;
    }

    card3.remove();

    totalCount.innerText = jobContainer.children.length;
    tabCount.innerText = jobContainer.children.length , visible + "";
    updateDashboard();
  }  

});