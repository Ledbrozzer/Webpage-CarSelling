let previousButton = document.getElementById('previous')
//go the html'document'-> get the element=>getElementById
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
//querySelector-> just one element-> gotta pass t-class
let items = container.querySelectorAll('.list .item')
//get all the elements with the class u pass
let indicator = document.querySelector('.indicators')
//change the color of the subject
let dots = indicator.querySelectorAll('ul li')
//get t-list inside t-indicator
// oa dots são os pontos dentro da classe indicators
//=> os itens da lista -> pegar todos os ul e li..

let list = container.querySelector('.list')
//change t-side which t-items 'll enter
//according to t-button tht was pressed
//pass t-cordenates t-access t-variable:
//beginning..
//   let list = container.querySelector('.list')


//remove t-class 'active' from the current item..
let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

// item - 0
// item - 1
// item - 2
// .....
// instead of having to pass every item position -> just use items.length
// 'll get the whole content inside a document (' . ')
// n'tht case-> items

function setSlider(){
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}

// when the button be 'clicked'
nextButton.onclick = () => {
    //  console.log("[Next] Clicked")

    list.style.setProperty('--calculation', 1)

    // found the item w/ t class 'active'
    //   let itemOld = container.querySelector('.list .item.active')
    // search for an-item- in container-> inside
    // clss 'list' -> in 'item' -> w/ 'active'

    //once found..
    //   itemOld.classList.remove('active')
    // classList -> get all t-class within him
    // use methd: remove
    //to remove-class-'active'

    //now-> hav t/put/someone-intht-plac
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    //verify-if is t-last-item
    // is active+1 biggr thn lastPosit?-if is
    // 'll return him t- zero
    //if not-> 'll add t- 'active + 1'

    //now..
    items[active].classList.add('active')
    //'ll get t-classList but..
    // now-use-to-add a class: 'active'

    //   let dotsOld = indicator.querySelector('ul li.active')
    //   dotsOld.classList.remove('active')
    //   dots[active].classList.add('active')

    //   indicator.querySelector('.number').innerText = active + 1
    //   indicator.querySelector('.number').innerHTML = active + 1
    //   indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}

previousButton.onclick = () => {
    //  console.log("[Previous] Clicked")
    list.style.setProperty('--calculation', -1)


    //   let itemOld = container.querySelector('.list .item.active')
    //   itemOld.classList.remove('active')


    // not-active+1..bcause->w're going back on t-list
    //it's active -1->but, gotta make a verification
    //is active smaller than firstposition?
    //can't be negative..

    //active can't be smaller than 0('firstPosition')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    //if it's smaller than firstPosition-> then
    //gotta go to lastPosition

    //if not-> gonna get t-active minus 1(-1), not +1
    //bcause w'd want t/go backwards..

    items[active].classList.add('active')
}

//now.. make t-'dots' change:
// on the "nextButton":

//  let dotsOld = indicator.querySelector('ul li.active')
//dots have t-class active on them->
//find t-one w/class=active..

//then remove it:
//   dotsOld.classlist.remove('active')

//dots->just like t-items
//have are on a list
//have an address/index:

//   dots[active].classList.add('active')
//gonna add t-class active

//=>it's changing t-color,but
//not t-N°
//t-indicator:

//   indicator.querySelector('.number').innerHTML = active + 1
//go-t/indicator->search-class=number->in t-class
//alter t-HTML
//can also use, ".innerText ="}instead of 'innerHTML'

//it'll add a +1 to t-active
//could alter: + 1 -> to add a 0 before:

//   indicator.querySelector('.number').innerHTML = '0' + (active + 1)

//now.. same thing for t-previousButton:
//but..t/avoid repeating too much
//w-could->use a function..

//   function setSlider(){
//      let itemOld = container.querySelector('.list .item.active')
//      itemOld.classList.remove('active')
//
//    let dotsOld = indicator.querySelector('ul li.active')
//    dotsOld.classList.remove('active')
//    dots[active].classList.add('active')
//
//    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
//}

//create a function and pass t/t-function t-code u'll use constantly

//thn once t-logic is set
// call t- function

//first define->who's t item active
//use:
//    setSlider()
// it's going t/t-function t/remove t-active and..
// set t-dots-> ready

// "setSlider()" -> needs t/be on t-middle
// after found t-item tht is active
// before adding t-class active..


// t-imgs are coming from t-same side, despite t-button u're clicking
//if u wanna chang t-direction t-img is going t/
// enter t-screen-> according t/t-button
//tht was pressed before..
// gonna ve t/chang tht in th CSS
// on t-entrance(animation)


//  nextButton:
//    list.style.setProperty('--calculation', 1)
//to alter t-value on t-varibl-in t-entrance


// now..previousButton:
//  almost t-same..
//    list.style.setProperty('--calculation', -1)
// add "-1" to be negative, and then
// 'll make t-animation occur on t-other-side


// to public:
// Hostinger($$$)
// could use a free domain(url)
// --> 'public'
// --> 'send'
// chose an option:
// --> 'file' or 'folder'..
//select them
// --> Upload
// see t-preview
// -->Done