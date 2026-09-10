let lang="fr";const screens=["home","report","checklist","info"];
const fr={};const nl={};
const reportGroups=[
["Statut de l’intervention",["Installation OK","Annulation","Réparation","Site survey"]],
["Installation / matériel",["Modem fixé","Modem non fixé","TV box","ATA box","Test de vitesse effectué","Booster","Client ne souhaite pas de booster","Le client possède son propre réseau (sans fil)","Dropcâble installé","Câble drop installé sans percement.","Câble temporaire placé NIU → boîtier TV","Client VIP/B2B, Airbox ok","Problème d’activation"]],
["Situations particulières",["Client absent, non joignable","Client absent, nouveau rendez-vous pris","Câble défectueux / pas possible d’installer un nouveau","Devis demandé","Le client doit demander l’autorisation pour percer","Tap full","Dropcâble installé","Signal faible au Tap","L’installation ne peut avoir lieu en raison de problèmes système"]],
["Réparation / constat",["Modem défectueux","NIU défectueux","ATA défectueuse","TV box défectueuse","Connecteurs défectueux","Remplacer les anciens connecteurs","Mauvais signal sur le câble principal → Remplacement","Mauvais signal sur le câble principal → Devis","Mauvais signal au Tap","Aucun problème constaté chez le client","Problème causé par le client","Problème d’activation"]]
];
const questions=["Un nouveau dropcâble est-il nécessaire ?","Un réseau coaxial est-il présent dans la rue ?","Un devis est-il nécessaire pour le nouveau câble ?","Y a-t-il des situations spéciales / complications (ex: crépi, façade vitrée,..)?"];
const nlGroups=[
["Status van de interventie",["Installatie OK","Annulatie","Herstelling","Site survey"]],
["Installatie / materiaal",["Modem bevestigd","Modem los","Tv box","Ata box","Speedtest uitgevoerd","Booster","Klant wenst geen booster","Klant heeft eigen (draadloos) netwerk","Dropkabel geplaatst","Dropkabel geplaatst zonder doorboring","Tijdelijke kabel geplaatst NIU → TV box","VIP/B2B klant, Airbox ok","Activatie probleem"]],
["Bijzondere situaties",["Klant niet aanwezig, telefonisch niet bereikbaar","Klant niet aanwezig, nieuwe afspraak gemaakt","Dropkabel defect/slecht signaal, niet mogelijk nieuwe te plaatsen","Offerte aangevraagd","Klant moet toestemming vragen om te boren","Tap vol","Dropkabel geplaatst","Slecht signaal op de tap","Installatie kan niet doorgaan wegens systeemproblemen"]],
["Herstelling / vaststelling",["Modem defect","NIU defect","ATA defect","TV box defect","Slechte connectoren","Oude connectoren vervangen","Slechte signalen op de drop → Vervangen","Slechte signalen op de drop → Offerte","Slecht signaal op de tap","Geen probleem gevonden bij de klant","Probleem veroorzaakt door de klant","Activatie probleem"]]
];

