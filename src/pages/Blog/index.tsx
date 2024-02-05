import Hero from '@components/Hero'
import { Typography } from '@material-tailwind/react'
import Overview from './components/Overview'
import SingleBlog from './components/SingleBlog'
import Quote from './components/SingleBlog/Quote'

const Blog = () => {
    const blogs: { title: string; content: JSX.Element }[] = [
        {
            title: 'DER FINDES EN KLASSISK',
            content: (
                <>
                    branchespøg, som de fleste læger kender. Den er kort og
                    lyder nogenlunde, som følger: “En rask person er bare en
                    patient, der ikke er undersøgt godt nok endnu.” Det er en
                    gammel vittighed, men praktiserende læge og professor John
                    Brodersen og antropolog og postdoc Alexandra Jønsson
                    begyndte at tænke på den igen. Selv om den nok oprindeligt
                    var ment som en parodi, så er vitsen blevet både aktuel og
                    sandfærdig, mener de.
                    <div className="mt-4">
                        Det har nemlig aldrig været sværere at vide, om man er
                        rask eller syg - eller noget midtimellem, siger de to
                        forskere. I dag kan man blive testet og screenet for
                        alverdens ting, og flere steder i vores højt avancerede
                        sundhedsvæsen er man begyndt at stille sig selv et
                        grundlæggende spørgsmål: Er vi blevet lidt for gode til
                        at finde tegn på sygdom? Bruger vi for mange penge på at
                        stille diagnoser - og nogle gange endda også på
                        behandling - til mennesker, hvor det egentlig er
                        overflødigt?
                    </div>
                    <div className="mt-4">
                        En af de mest markante stemmer i debatten om unødige
                        diagnoser er netop John Brodersen, der er professor på
                        Københavns Universitet og også underviser på
                        medicinstudiet samme sted. Han har forsket i fænomenet
                        overdiagnosticering og kalder det “et overset problem”.
                        “Det er en af de største trusler mod vores
                        velfærdssamfund,” siger han, da jeg taler med ham. “For
                        hvis vi alle sammen skal være patienter, der skal
                        behandles og undersøges, så kan et offentligt
                        sundhedsvæsen simpelthen ikke hænge sammen,” siger John
                        Brodersen.
                    </div>
                    <div className="mt-4">
                        Han og kollegaen Alexandra Jønsson, der er antropolog på
                        Københavns Universitet, er i gang med at skrive en ny
                        lærebog om overdiagnosticering, som skal være den første
                        bog, der samler viden om fænomenet på dansk.
                        Makkerparret vandt i midten af november forlaget
                        Samfundslitteraturs Lærebogspris på 100.000 kroner til
                        at skrive bogen med navnet{' '}
                        <i>
                            Snart er vi alle patienter - Overdiagnostik i et
                            samfundsfagligt perspektiv,
                        </i>{' '}
                        og deres håb er, at den vil blive brugt på
                        universiteterne af studerende på alt fra medicin- til
                        statskundskabsstudiet, og at også for eksempel
                        sygeplejersker vil møde den i løbet af deres uddannelse.
                    </div>
                    <div className="mt-4">
                        Debatten om de mange undersøgelser og tidlige diagnoser
                        er kontroversiel. For hvad med potentialet for at
                        forbedre - og endda redde - liv ved at opdage sygdomme,
                        inden de har udviklet sig? Netop det er selve idéen bag,
                        hvorfor man screener for kræft, holder øje med blodtryk
                        og kolesteroltal eller måske endda får taget en gentest,
                        der viser, om man er i risiko for bestemte sygdomme.
                    </div>
                    <div className="mt-4">
                        Den idé er der grundlæggende ikke noget galt med. Men de
                        to forskere mener, at vi midt i vores jagt på diagnoser
                        bør overveje et vigtigt spørgsmål: Kommer
                        sundhedsvæsenet i sin iver for at holde os raske nogle
                        gange til at gøre os syge?
                    </div>
                </>
            ),
        },
        {
            title: 'FOR AT FORSTÅ,',
            content: (
                <>
                    præcis hvad overdiagnosticering er, kan man begynde med at
                    kigge lidt tilbage i tiden. Op gennem både 1700- og
                    1800-tallet fokuserede lægerne mest af alt på, hvordan folk
                    <i>havde</i> det: hvis man følte sig syg, tog man til lægen,
                    og så stillede han en diagnose ud fra det, patienten
                    fortalte, og ud fra en fysisk undersøgelse. Med indtoget af
                    den moderne medicin fik man pludselig mange flere metoder
                    til at opdage forandringer i kroppen: Mikroskoper,
                    avancerede maskiner og teknologier har gjort det muligt at
                    opdage flere og flere små forandringer og forstadier til
                    sygdomme - allerede inden patienten kan mærke noget som
                    helst. Det har forandret sundhedsvæsenet og vores opfattelse
                    af sygdom ret grundlæggende, argumenter John Brodersen og
                    Alexandra Jønsson.
                    <div className="mt-4">
                        “Hvis vi leder længe og grundigt nok, så vil man kunne
                        finde nogle abnorme ting hos os alle sammen. For
                        eksempel noget væv, der opfylder kriterierne for kræft,
                        men som faktisk har en natur, der gør, at den aldrig
                        vokser, aldrig giver symptomer og aldrig vil kræve
                        behandling,” siger John Brodersen, da jeg taler med ham
                        og Alexandra Jønsson på en telefonforbindelse fra
                        Australien, hvor de er rejst til for at deltage i den
                        årlige konference Preventing Overdiagnosis - og ja,
                        emnet er at forhindre overdiagnostik.
                    </div>
                    <div className="mt-4">
                        “Vi bruger mange penge og kræfter på at finde en masse
                        tegn på noget, vi tror er sygdom. Men nogle gange er det
                        altså harmløse forandringer,” siger han. Og Alexandra
                        Jønsson tilføjer: “På den måde får vi skabt en kultur,
                        hvor vi udvisker skellet mellem rask og syg, og vi
                        bliver fortalt, at vi ikke nødvendigvis er raske, bare
                        fordi vi føler os raske,” siger hun.
                    </div>
                    <div className="mt-4">
                        Lad os kigge på et eksempel: Hvert år bliver en kvart
                        million danske kvinder screenet for brystkræft. Der er
                        vel at mærke ikke tale om kvinder, der ringer til lægen,
                        fordi de har mærket en knude i brystet; der er tale om
                        alle kvinder mellem 50 og 69 år, der bliver tilbudt en
                        undersøgelse for sygdom - og langt de fleste takker ja
                        til det.
                    </div>
                    <div className="mt-4">
                        Hver gang 10.000 kvinder bliver screenet, vil 250 af dem
                        få besked om, at de måske har kræft. Ud af de 250 får
                        185 afkræftet mistanken om kræft, mens 65 får besked om,
                        at de er syge. Og screeningen vil redde nogle af dem fra
                        at dø af kræften, fremgår det af informationsmateriale
                        fra{' '}
                        <Quote
                            content={
                                <>
                                    <div>
                                        De nævnte tal fra Sundhedsstyrelsen (og
                                        flere til) kan findes i dette notat.
                                    </div>
                                    <hr />
                                    <div>
                                        Sundhedsstyrelsen henviser i sin
                                        vurdering af overdiagnostik til to
                                        studier. Den amerikanske
                                        evidensgennemgang stammer fra det
                                        uafhængige ekspertpanel USPSTF, og det
                                        danske studie er et kohortestudie
                                        baseret på tal fra det danske
                                        brystkræftscreeningsprogram i Fyns og
                                        Københavns Amter.
                                    </div>
                                </>
                            }
                        >
                            Sundhedsstyrelsen.
                        </Quote>{' '}
                        Effekten af screeningen kan stilles op sådan her: For
                        kvinderne over 60 år vil 40 ud af 10.000 dø af
                        brystkræft inden for ti år. 14 af de 40 kvinder vil
                        overleve brystkræften, hvis de deltager i
                        screeningsprogrammet.
                    </div>
                    <div className="mt-4">
                        Men tilbage til de 65 kvinder, der får besked om, at de
                        er syge af brystkræft. For der er nemlig en del af dem,
                        hvor diagnosen reelt set aldrig får nogen betydning for
                        dem. Det kan være, fordi de når at dø af en anden
                        sygdom, eller fordi kræften udvikler sig så langsomt, at
                        de aldrig når at mærke den. Det er den gruppe kvinder,
                        som man ville kalde overdiagnosticeret: De har fået en
                        diagnose for en sygdom, som aldrig kommer til at påvirke
                        deres liv.
                    </div>
                    <div className="mt-4">
                        Internationalt er der uenighed om, hvor mange kvinder
                        der overdiagnosticeres med brystkræft. Amerikanske
                        forskere vurderer på baggrund af en
                        litteraturgennemgang, at det er 19 procent, hvilket vil
                        svare til 12 kvinder ud af de 65, der får diagnosen (og
                        behandling), men hvor brystkræften aldrig får betydning.
                        Et dansk studie peger på en noget mindre andel - her
                        vurderer forskere, at overdiagnosticering rammer 2,3
                        procent i brystkræftscreeningen, hvilket ville svare til
                        1 ud af de 65 kvinder.
                    </div>
                    <div className="mt-4">
                        Screeningen for brystkræft har været omdiskuteret,
                        blandt andet fordi et forskningsprojekt sidste år såede
                        tvivl om, om screeningen overhovedet hjalp til at redde
                        liv. Hypotesen er, at behandlingen af kræften
                        efterhånden er blevet så god, at screeningen reelt ikke
                        gør nogen forskel for overlevelsen, og i foråret fik en
                        forsker godt to millioner kroner fra Danmarks Frie
                        Forskningsfond til at undersøge, om screeningen
                        overhovedet giver{' '}
                        <Quote
                            content={
                                <>
                                    <div>
                                        Det var en dansk-norsk undersøgelse, der
                                        i 2018 viste, at faldet i antallet af
                                        kvinder, der dør af brystkræft, er lige
                                        så stort i de aldersgrupper, der ikke
                                        bliver screenet, som hos dem, der bliver
                                        screenet. Faldet skyldes derfor den
                                        generelt bedre behandling og ikke
                                        brystkræftscreening. Læs mere om den nye
                                        forskning, der skal undersøge
                                        brystkræftscreeningens effekt, her.
                                    </div>
                                    <hr />
                                    <div>
                                        Du kan læse mere om overdiagnostik inden
                                        for skjoldbruskkirtelkræft i Sydkorea
                                        her. Og om den overdianogsticerende
                                        hjertemaskine i Jylland her.
                                    </div>
                                </>
                            }
                        >
                            mening.
                        </Quote>
                    </div>
                    <div className="mt-4">
                        Overdiagnosticering kan også ses inden for flere andre
                        områder, for eksempel skjoldbruskkirtelkræft, hvor man i
                        flere lande kan se en massiv stigning i antallet af
                        diagnoser (stigningen er særligt stor i Sydkorea, men
                        kan også ses i Danmark), men ingen stigning i
                        dødelighed. Flere forskere peger på, at det skyldes
                        overdiagnosticering. Og tidligere i år viste et
                        forskningsprojekt fra Hjerteklinikken på
                        Hospitalsenheden Vest og Aarhus Universitet for
                        eksempel, at en ny form for måleudstyr, der skal finde
                        forstyrrelser i hjerterytmen, førte til for mange
                        diagnoser.
                    </div>
                    <div className="mt-4">
                        Konsekvenserne ved overdiagnosticering kan være fysiske
                        - smerter ved undersøgelser, bivirkninger ved eventuel
                        medicin eller men efter operationer - men de kan også
                        være psykiske. Det er bredt anerkendt, og når man læser
                        om screeninger, informerer sundhedsvæsenet også om
                        risikoen for overdiagnostik. John Brodersen har selv
                        lavet forskning, der viser, at man kan få symptomer på
                        stress og depression, hvis man får at vide, at der er
                        fundet celleforandringer, der ligner brystkræft.
                        Alexandra Jønsson har selv oplevet netop dét, da hendes
                        mor fik et falsk positivt svar til en
                        brystkræftscreening og “ikke turde fortælle mig om det i
                        flere uger”, fortæller hun.
                    </div>
                    <div className="mt-4">
                        Men hvad med de positive effekter af tidlig diagnostik?
                        Hvis man venter med at stille en diagnose, til en
                        patient rent faktisk er blevet syg, risikerer man måske
                        også, at man ikke længere kan nå at helbrede patienter.
                        Det argument har direktøren for Kræftens Bekæmpelse,
                        Leif Vestergaard Pedersen, skrevet i et indlæg i
                        Altinget, hvor han kritiserer John Brodersen for at være
                        for aktivistisk i debatten om overdiagnosticering. I sin
                        grundform er pointen denne: Er bekymringer og skadelige
                        effekter hos mange en pris, man måske bør betale - hvis
                        man nu kan redde én?
                    </div>
                    <div className="mt-4">
                        Sat helt på spidsen er det et spørgsmål om, hvad et
                        enkelt liv er værd, og det er måske nok det sværeste -
                        og samtidig mest aktuelle - spørgsmål i sundhedsvæsenet
                        lige nu.
                    </div>
                </>
            ),
        },
    ]

    return (
        <div className="flex flex-col w-full">
            <Hero />
            <Overview />
            <div className="flex flex-col w-full max-w-2xl gap-4 p-4 mx-auto mt-4">
                <Typography
                    variant="h6"
                    className="font-serif font-SharpGrotesk18"
                    style={{
                        fontFamily:
                            'ff-meta-serif-web-pro,ui-serif,Georgia,Cambria,Times New Roman,Times,serif',
                    }}
                >
                    Af{' '}
                    <a
                        href="https://www.zetland.dk/skribent/aO9kVR61"
                        className="font-black"
                    >
                        Sidsel Hoe
                    </a>
                </Typography>
                <Typography
                    color="red"
                    variant="h5"
                    className="text-base font-bold font-SharpGrotesk20"
                >
                    DERFOR SKAL DU LÆSE DENNE ARTIKEL
                </Typography>
                <Typography
                    variant="paragraph"
                    className="text-base font-SharpGrotesk18 -tracking-[.0704px]"
                    style={{
                        fontFamily:
                            'SharpGrotesk18,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
                    }}
                >
                    Lægevidenskaben er bedre end nogensinde til at opdage
                    symptomer på sygdomme, vi ikke selv er opmærksomme på. Men
                    den positive udvikling har et biprodukt af unødige diagnoser
                    og undersøgelser, der viser tegn på sygdom, som aldrig
                    bliver til sygdom. Det kaldes ‘overdiagnosticering’, og to
                    forskere har netop fået 100.000 kroner til at skrive den
                    første danske lærebog om emnet. Fænomenet griber fat om det
                    måske vigtigste spørgsmål i sundhedsvæsenet lige nu: Hvad
                    skal systemet bruge sine penge på?
                </Typography>
                <hr className="mt-2 mb-8 border-2 border-red-500" />
                {blogs.map((blog, key) => (
                    <SingleBlog key={`blog-${key}`} {...blog} />
                ))}
            </div>
        </div>
    )
}

export default Blog
