import {setupNavigation} from "./navigation.js";
import {yearSpan} from "./year.js";

document.addEventListener("DOMContentLoaded",function() {
    const infos = {
        "kamille": "Kamille hilft bei innerer Unruhe und wirkt beruhigend.",
        "loewenzahn": "Löwenzahn regt die Verdauung an und stärkt den Stoffwechsel",
        "salbei": "Salbei wirkt entzündungshemmend und ist gut für die Mundhygiene."
    };

    document.querySelectorAll('.card_section').forEach(card => {
        card.addEventListener('click', function() {
            const product = this.id;
            const default_text = "Mehr Erfahren";
            const infoDiv = this.querySelector('.infoCard');
            if(!infoDiv) return;
            if (infoDiv.innerText === infos[product]) {
                infoDiv.innerText = default_text;
            } else {
                infoDiv.innerText = infos[product];
            }
            
        });
    });
    
    document.getElementById("body_complain_form_Btn").addEventListener("click", function(event) {
    event.preventDefault();
    const userInput = document.getElementById("symptom").value.toLowerCase();
    const awnserField = document.getElementById("body_complain_form_response");

    if (userInput.includes("bauch") || userInput.includes("magenschmerzen") || userInput.includes("magen") || userInput.includes("bauchschmerzen")) {
        awnserField.innerText = "Löwenzahn ist eine gute Wahl für Magenbeschwerden.";
    } else if (userInput.includes("hals") || userInput.includes("halsschmerzen") || userInput.includes("husten") || userInput.includes("kratzen")) {
        awnserField.innerText = "Salbei ist ideal bei Halsschmerzen und Husten.";
    } else if (userInput.includes("nervös") || userInput.includes("unruhe") || userInput.includes("stress") || userInput.includes("aufgeregt")) {
        awnserField.innerText = "Kamille hilft bei Nervosität und innerer Unruhe.";
    } else {
        awnserField.innerText = "Leider kann ich dir bei diesem Symptom nicht helfen.";
    }
    });


    const ProdDetails = {
        "kamille": {
            title: "Kamille",
            image: "../pics/kamill.png",
            text: "Kamille ist bekannt für ihre beruhigenden Eigenschaften und wird häufig bei innerer Unruhe eingesetzt."
            },
        "loewenzahn": {
            title:"Löwenzahn",
            image: "../pics/loewe.png",
            text: "Löwenzahn ist ein vielseitiges Kraut, das die Verdauung anregt und den Stoffwechsel stärkt."
            },
        "salbei": {
            title: "Salbei",
            image: "../pics/salba.png",
            text: "Salbei hat entzündungshemmende Eigenschaften und ist besonders gut für die Mundhygiene geeignet."
            }
    };


    document.querySelectorAll('.infoCardModal').forEach(card => {
        card.addEventListener('click', function(event) {
            event.stopPropagation(); // Verhindert, dass das Click-Event zum übergeordneten Element weitergeleitet wird
            const id = this.closest('.card_section').id; // Zugriff auf das übergeordnete Element (die Karte)
            const info = ProdDetails[id];
            
            document.getElementById("infoBoxTitle").innerText = info.title;
            document.getElementById("infoBoxImg").src = info.image;
            document.getElementById("infoBoxText").innerText =info.text;
                
            document.getElementById("infoModal").classList.remove("hidden");
        });
    });

    document.getElementById("infoBoxClose").addEventListener("click", function() {
        document.getElementById("infoModal").classList.add("hidden");
    });

    document.getElementById("infoModal").addEventListener("click", function(e) {
        if (e.target === this) { // Überprüfen, ob der Klick auf das Overlay selbst war
            this.classList.add("hidden");
        }
    });

    setupNavigation();
    yearSpan();

});
//# sourceMappingURL=handler.js.map



