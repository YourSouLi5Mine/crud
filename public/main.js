var update = document.getElementById('update');
var del = document.getElementById('delete');

update.addEventListener('click', () => {
    fetch('quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': 'Lord Farquar',
            'quote': 'I find your lack of height disturbing.'
        })
    }).then(res => {
        if (res.ok) return res.json();
    }).then(data => {
        console.log(data);
        window.location.reload(true);
    })
})

del.addEventListener('click', () => {
    fetch('quotes',{
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': 'Lord Farquar'
        })
    }).then(res => {
        if (res.ok) return res.json();
    }).then(data => {
        console.log(data);
        // window.location.reload();
    })
})