const checklist={
fr:[
["Customer Check",["Vérifier l’adresse et l’adresse e-mail du client.","Demander l’autorisation de prendre des photos avant et après l’installation.","Passer en revue les services demandés et vérifier la faisabilité technique. Contrôler si des boosters Wi-Fi sont nécessaires."]],
["Installation — Photos",["Photo du modem / lieu d’installation","Photo de l’emplacement de la TV-box"]],
["Contrôle du signal DOCSIS / OneCheck",["Si le signal est OK → démarrer l’installation","Si aucun signal : vérifier le signal au tap et l’état du filtre","Remplacer le connecteur au tap si nécessaire","Vérifier / placer le SAP ID","Prendre des photos avant et après de la situation extérieure"]],
["Matériel & connexions",["Vérifier le signal sur le dropcâble / NIU","Contrôler et remplacer les connecteurs au NIU si nécessaire","Activer le matériel dans Installer Field","Brancher le modem et laisser le téléchargement démarrer","Placer la TV-box dès que le téléchargement du modem a commencé","Démarrer le téléchargement de la TV-box lorsque le modem est en service","Demander l’autorisation de percer et effectuer le travail esthétique","Fixer le NIU au mur","Fixer le modem au mur","Nettoyer poussière et déchets de perçage","Ranger le matériel","Connecter si nécessaire le Booster au modem via UTP","Effectuer le QC + transmettre le matériel via Power Apps","Déplacer le Booster à la bonne distance du modem","Prendre une photo/capture de la Topologie","Refaire un speedtest à l’emplacement du Booster","Faire une démonstration Internet et tester sur l’appareil du client","Exécuter Companion app et montrer le résultat","Faire une démonstration de la TV-box"]],
["Finalisation",["Prendre les photos après : installation, TV-box, Booster + Topologie et NIU","Répondre aux questions du client","Compléter le rapport d’intervention","Encoder les codes Wi-Fi et PIN","Ajouter toutes les photos et vérifier la complétude","Relire le rapport avec le client","Faire signer le client"]],
["Photos",["Photos avant/après du modem et lieu d’installation","Photos claires des connecteurs/résistances sur le NIU","Photos avant/après de l’emplacement TV-box","Photo des valeurs de signal de la TV-box","Capture/photo du résultat Companion app","Photo du matériel supplémentaire (Airbox, Mesh booster, etc.)","Photo de la Topologie si Booster installé","Photos avant/après si une modification extérieure a été effectuée"]],
],
nl:[
["Customer Check",["Controleer het adres en e-mailadres van de klant.","Vraag toestemming om foto’s te nemen voor en na de installatie.","Overloop de aangevraagde diensten en controleer de technische haalbaarheid. Controleer of WiFi-boosters nodig zijn."]],
["Installatie — Foto's",["Foto van de modem/installatieplaats","Foto van de locatie voor de TV-box"]],
["Signaalcontrole DOCSIS / OneCheck",["Indien signaal OK → start installatie","Indien geen signaal: tapsignaal en filterstatus controleren","Connector aan de tap vervangen indien nodig","Controleer / plaats het SAP ID","Voor- en nafoto nemen van de outdoor situatie"]],
["Hardware & aansluitingen",["Signaal op dropkabel/NIU controleren","Connectoren aan NIU controleren en indien nodig vervangen","Hardware activeren in Installer Field","Modem aansluiten en download laten starten","TV-box plaatsen zodra modem download gestart is","TV-box download starten zodra modem in dienst is","Toestemming vragen om te boren en esthetisch werk uitvoeren","NIU tegen muur bevestigen","Modem tegen muur bevestigen","Vuil en boorstof opruimen","Materiaal opruimen","Booster indien nodig via UTP met modem verbinden","QC uitvoeren + materiaal doorgeven via Power Apps","Booster op correcte afstand van modem plaatsen","Screenshot/foto van de Topologie nemen","Speedtest opnieuw uitvoeren op Booster-locatie","Internetdemo geven en testen op toestel klant","Companion app uitvoeren en resultaat tonen","Demo geven van de TV-box"]],
["Afronden",["Na-foto’s nemen: installatie, TV-box, Booster + Topologie en NIU","Vragen van de klant beantwoorden","Interventierapport invullen","Wifi-codes en PIN-codes invoeren","Alle foto’s toevoegen en volledigheid controleren","Volledig rapport met klant overlopen","Klant laten tekenen"]],
["Foto’s",["Voor- en nafoto modem/installatieplaats","Duidelijke foto's van connectoren/eindweerstanden op NIU","Voor- en nafoto TV-box locatie","Foto van TV-box signaalwaarden","Printscreen/foto Companion resultaat","Foto extra hardware (Airbox, Mesh booster, enz.)","Foto Topologie bij Booster","Voor- en nafoto bij buitenaanpassing"]]
]};

