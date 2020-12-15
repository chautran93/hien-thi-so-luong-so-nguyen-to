


function myclick() {
    let m = document.getElementById('numbers').value;
    console.log(m);
    m = parseInt(m);
    let text = "";
    text += "<tr>";
    for (n = 1, k = 0; k < m; n++) {
        let count = 0;
        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                count++;
            }
        }
        if (count == 0 && n > 1) {
            let r = Math.floor(Math.random() * 256);
            let y = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            text += '<td style="color: ryb(' + r + ',' + y + ',' + b + ');">' + n + '</td>' ;
            k++;
            if (k % 30== 0) {
                text +="</tr>" +"<tr>";
            }
        }
        document.getElementById('mytable').innerHTML = text;
    
    }
    text += "</tr>";
}