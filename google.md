# 🎯 Google Ads Setup voor KundenserviceKomfort.de

## 📋 Account Setup - Stap voor Stap

### **1. Google Ads Account Aanmaken**
1. Ga naar [ads.google.com](https://ads.google.com)
2. Maak een account aan voor jouw bedrijf
3. Kies "Expert Mode" voor meer controle
4. Voeg betalingsmethode toe (creditcard/bankoverschrijving)
5. Stel tijdzone in op "Deutschland (GMT+1)"

### **2. Conversietracking Instellen**

#### **Stap 1: Conversie-actie aanmaken**
1. Ga naar **Tools & Settings** → **Conversions**
2. Klik **"+ New Conversion Action"**
3. Kies **"Website"** als bron
4. Selecteer **"Phone calls"** als conversie-type

#### **Stap 2: Conversie configureren**
- **Naam**: "Phone Call - KundenserviceKomfort"
- **Category**: "Lead"
- **Value**: €25 (geschatte waarde per lead)
- **Count**: "One" (één conversie per klik)
- **Click-through conversion window**: 30 dagen
- **View-through conversion window**: 1 dag
- **Include in conversions**: Ja
- **Attribution model**: "Data-driven" of "Last click"

#### **Stap 3: Tracking Code implementeren**
Je krijgt een **Conversion ID** (bijv. AW-1234567890) en **Conversion Label** (bijv. AbC-dEfGhIjK).

**Optie A: Direct Google Ads Tag**
Voeg toe aan `<head>` sectie van alle HTML bestanden:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-JOUW_CONVERSION_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-JOUW_CONVERSION_ID');
</script>
```

**Optie B: Google Tag Manager (Aanbevolen)**
1. Maak GTM account aan op [tagmanager.google.com](https://tagmanager.google.com)
2. Installeer GTM container code
3. Configureer Google Ads Conversion Tracking tag
4. Publiceer container

### **3. Code Aanpassingen Website**

Update het bestand `public/script.js`, regel 83-90:

```javascript
// Vervang YOUR_CONVERSION_ID met jouw echte ID
if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', {
        'send_to': 'AW-1234567890/AbC-dEfGhIjKlMnOp', // Vervang met jouw ID
        'value': 25.0,
        'currency': 'EUR',
        'transaction_id': Date.now() // Unieke ID per conversie
    });
}
```

---

## 🚀 Campagne Structuur

### **Campaign 1: Branded Search**
- **Type**: Search Network
- **Budget**: €15-25/dag
- **Targeting**: Duitsland
- **Bidding**: Target CPA (€20-30)

### **Campaign 2: Generic Kundenservice**
- **Type**: Search Network  
- **Budget**: €30-50/dag
- **Targeting**: Duitsland
- **Bidding**: Maximize Conversions

### **BRAND INTERCEPT CAMPAIGNS (Per Sector)**

### **Campaign 3A: Telecom Intercept**
- **Type**: Search Network
- **Budget**: €40-60/dag (hoogste volume)
- **Targeting**: Duitsland
- **Bidding**: Enhanced CPC
- **Focus**: O2, Telekom, Vodafone, 1&1

### **Campaign 3B: Tech/Electronics Intercept**
- **Type**: Search Network
- **Budget**: €25-35/dag
- **Targeting**: Duitsland  
- **Bidding**: Enhanced CPC
- **Focus**: Samsung, Apple, Microsoft, Amazon

### **Campaign 3C: Banking/Finance Intercept**
- **Type**: Search Network
- **Budget**: €30-45/dag
- **Targeting**: Duitsland
- **Bidding**: Enhanced CPC
- **Focus**: Sparkasse, Commerzbank, PayPal, N26

### **Campaign 3D: Utilities/Energy Intercept**
- **Type**: Search Network
- **Budget**: €20-30/dag
- **Targeting**: Duitsland
- **Bidding**: Enhanced CPC  
- **Focus**: EON, Stadtwerke, Vattenfall

### **Campaign 3E: E-commerce/Travel Intercept**
- **Type**: Search Network
- **Budget**: €25-35/dag
- **Targeting**: Duitsland
- **Bidding**: Enhanced CPC
- **Focus**: Amazon, Booking.com, Check24, Otto

### **Campaign 3F: Insurance Intercept**
- **Type**: Search Network
- **Budget**: €20-30/dag
- **Targeting**: Duitsland
- **Bidding**: Enhanced CPC
- **Focus**: Allianz, AXA, HUK-Coburg

### **Campaign 4: Local Service Calls**
- **Type**: Search Network
- **Budget**: €20-35/dag
- **Targeting**: Grote Duitse steden
- **Bidding**: Enhanced CPC

---

## 🎯 Keyword Research - Duitse Markt

### **Branded Keywords (Campaign 1)**
```
[kundenservicekomfort]
"kundenservicekomfort"
+kundenservicekomfort +telefon
+kundenservicekomfort +kontakt
```

### **Generic Service Keywords (Campaign 2)**
#### **High Volume - Broad Match**
```
kundenservice telefon
kundendienst hotline
support anrufen
hilfe telefonnummer
beratung telefonisch
kundenbetreuung kontakt
```

#### **Medium Volume - Phrase Match**
```
"kundenservice deutschland"
"kundendienst nummer"
"support hotline kostenlos"
"hilfe am telefon"
"telefonische beratung"
"kundenservice sofort"
```

#### **Long-tail - Exact Match**
```
[kundenservice telefon kostenlos]
[kundendienst 24 stunden]
[support hotline deutschland]
[telefonische hilfe sofort]
[kundenbetreuung anrufen]
[beratung am telefon kostenlos]
```

### **Campaign 3A: Telecom Intercept Keywords**
#### **Exact Match [High Priority]**
```
[o2 kundenservice anrufen]
[telekom kundendienst telefon]
[vodafone kundenservice nummer]
[1&1 support hotline]
[eplus kundenservice kontakt]
[mobilcom debitel kundenservice]
[congstar kundendienst telefon]
[freenet kundenservice anrufen]
[klarmobil support nummer]
[blau de kundenservice]
```

#### **Phrase Match "Medium Priority"**
```
"o2 kundenservice telefon"
"telekom support anrufen"  
"vodafone kundendienst nummer"
"1&1 hilfe telefon"
"eplus support hotline"
"mobilfunk kundenservice"
"internet anbieter kundendienst"
```

#### **Broad Match Modified +Low Priority+**
```
+o2 +kundenservice +problem
+telekom +kundendienst +hilfe
+vodafone +support +nicht +erreichbar
+1&1 +kundenservice +beschwerde
+internet +anbieter +kundenservice
```

### **Campaign 3B: Tech/Electronics Intercept Keywords**
#### **Exact Match [High Priority]**
```
[samsung kundenservice deutschland]
[apple support telefon]
[microsoft hilfe anrufen]
[google kundenservice kontakt]
[amazon kundendienst nummer]
[sony support deutschland]
[lg kundenservice telefon]
[huawei kundendienst anrufen]
[mediamarkt kundenservice]
[saturn support hotline]
```

#### **Phrase Match "Medium Priority"**
```
"samsung support deutschland"
"apple kundenservice telefon"
"microsoft kundendienst"
"amazon support anrufen"
"elektronik kundenservice"
"handy reparatur hotline"
```

### **Campaign 3C: Banking/Finance Intercept Keywords**
#### **Exact Match [High Priority]**
```
[sparkasse kundenservice anrufen]
[commerzbank kundendienst telefon]
[deutsche bank support]
[ing kundenservice nummer]
[dkb kundendienst telefon]
[comdirect support hotline]
[paypal kundenservice deutsch]
[klarna kundendienst anrufen]
[n26 support telefon]
[revolut kundenservice deutschland]
```

#### **Phrase Match "Medium Priority"**
```
"bank kundenservice telefon"
"kreditkarte support anrufen"
"online banking hilfe"
"paypal kundendienst"
```

### **Campaign 3D: Utilities/Energy Intercept Keywords**
#### **Exact Match [High Priority]**
```
[eon kundendienst telefon]
[stadtwerke kundenservice anrufen]
[vattenfall support hotline]
[rwe kundenservice nummer]
[enercity kundendienst]
[gasag kundenservice telefon]
[hamburg energie support]
[naturstrom kundendienst]
[lichtblick kundenservice]
```

### **Campaign 3E: E-commerce/Travel Intercept Keywords**
#### **Exact Match [High Priority]**
```
[amazon kundenservice deutschland]
[booking kundenservice telefon]
[check24 kundendienst anrufen]
[otto kundenservice nummer]
[zalando support hotline]
[expedia kundendienst telefon]
[idealo kundenservice]
[ebay support deutschland]
[lufthansa kundenservice anrufen]
[bahn de kundendienst]
```

### **Campaign 3F: Insurance Intercept Keywords**
#### **Exact Match [High Priority]**
```
[allianz kundenservice nummer]
[axa kundendienst telefon]
[huk coburg kundenservice]
[ergo versicherung support]
[generali kundendienst anrufen]
[signal iduna kundenservice]
[debeka support hotline]
[cosmos direkt kundendienst]
```

### **Problem-Based Keywords (Campaign 4)**
```
problem mit [PRODUKT]
hilfe bei [PROBLEM]
"was tun wenn"
"wie kann ich"
technischer support
kundenservice beschwerde
reklamation telefon
```

### **Local Keywords**
```
kundenservice berlin
kundendienst münchen
support hamburg
hilfe frankfurt
kundenservice köln
```

---

## 📝 Advertentieteksten (RSA - Responsive Search Ads)

### **Headlines (15 variaties per ad group)**

#### **Branded Ad Group**
```
H1: KundenserviceKomfort - Jetzt Anrufen
H2: Sofortige Hilfe Am Telefon
H3: Professioneller Kundenservice
H4: Experten Beraten Sie Gerne
H5: Ihr Zuverlässiger Partner
H6: Schnelle Lösungen Garantiert
H7: Deutsche Kundenbetreuung
H8: Kostenlose Erstberatung
H9: 030 123 456 789 Anrufen
H10: Kompetent & Freundlich
H11: Mo-Fr 8-20 Uhr Erreichbar
H12: Keine Wartezeiten
H13: Vertrauen Sie Den Experten
H14: Qualität Made In Germany
H15: Jetzt Sofort Kontaktieren
```

#### **Generic Service Ad Group**
```
H1: Kundenservice Sofort Erreichen
H2: Professionelle Hilfe Am Telefon
H3: Ihre Fragen - Unsere Antworten
H4: Expertenberatung Deutschland
H5: Schnelle Problemlösung
H6: Kundenservice Ohne Wartezeit
H7: 030 123 456 789 Wählen
H8: Kompetente Beratung Jetzt
H9: Deutsche Kundenbetreuer
H10: Kostenlose Erstberatung
H11: Support Wenn Sie Brauchen
H12: Zuverlässiger Service
H13: Freundliche Experten
H14: Mo-Sa Für Sie Da
H15: Vertrauen & Kompetenz
```

#### **Brand Intercept Ad Group**
```
H1: Kundenservice Hilfe Sofort
H2: Experten Beraten Sie Jetzt
H3: Professionelle Unterstützung
H4: Schnelle Lösungen Am Telefon
H5: Deutsche Kundenbetreuung
H6: Kompetente Hilfe Garantiert
H7: Kostenlose Erstberatung
H8: Zuverlässiger Support Service
H9: 030 123 456 789 Anrufen
H10: Keine Wartezeiten Mehr
H11: Qualifizierte Beratung
H12: Direkter Kontakt Möglich
H13: Mo-Sa Erreichbar
H14: Vertrauen Sie Experten
H15: Sofortige Problemlösung
```

### **Descriptions (4 per ad group)**

#### **Branded Descriptions**
```
D1: Direkter Kontakt zu unseren Experten. Keine Wartezeiten, kompetente Beratung in deutscher Sprache. Rufen Sie jetzt an!
D2: KundenserviceKomfort bietet schnelle, professionelle Hilfe bei allen Fragen. Mo-Fr 8-20 Uhr, Sa 9-18 Uhr erreichbar.
D3: Vertrauen Sie unserer Expertise. Freundliche Beratung, faire Preise, 100% Vertraulichkeit. Kontaktieren Sie uns jetzt.
D4: Sofortige Unterstützung durch geschulte Mitarbeiter. Kostenlose Erstberatung. Rufen Sie 030 123 456 789 an.
```

#### **Generic Descriptions**
```
D1: Professioneller Kundenservice ohne Wartezeiten. Deutsche Experten lösen Ihre Probleme schnell und zuverlässig.
D2: Kompetente Beratung am Telefon. Mo-Fr 8-20 Uhr, Sa 9-18 Uhr. Kostenlose Erstberatung. Jetzt 030 123 456 789 anrufen.
D3: Schnelle Hilfe bei allen Fragen. Freundliche, geschulte Mitarbeiter beraten Sie gerne. Vertraulich und professionell.
D4: Ihr zuverlässiger Partner für Kundenservice. Keine versteckten Kosten, transparente Beratung. Sofort erreichbar.
```

#### **Brand Intercept Descriptions**
```
D1: Keine Lust auf lange Warteschleifen? Unsere Experten helfen sofort! Deutsche Kundenbetreuung ohne Wartezeiten.
D2: Schneller Support statt endloser Warterei. Professionelle Beratung am Telefon. Jetzt 030 123 456 789 anrufen.
D3: Kompetente Hilfe wenn andere nicht erreichbar sind. Deutsche Experten lösen Ihr Problem sofort. Kostenlose Beratung.
D4: Direkter Draht zu echten Experten. Keine Warteschleife, keine Roboter - nur professionelle Hilfe. Mo-Sa erreichbar.
```

---

## 🎯 Ad Extensions Setup

### **Call Extensions**
```
Telefonnummer: +49 30 123 456 789
Zeiten: Mo-Fr 8:00-20:00, Sa 9:00-18:00
Call Reporting: Aktiviert
```

### **Sitelink Extensions**
```
1. Unsere Leistungen | Professioneller Support für alle Bereiche
   URL: /leistungen.html