const infoSections=[
["Créneaux horaires / Tijdsloten",`Matin / Voormiddag : 08:00–11:00 — démarrage interdit avant 08:00, démarrage avant 12:00.<br>Midi / Middag : 11:00–14:00 — démarrage interdit avant 10:00, avant 15:00.<br>Après-midi : 14:00–18:00 — démarrage interdit avant 13:00, avant 18:00.<br>Soir / Avond : 18:00–20:00 — démarrage interdit avant 17:00, avant 20:00.`],
["Boosters",`Brancher à l’alimentation. Connexion UTP recommandée, WPS possible mais déconseillé. LED verte obligatoire. Contrôler le RSSI dans Topologie (< -75 dBm = OK) et prendre une photo. Effectuer un speedtest via Companion app.`],
["MOCA",`Coût MOCA : €69. Ordre des appareils sans importance. NIU TV → CATV, câble intérieur sur COM, deuxième MOCA de la prise CATV client vers COM. Internet only : résistance sur la connexion CATV.`],
["Mesures RX / TX",`RX dropcâble : -8 à +13 dBmV. RX modem : -4 à +17 dBmV. TX normal : 25–47 dBmV. TX <25 dBmV → RPA 12. Un TX trop élevé peut venir du tap, des connecteurs ou du drop.`],
["SNR / MER / BER",`MER doit être >34 dB. Post BER minimum 1E-7.`],
["OFDM / OFDMA",`OFDM/OFDMA sont des canaux DOCSIS 3.1. OFDM : MER >34 dB, Post BER ≥1E-7, PLC/NCP UCWE = 0. OFDMA : TX 25–47 dBmV, ICFR (Tilt) <2 dB. Profils IUC : 9 = 2048 QAM, 10 = 1024 QAM, 11 = 512 QAM, 12 = 64 QAM, 13 = 16 QAM.`],
["LED Livebox",`Rouge clignotant = problème de signal. Lent = downstream, rapide = upstream. Rouge fixe = problème d’activation : contrôler MAC/status dans WeCare et contacter provisioning. Cascade verte : attendre 15 minutes après activation puis contrôler. Vérifier aussi l’absence de boucle UTP.`],
["ATA Box",`Phone 1 vert fixe = téléphone raccroché et ATA enregistré. Vert clignotant lent = téléphone décroché. Éteint = problème d’activation : vérifier WeCare et appeler provisioning.`],
["Modem 2",`DS clignotant = problème downstream. US clignotant = problème upstream. US + DS ensemble = problème d’activation.`],
["TDR",`Time Domain Reflectometer : permet de détecter une anomalie de câble. Toujours terminer le câble d’un côté avec une résistance. Un pic vers le haut = ligne ouverte/câble coupé. Un pic vers le bas = court-circuit. Le câble standard de 5 m doit être déduit.`],
["Filtres",`Antidief : coupe tous les signaux. HPF : filtre l’upstream, à retirer sauf si une bande ingress y est attachée. TOF/NOTCH : obligatoire pour Internet only ; bloque le signal TV. RPA : améliore l’upstream, uniquement pour TX <25 dBmV, généralement RPA 12.`],
["Problèmes fréquents",`Pas/signal faible sur drop : vérifier raccordement au tap, filtre, mesure au tap et pertes (1–1,5 dBmV/10 m normales), remplacer préventivement les connecteurs. Pas Internet : contrôler LED, MAC/status, WAN-IP et les valeurs RX/TX. Mauvais speedtest : utiliser Companion app, désactiver VPN, tester plusieurs appareils et contrôler le 5 GHz / booster.`],
["Airbox",`TCL MW63VK Airbox Love Pack : client sans services ayant besoin d’une solution de secours. My Comfort Service Pack : My Comfort Service/VIP et certains B2B. Backup B2B Pack : B2B sans Site ID et numéro CRM dans l’ancien flow ou repair.`],
["B2B Layer 2",`Après activation, le modem est automatiquement en Bridge. Un autre team Orange installe le routeur à une autre date. Le modem ne diffuse pas de WiFi, la 4G backup n’est pas destinée à ce produit et le speedtest Companion n’est pas possible. Quality Check toujours obligatoire.`],
["Contacts",`Provisioning : 0800 85 032`]
];

