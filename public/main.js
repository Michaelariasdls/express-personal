var thumbUp = document.getElementsByClassName("fa-check");
var thumbDown = document.getElementsByClassName("fa-pause");
var trash = document.getElementsByClassName("fa-trash");



//Take a look at EJS file Count the span's the like count span is included that is what line line/9-->

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        const liElement = element.closest('.message');
        
        
        // const green = this.parentNode.parentNode.childNodes[1].classList.add('green-text');
        // const green2 = this.parentNode.parentNode.childNodes[3].classList.add('green-text');


        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp,
            'color': 'green-background'
            // 'color':green,green2
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          liElement.classList.add('green-background');
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    const liElement2 = element.closest('.message');
    // const yellow = this.parentNode.parentNode.childNodes[1].classList.add('yellow-text');
    // const yellow2 = this.parentNode.parentNode.childNodes[3].classList.add('yellow-text');


    fetch('messages/thumbDown', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbDown':thumbDown,
        'color': 'yellow-background'
        // 'color':yellow,yellow2
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      liElement2.classList.add('yellow-background');
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