2. Häufige Fragen | Schnelle Antworten auf Ihre Fragen  
   URL: /faq.html

3. Jetzt Kontaktieren | Verschiedene Kontaktmöglichkeiten
   URL: /kontakt.html

4. Über Uns | Ihr vertrauensvoller Partner
   URL: /index.html#features
```

### **Callout Extensions**
```
- Sofort Erreichbar
- Keine Wartezeiten  
- Kostenlose Beratung
- Deutsche Experten
- Mo-Sa Verfügbar
- 100% Vertraulich
- Schnelle Lösungen
- Faire Preise
```

### **Structured Snippet Extensions**
```
Servicearten: Telefonischer Support, Technische Hilfe, Allgemeine Beratung, Beschwerdemanagement

Branchen: Kundenservice, Support, Beratung, Kundendienst

Merkmale: Schnell, Zuverlässig, Kompetent, Vertraulich
```

---

## 🎯 Targeting & Bidding Strategie

### **Geographic Targeting**
**Primär (100% Bid Adjustment)**
- Berlin
- München  
- Hamburg
- Köln
- Frankfurt am Main

**Sekundär (80% Bid Adjustment)**
- Düsseldorf
- Stuttgart
- Dortmund
- Essen
- Bremen

**Tertiär (60% Bid Adjustment)**
- Rest van Duitsland

### **Schedule Bidding**
```
Mo-Fr 8:00-10:00: +20% (hoge conversie tijd)
Mo-Fr 10:00-16:00: Baseline
Mo-Fr 16:00-18:00: +15% (na werk tijd)
Mo-Fr 18:00-20:00: Baseline
Sa 9:00-18:00: +10%
Zo: -50% (lage conversies)
```

### **Device Bidding**
```
Mobile: +15% (hoge call rates)
Desktop: Baseline  
Tablet: -10%
```

### **Audience Targeting**
**In-Market Audiences**
- Business Services
- Employment Services
- Consumer Electronics

**Custom Intent Audiences**
Keywords: kundenservice, kundendienst, support, hilfe, beratung

---

## 📊 Conversie Optimalisatie

### **Quality Score Verbetering**
1. **Expected CTR**: 
   - Gebruik emotional triggers ("Sofort", "Jetzt", "Kostenlos")
   - Test verschillende headlines
   
2. **Ad Relevance**:
   - Keywords in headlines
   - Specifieke ad groups per thema
   
3. **Landing Page Experience**:
   - ✅ Al geoptimaliseerd: snelle laadtijd, mobile-friendly, duidelijke CTA

### **Bid Adjustments Optimalisatie**
1. **Week 1-2**: Verzamel data met "Maximize Conversions"
2. **Week 3+**: Switch naar "Target CPA" 
3. **Doel CPA**: €20-30 (afhankelijk van lifetime value)

### **A/B Testing Plan**
**Test 1: Headlines**
- Variant A: "Kundenservice Sofort Erreichen"
- Variant B: "030 123 456 789 Jetzt Anrufen"

**Test 2: CTA's**
- Variant A: "Jetzt Anrufen"  
- Variant B: "Sofort Kontaktieren"

**Test 3: Value Propositions**
- Variant A: "Kostenlose Beratung"
- Variant B: "Keine Wartezeiten"

---

## 💰 Budget Allocatie & ROI Verwachtingen

### **Totaal Dagbudget Aanbeveling: €190-310/dag**

| Campagne | Dagbudget | Verwacht Volume | CPA Target | Conversies/dag |
|----------|-----------|-----------------|------------|----------------|
| **1. Branded** | €15-25 | Laag | €15-20 | 1-2 |
| **2. Generic** | €30-50 | Hoog | €25-35 | 2-3 |
| **3A. Telecom** | €40-60 | Zeer Hoog | €20-30 | 3-4 |
| **3B. Tech** | €25-35 | Medium | €25-35 | 1-2 |
| **3C. Banking** | €30-45 | Hoog | €30-40 | 2-3 |
| **3D. Utilities** | €20-30 | Medium | €25-35 | 1-2 |
| **3E. E-commerce** | €25-35 | Hoog | €20-30 | 2-3 |
| **3F. Insurance** | €20-30 | Medium | €35-45 | 1-2 |
| **4. Local** | €20-35 | Medium | €25-35 | 1-2 |

### **Performance Based Budget Scaling**

#### **Week 1-2: Test Phase (50% Budget)**
```
Telecom: €25/dag
Generic: €20/dag  
Banking: €20/dag
Tech: €15/dag
E-commerce: €15/dag
Others: €10-15/dag each
TOTAL: €95-130/dag
```

#### **Week 3-4: Scale Winners (75% Budget)**
- Verhoog budget met 50% voor campaigns met CPA < target
- Verlaag budget met 25% voor campaigns met CPA > 150% van target

#### **Maand 2+: Full Scale (100% Budget)**
- Focus op best performing sectors
- Pause underperforming campaigns  
- Test nieuwe ad groups binnen winning campaigns

### **Sector Performance Verwachtingen**

#### **🥇 Highest ROI Expected:**
1. **Telecom** - Hoge zoekvolumes, gefrustreerde klanten
2. **E-commerce** - Veel support behoeften, hoge conversies
3. **Banking** - Urgente problemen, bereid om te betalen

#### **🥈 Medium ROI Expected:**
4. **Generic** - Breed, maar competitief
5. **Tech** - Seizoensgebonden, maar waardevol
6. **Utilities** - Stabiel volume, lagere competitie

#### **🥉 Test & Learn:**
7. **Insurance** - Langere sales cycle
8. **Local** - Beperkt volume maar hoge intent
9. **Branded** - Lage volumes maar hoogste conversie

---

## 📈 Performance Monitoring Per Campagne

### **Dagelijkse Checks Per Campagne**

#### **Priority 1 (Check 2x per dag)**
- [ ] **3A. Telecom** - Hoogste budget, meeste volume
- [ ] **2. Generic** - Breed bereik, veel traffic
- [ ] **3C. Banking** - Hoge CPA potentieel

#### **Priority 2 (Check 1x per dag)**  
- [ ] **3E. E-commerce** - Steady volume
- [ ] **3B. Tech** - Seizoensgebonden
- [ ] **4. Local** - Regionaal

#### **Priority 3 (Check om de dag)**
- [ ] **3D. Utilities** - Stabiel
- [ ] **3F. Insurance** - Laag volume
- [ ] **1. Branded** - Voorspelbaar

### **Wekelijkse Optimalisatie**
- [ ] Keyword performance review per campagne
- [ ] Negative keywords toevoegen (zie lijst hieronder)
- [ ] Bid adjustments op basis van CPA
- [ ] Ad copy performance testing
- [ ] Budget reallocation tussen campaigns

### **Negative Keywords Per Campagne**

#### **Globale Negative Keywords (Voor alle campaigns)**
```
-gratis
-kostenlos
-free
-job  
-jobs
-karriere
-ausbildung
-praktikum
-bewerben
-stellenanzeige
-gehalt
-verdienst
-wikipedia
-forum
-bewertung
-test
-vergleich
-alternative
-konkurrent
```

#### **Campagne 3A (Telecom) Specific Negatives**
```
-vertrag -kündigen
-tarif -wechseln
-anbieter -vergleich
-prepaid -karte
-router -konfiguration
-techniker -termin
-störung -melden
```

#### **Campagne 3B (Tech) Specific Negatives**
```
-reparatur -anleitung
-bedienungsanleitung
-handbuch -download
-treiber -download
-software -download
-crack -keygen
-gebraucht -kaufen
```

#### **Campagne 3C (Banking) Specific Negatives**
```
-kredit -beantragen
-konto -eröffnen
-zinsen -vergleich
-girokonto -kostenlos
-schufa -auskunft
-insolvenz -beratung
```

### **Maandelijkse Analyse**
- [ ] ROI berekening
- [ ] Audience insights
- [ ] Geographic performance
- [ ] Device performance
- [ ] Time-of-day analysis

### **KPI's om te Monitoren**
```
Target CTR: >3%
Target Conversie Rate: >5%
Target CPA: €20-30
Target ROAS: >300%
Quality Score: >7/10
```

---

## 🔧 Technische Setup Checklist

- [ ] Google Ads account aangemaakt
- [ ] Conversietracking ingesteld
- [ ] Google Tag Manager geïnstalleerd (optioneel)
- [ ] Tracking code in script.js aangepast
- [ ] Call extensions geconfigureerd  
- [ ] Sitelinks toegevoegd
- [ ] Callout extensions ingesteld
- [ ] Audiences aangemaakt
- [ ] Geographic targeting ingesteld
- [ ] Budget & bidding strategie gekozen
- [ ] Eerste advertenties live
- [ ] Tracking getest met Google Tag Assistant

---

## 💡 Pro Tips voor Duitse Markt

### **Culturele Overwegingen**
- Duitsers waarderen **directe communicatie**
- **Vertrouwen** is cruciaal - gebruik certificeringen
- **Punctualiteit** benadrukken in advertenties
- **Kwaliteit** boven **prijs** positioneren

### **Taal Optimalisatie**
- Gebruik **"Sie"** vorm (formeel)
- Vermijd Anglicismen waar mogelijk
- **Clear German grammar** - geen direct vertaalde teksten
- **Local spelling** gebruiken (ß, ä, ö, ü)

### **Concurrentie Analyse Tools**
- **SEMrush**: Concurrent keywords en advertenties
- **SpyFu**: Concurrent ad history  
- **Ahrefs**: Search volume data
- **Google Ads Auction Insights**: Direct concurrent data

---

## 🚨 Belangrijke Deadlines & Acties

### **Week 1: Setup**
- [ ] Account aanmaken
- [ ] Tracking implementeren  
- [ ] Eerste campaign live

### **Week 2: Optimalisatie**
- [ ] Performance data analyseren
- [ ] Bid adjustments maken
- [ ] Negative keywords toevoegen

### **Week 3: Scaling**
- [ ] Budget verhogen voor goed presterende campaigns
- [ ] Nieuwe ad groups toevoegen
- [ ] Enhanced conversies implementeren

### **Maand 1: Expansion**
- [ ] Display campaigns overwegen
- [ ] YouTube advertenties testen
- [ ] Remarketing campaigns opzetten

---

**🎯 Succes Tip**: Start klein (€20-30/dag budget), verzamel data, en schaal geleidelijk op basis van performance. Focus eerst op high-intent keywords met lage concurrentie!

---

*Laatste update: 2024 - Geoptimaliseerd voor KundenserviceKomfort.de*