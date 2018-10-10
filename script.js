function showTime() {
  var date = new Date();
  var h = ("0" + date.getHours()).slice(-2);
  var m = ("0" + date.getMinutes()).slice(-2);
  var s = ("0" + date.getSeconds()).slice(-2);

  var time = h + ":" + m + ":" + s;
  $("#hours").text(time);
}

showTime();
setInterval(showTime, 1000);

var generateGUID = () => {
  var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x100)
      .toString(8)
      .substring(1);
  };
  return s4() + s4();
};

$("#field").keypress(function (e) {
  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault();

    if ($("#field").val() === "") return false;

    let comment = {
      card: $("#field").val(),
      id: generateGUID()
    };
    $("#field").val("");
    var store = JSON.parse(localStorage.getItem("todo")) || [];
    store.push(comment);
    localStorage.setItem("todo", JSON.stringify(store));
    $(this).val("");
    displayComment(comment);
  }
});


function displayComment(comment) {
  var html = `<div class="btn note-box" data-id="${comment.id}"><p>${
    comment.card
  }</p></div>`;

  $(".interior").append(html);
}

$("body").on("click", "#delete", function () {
  Modal.Close();

  var arr = JSON.parse(localStorage.getItem("todo"));
  for (var i = 0; i < arr.length; i++) {
    if ((arr[i].id)) {
      arr.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("todo", JSON.stringify(arr));
});


$("body").keyup(function (d) {
  if (d.keyCode === 27 && !d.shiftKey) {
    d.preventDefault();
    Modal.Close();
  }
});


var Modal = new class Modal {
  constructor() {
    this.$wrapper = $("#open-modal");
  }
  Open(html = {}) {
    this.$wrapper.addClass("active").append(html);
  }

  Close() {
    this.$wrapper.removeClass("active").empty();
  }
}();

$("body").one("click", ".note-box", function () {
  Modal.Open(
    $(this)
    .clone()
    .add(`
    <div class="icon">
      <i alt="Planı sil..." id="delete" class="material-icons">delete</i>
      <i alt="Planı değiştir..." id="edit" class="material-icons">edit</i>
    </div>
  `)
  );
});


var store = JSON.parse(localStorage.getItem("todo")) || [];
store.forEach(displayComment);

var btnOne = localStorage.getItem('.btn-1');

if (btnOne) {
  $("body").css('background-color', btnOne);
}

$(".btn-1").click(function () {
  localStorage.clear();
  $("body").css("background-color", "rgba(136,14,79 ,1)")
  localStorage.setItem('.btn-1', "rgba(136,14,79 ,1)")
})

var btnTwo = localStorage.getItem('.btn-2');

if (btnTwo) {
  $("body").css('background-color', btnTwo);
}

$(".btn-2").click(function () {
  localStorage.clear();
  $("body").css("background-color", "rgba(141, 110, 99, 1)")
  localStorage.setItem('.btn-2', "rgba(141, 110, 99, 1)")
})

var btnThree = localStorage.getItem('.btn-3');

if (btnThree) {
  $("body").css('background-color', btnThree);
}

$(".btn-3").click(function () {
  localStorage.clear();
  $("body").css("background-color", "rgba(158, 158, 158, 1)")
  localStorage.setItem('.btn-3', "rgba(158, 158, 158, 1)")
})

var btnFour = localStorage.getItem('.btn-4');

if (btnFour) {
  $("body").css('background-color', btnFour);
}

$(".btn-4").click(function () {
  localStorage.clear();
  $("body").css("background-color", "rgba(255, 235, 238, 1)")
  localStorage.setItem('.btn-4', "rgba(255, 235, 238, 1)")

})

var btnFive = localStorage.getItem('.btn-5');

if (btnFive) {
  $("body").css('background-color', btnFive);
}

$(".btn-5").click(function () {
  localStorage.clear();
  $("body").css("background-color", "rgba(130, 119, 23, 1)")
  localStorage.setItem('.btn-5', "rgba(130, 119, 23, 1)")
})

var btnSix = localStorage.getItem('.btn-6');

if (btnSix) {
  $("body").css('background-color', btnSix);
}

$(".btn-6").click(function () {
  localStorage.clear();
  $("body").css("background-color", "rgba(0, 137, 123, 1)")
  localStorage.setItem('.btn-6', "rgba(0, 137, 123, 1)")

})

var btnSeven = localStorage.getItem('.btn-6');

if (btnSeven) {
  $("body").css('background-color', btnSeven);
}

$(".btn-7").click(function () {
  localStorage.clear();
  $("body").css("background-color", "#2c3e50")
  localStorage.setItem('.btn-7', "#2c3e50")

})

$("#open-modal").on('click', '#edit', function () {
  $('.note-box').attr('contenteditable','true');
})