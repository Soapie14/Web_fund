var neillikescount = 0

var nicholelikescount = 0

var jimlikescount = 0

var neillikeslabel = document.querySelector("#neillikes");

var nicholelikeslabel = document.querySelector('#nicholelikes')

var jimlikeslabel = document.querySelector('#jimlikes')

function like1(element) {
    neillikescount += 1
    neillikeslabel.innerText=neillikescount + "like(s)"
}

function like2(element) {
    nicholelikescount += 1
    nicholelikeslabel.innerText=nicholelikescount + "like(s)"
}

function like3(element) {
    jimlikescount += 1
    jimlikeslabel.innerText=jimlikescount + "like(s)"
}