function show(id){screens.forEach(s=>document.getElementById(s).classList.toggle("active",s===id));window.scrollTo(0,0)}
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>show(b.dataset.go));
document.querySelectorAll(".back").forEach(b=>b.onclick=()=>show("home"));
function setLang(x){lang=x;document.querySelectorAll(".lang").forEach(b=>b.classList.toggle("active",b.id===x));document.querySelectorAll("[data-fr]").forEach(e=>e.textContent=e.dataset[x]);renderReport();renderChecklist();renderInfo();}
document.getElementById("fr").onclick=()=>setLang("fr");document.getElementById("nl").onclick=()=>setLang("nl");

function renderReport(){
 const groups=lang==="fr"?reportGroups:nlGroups;let h="";
 groups.forEach((g,gi)=>{h+=`<div class="panel"><h2>${g[0]}</h2><div class="checks">${g[1].map((x,i)=>`<label class="check"><input type="checkbox" data-report="${gi}-${i}"><span>${x}</span></label>`).join("")}</div></div>`});
 h+=`<div class="panel"><h2>${lang==="fr"?"Questions complémentaires":"Bijkomende vragen"}</h2>`;
 questions.forEach((q,i)=>{let qq=lang==="fr"?q:["Is een nieuwe dropkabel nodig?","Is er een coaxnetwerk aanwezig in de straat?","Is er voor een nieuwe dropkabel een offerte nodig?","Zijn er speciale situaties/complicaties (bv. crepi, gevel uit glaspartij,..)?"][i];h+=`<div style="margin:14px 0"><b>${qq}</b><div class="choice"><label><input type="radio" name="q${i}" value="${lang==="fr"?"Oui":"Ja"}"> ${lang==="fr"?"Oui":"Ja"}</label><label><input type="radio" name="q${i}" value="${lang==="fr"?"Non":"Nee"}"> ${lang==="fr"?"Non":"Nee"}</label></div></div>`});h+=`</div>`;document.getElementById("reportForm").innerHTML=h;
}
function renderChecklist(){
 let arr=checklist[lang];let h="";arr.forEach((s,si)=>{h+=`<details class="info-section" open><summary>${s[0]}</summary><div class="inside checks">${s[1].map((x,i)=>`<label class="check"><input type="checkbox" class="task"><span>${x}</span></label>`).join("")}</div></details>`});document.getElementById("checkForm").innerHTML=h;document.querySelectorAll(".task").forEach(x=>x.onchange=updateProgress);updateProgress();
}
function updateProgress(){let all=[...document.querySelectorAll(".task")],done=all.filter(x=>x.checked).length,p=all.length?done/all.length*100:0;document.getElementById("progressBar").style.width=p+"%";document.getElementById("progressText").textContent=`${done} / ${all.length} ${lang==="fr"?"éléments validés":"items voltooid"}`}

function renderInfo(filter=""){let h="";infoSections.forEach(s=>{if(filter && !s[0].toLowerCase().includes(filter)&&!s[1].toLowerCase().includes(filter))return;h+=`<details class="info-section" open><summary>${s[0]}</summary><div class="inside">${s[1]}</div></details>`});document.getElementById("infoContent").innerHTML=h}
document.getElementById("search").oninput=e=>renderInfo(e.target.value.toLowerCase());

document.getElementById("copyReport").onclick=async()=>{
 let out=`APK CENTRE — ${lang==="fr"?"RAPPORT D’INTERVENTION":"INTERVENTIERAPPORT"}\n\n`;
 document.querySelectorAll("#reportForm .panel").forEach(p=>{let title=p.querySelector("h2")?.textContent; if(title) out+=title+"\n";p.querySelectorAll("input[type=checkbox]:checked,input[type=radio]:checked").forEach(i=>out+="• "+(i.closest("label")?.innerText||i.value)+"\n");out+="\n"});
 try{await navigator.clipboard.writeText(out);toast(lang==="fr"?"Résultat copié":"Resultaat gekopieerd")}catch(e){prompt("Copier le résultat :",out)}
};
function toast(t){let x=document.getElementById("toast");x.textContent=t;x.style.display="block";setTimeout(()=>x.style.display="none",1800)}
renderReport();renderChecklist();renderInfo();
