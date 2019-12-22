var empty = 8;
function moveTile(n) {
    if (((empty - 1) == n && empty % 3 != 0) || ((empty + 1) == n && empty % 3 != 2) || ((empty - 3) == n) || ((empty + 3) == n)) {
        var temp;
        temp = n;
        swap(empty, n);
        empty = temp;
    }
}

function swap(a, b) {
    var temp = document.images[a].src;
    document.images[a].src = document.images[b].src;
    document.images[b].src = temp;
}
