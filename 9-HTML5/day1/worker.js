function f(n) {
    if (n <= 2) {
        return 1
    }
    return f(n-1)+f(n-2)
}

onmessage = function (event) {
    postMessage(f(event.data))
}