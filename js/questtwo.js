function orakel() {
    var alerts = new Array (
        "Das Orakel empfiehlt dir: Kamille gegen innere Unruhe.",
        "Das Orakel empfiehlt dir: Salbei gegen Halsschmerzen.",
        "Das Orakel empfiehlt dir: Löwenzahn für eine bessere Verdaaung."
    );

    i = Math.floor(Math.random() * alerts.length);
    var div = document.getElementById("orakel_text");
    div.innerText = alerts[i];
}