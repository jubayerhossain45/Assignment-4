 var totalCount = document.getElementById("totalCount") ;
var interviewCount = document.getElementById("interviewCount");
var rejectedCount = document.getElementById("rejectedCount");
var tabCount = document.getElementById("tabCount");

var allTab = document.getElementById("allTab");
var interviewTab = document.getElementById("interviewTab");
var rejectedTab = document.getElementById("rejectedTab") ;

var jobContainer = document.getElementById("jobContainer");
var emptyMessage = document.getElementById("emptyMessage");

var interview = 0;
var rejected = 0;


function updateDashboard() {
  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected ;
}

function showAll() {
  var cards = jobContainer.children ;
  var visible = 0;

  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "block";
    visible++;
  }

  tabCount.innerText = visible + " of 8 ";
  emptyMessage.classList.add("hidden") ;
}

function filterStatus(status) {
  var cards = jobContainer.children;
  var visible = 0;

  for (var i = 0; i < cards.length; i++) {
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
    var card = e.target.closest("div[data-id]");
    var currentStatus = card.getAttribute("data-status");

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
    var card2 = e.target.closest("div[data-id]");
    var currentStatus2 = card2.getAttribute("data-status");

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
    var card3 = e.target.closest("div[data-id]");
    var status = card3.getAttribute("data-status");

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
