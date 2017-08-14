var oneOfArray = function(array) {
    var length = array.length
    var randomIndex = Math.floor(Math.random() * length)
    var result = array[randomIndex]
    return result
}
var oneOfObject = function(object) {
    var length = Object.keys(object).length
    var index = Math.floor(Math.random() * length)
    var s = String(index)
    return object[s]
}
var aNumberInZeroAnd = function(number) {
    var result = Math.floor(Math.random() * number)
    return result
}
var inputText = function() {
    var element = document.querySelector('textarea')
    var value = element.value
    console.log('value', value)
    element.value = ''
    return value
}
var bindSendButton = function() {
    var element = document.querySelector('.send-button')
    element.addEventListener('click', function() {
        var text = inputText()
        send(text)
    })
}
var keyframesRunning = function() {
    var body = document.querySelector('body')
    var clientWidth = body.clientWidth
    // var cssString = `
    //     @keyframes running {
    //         0% {
    //             transform: translateX(100%);
    //         }
    //         100% {
    //             transform: translateX(-${clientWidth}px);
    //         }
    //     }
    // `
    var cssString = `
        @keyframes running {
            0% {
                transform: translateX(100%);
            }
            100% {
                transform: translateX(-100vw);
            }
        }
    `
    return cssString
}
var insertCSS = function(cssString) {
    var css = cssString
    var container = document.querySelector('style')
    container.insertAdjacentHTML('beforeend', css)
}
var randomTop = function() {
    var body = document.querySelector('body')
    var clientHeight = body.clientHeight
    // var result = Math.floor(Math.random() * clientHeight)
    // return result
    return aNumberInZeroAnd(clientHeight)
}
var randomSpeed = function() {
    var array = ['speed-one', 'speed-two', 'speed-three', 'speed-four', 'speed-five']
    // var length = array.length
    // var randomIndex = Math.floor(Math.random() * length)
    // var result = array[randomIndex]
    // return result
    return oneOfArray(array)
}
var randomInput = function() {
    var object = {
        '0': '23333333',
        '1': '66666',
        '2': '前面的等等我',
        '3': '我是白字',
        '4': '你们能看见我的弹幕吗。。。',
        '5': '又见面了老铁们',
        '6': '点一波关注啊，谢谢',
        '7': '请珍惜你的直播间',
        '8': '大神慢点走，等等我',
        '9': '动次打次动次打次',
        '10': '色情主播我报警了',
        '11': '我爱吴亦凡',
        '12': '儿子们六不六',
        '13': '哈哈哈哈笑死我了',
    }
    // var length = Object.keys(object).length
    // var index = Math.floor(Math.random() * length)
    // var s = String(index)
    // return object[s]
    return oneOfObject(object)
}
var randomPerson = function() {
    var array = ['猴子', '兔子', '老虎', '大象']
    // var length = array.length
    // var index = Math.floor(Math.random() * length)
    // var result = array[index]
    // return result
    return oneOfArray(array)
}
var insertDanmu = function(string) {
    var top = randomTop()
    var speed = randomSpeed()
    var html = `
        <div class="${speed} item" style="top: ${top}px">${string}</div>
    `
    var container = document.querySelector('.chat-container')
    container.insertAdjacentHTML('afterend', html)
}
var bindEventEnd = function() {
    var elements = document.querySelectorAll('.item')
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        element.addEventListener('animationend', function(event) {
            console.log('event end')
            var target = event.target
            target.remove()
        })
    }
}
var insertChat = function(string) {
    var container = document.querySelector('.chat-body')
    var person = randomPerson()
    var html = `
        <div><span>${person}</span>：${string}</div>
    `
    container.insertAdjacentHTML('beforeend', html)
    ensureBottom()
}
var ensureBottom = function() {
    var element = document.querySelector('.chat-body')
    element.scrollTop = element.scrollHeight + element.clientHeight
}
var send = function(string) {
    insertChat(string)
    insertDanmu(string)
    bindEventEnd()
}
var randomTrueOrFalse = function() {
    var array = [true, false]
    // var length = array.length
    // var index = Math.floor(Math.random() * length)
    // var result = array[index]
    // return result
    return oneOfArray(array)
}
var init = function() {
    var cssRunning = keyframesRunning()
    insertCSS(cssRunning)
}
var timeMaster = function() {
    setInterval(function() {
        var a = randomTrueOrFalse()
        if (a) {
            console.log('true')
            send(randomInput())
        } else {
            console.log('false')
        }
    }, 1000)
}
var __app = function() {
    init()
    timeMaster()
    bindSendButton()
    bindEventEnd()
}
__app()
