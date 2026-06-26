import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Baby,
  Banknote,
  Bike,
  CalendarDays,
  Camera,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Coffee,
  Dog,
  Heart,
  Info,
  Mail,
  MapPin,
  Menu,
  ParkingCircle,
  Phone,
  ShieldCheck,
  ShipWheel,
  Sparkles,
  Trees,
  Waves,
  Wifi,
  X,
} from 'lucide-react';
import './styles.css';

const assetBase = `${import.meta.env.BASE_URL}assets/`;

const asset = (path: string) =>
  `${assetBase}${path
    .split('/')
    .map((part) => encodeURIComponent(part))
    .join('/')}`;

const navItems = [
  ['o-nas', 'O nas'],
  ['oferta', 'Oferta'],
  ['pokoje', 'Pokoje'],
  ['cennik', 'Cennik'],
  ['sauna', 'Sauna'],
  ['atrakcje', 'Atrakcje'],
  ['galeria', 'Galeria'],
  ['dzieci', 'Dla dzieci'],
  ['kontakt', 'Kontakt'],
  ['pytania', 'Pytania'],
] as const;

const heroImages = ['galeria/galeria_1.jpg', 'slajdy/slajd1.jpg', 'slajdy/slajd2.jpg', 'slajdy/slajd3.jpg', 'slajdy/slajd4.jpg', 'slajdy/slajd5.jpg'];

const highlights = [
  { icon: Waves, label: '250 m do morza', text: 'Cicha ulica blisko lasu, plaży i zatoki.' },
  { icon: ShieldCheck, label: 'Rodzinnie i spokojnie', text: 'Ogrodzona posesja, monitorowany parking i pomoc gospodarzy na miejscu.' },
  { icon: Sparkles, label: 'Sauna i relaks', text: 'Sauna fińska, infrared, prysznic i pokój wypoczynku.' },
  { icon: Dog, label: 'Zwierzęta mile widziane', text: 'Akceptujemy spokojne psy i koty za dodatkową opłatą.' },
];

const featureItems = [
  { icon: Wifi, title: 'Bezpłatne Wi-Fi', text: 'Internet działa w pokojach i częściach wspólnych.' },
  { icon: Coffee, title: 'Kuchnia i aneksy', text: 'Kuchnia lub aneks kuchenny na każdym piętrze.' },
  { icon: ParkingCircle, title: 'Parking', text: 'Monitorowany parking na posesji jest bezpłatny.' },
  { icon: Baby, title: 'Dla rodzin', text: 'Łóżeczko, wanienka, krzesełko, podest, nocnik i plac zabaw.' },
  { icon: Trees, title: 'Ogród i grill', text: 'Altanka, meble wypoczynkowe, zakątek grillowy i miejsce na sprzęt.' },
  { icon: Car, title: 'Wygodny dojazd', text: 'Blisko PKS, PKP Jastarnia Wczasy i ścieżki rowerowej.' },
];

const rooms = [
  {
    group: '2-osobowe',
    image: 'grafika/p1_0_250.jpg',
    description:
      'Eleganckie pokoje dla par i osób podróżujących solo. Łazienka, TV-SAT, dostęp do kuchni lub aneksu, w wielu pokojach balkon.',
    items: [
      {
        nr: '1',
        text:
          'Obszerne łoże z dwoma materacami, możliwość rozdzielenia na dwa łóżka, TV-SAT, balkon od południowego zachodu, łazienka z prysznicem i umywalką, dostęp do kuchni.',
        images: ['grafika/gal1/pok1_0.jpg', 'grafika/gal1/pok1_1.jpg', 'grafika/gal1/pok1_2.jpg', 'grafika/gal1/pok1_3.jpg'],
      },
      {
        nr: '4',
        text: 'Obszerne łoże małżeńskie, TV-SAT, łazienka z prysznicem i umywalką, dostęp do aneksu kuchennego lub kuchni.',
        images: ['grafika/gal4/pok4_0.jpg', 'grafika/gal4/pok4_1.jpg', 'grafika/gal4/pok4_2.jpg', 'grafika/gal4/pok4_3.jpg', 'grafika/gal4/pok4_4.jpg', 'grafika/gal4/pok4_5.jpg'],
      },
      {
        nr: '5',
        text: 'Szerokie dwuosobowe łoże, TV-SAT, balkon od północy, drugie okno od zachodu, łazienka z prysznicem i umywalką, dostęp do aneksu i kuchni.',
        images: ['grafika/gal5/pok5_0.jpg', 'grafika/gal5/pok5_1.jpg', 'grafika/gal5/pok5_2.jpg', 'grafika/gal5/pok5_3.jpg'],
      },
      {
        nr: '6',
        text: 'Obszerne łoże dwuosobowe, TV-SAT, balkon od południowego zachodu, łazienka z prysznicem i umywalką, dostęp do aneksu lub kuchni.',
        images: ['grafika/gal6/pok6_0.jpg', 'grafika/gal6/pok6_1.jpg', 'grafika/gal6/pok6_2.jpg', 'grafika/gal6/pok6_3.jpg', 'grafika/gal6/pok6_4.jpg'],
      },
      {
        nr: '7',
        text: 'Dwuosobowe łoże z materacem 140/200 cm, TV-SAT, balkon od południa, łazienka z prysznicem i umywalką, dostęp do aneksu lub kuchni.',
        images: ['grafika/gal7/pok7_0.jpg', 'grafika/gal7/pok7_1.jpg', 'grafika/gal7/pok7_2.jpg', 'grafika/gal7/pok7_3.jpg', 'grafika/gal7/pok7_4.jpg'],
      },
      {
        nr: '8',
        text: 'Łoże dwuosobowe z materacem 140/200 cm, TV-SAT, balkon od południa, łazienka z prysznicem i umywalką, dostęp do aneksu lub kuchni.',
        images: ['grafika/gal8/pok8_0.jpg', 'grafika/gal8/pok8_1.jpg', 'grafika/gal8/pok8_2.jpg', 'grafika/gal8/pok8_3.jpg', 'grafika/gal8/pok8_4.jpg'],
      },
      {
        nr: '9',
        text: 'Obszerne łoże dwuosobowe, TV-SAT, balkon od północy, łazienka z prysznicem i umywalką, możliwość korzystania z aneksu kuchennego.',
        images: ['grafika/gal9/pok9_0.jpg', 'grafika/gal9/pok9_1.jpg', 'grafika/gal9/pok9_2.jpg', 'grafika/gal9/pok9_3.jpg', 'grafika/gal9/pok9_4.jpg'],
      },
      {
        nr: '10',
        text: 'Szerokie łoże dwuosobowe, TV-SAT, balkon od północy, drugie okno od zachodu, łazienka z prysznicem i umywalką, dostęp do aneksu.',
        images: ['grafika/gal10/pok10_0.jpg', 'grafika/gal10/pok10_1.jpg', 'grafika/gal10/pok10_2.jpg', 'grafika/gal10/pok10_3.jpg', 'grafika/gal10/pok10_4.jpg', 'grafika/gal10/pok10_5.jpg'],
      },
      {
        nr: '11',
        text: 'Łoże dwuosobowe z materacem 140/200 cm, TV-SAT, balkon od południowego zachodu, łazienka z prysznicem i umywalką, dostęp do aneksu.',
        images: ['grafika/gal11/pok11_0.jpg', 'grafika/gal11/pok11_1.jpg', 'grafika/gal11/pok11_2.jpg', 'grafika/gal11/pok11_3.jpg', 'grafika/gal11/pok11_4.jpg'],
      },
      {
        nr: '12',
        text: 'Łoże dwuosobowe z materacem 140/200 cm, TV-SAT, balkon od południa, łazienka z prysznicem i umywalką, dostęp do aneksu.',
        images: ['grafika/gal12/pok12_0.jpg', 'grafika/gal12/pok12_1.jpg', 'grafika/gal12/pok12_2.jpg', 'grafika/gal12/pok12_3.jpg', 'grafika/gal12/pok12_4.jpg', 'grafika/gal12/pok12_5.jpg'],
      },
      {
        nr: '13',
        text: 'Łoże dwuosobowe z materacem 140/200 cm, TV-SAT, balkon od południa, łazienka z prysznicem i umywalką, dostęp do aneksu.',
        images: ['grafika/gal13/pok13_0.jpg', 'grafika/gal13/pok13_1.jpg', 'grafika/gal13/pok13_2.jpg', 'grafika/gal13/pok13_3.jpg', 'grafika/gal13/pok13_4.jpg'],
      },
    ],
  },
  {
    group: '3-osobowe',
    image: 'grafika/p15_01.jpg',
    description: 'Pokoje z miejscem dla rodziny lub małej grupy, z łazienką, TV-SAT i dostępem do zaplecza kuchennego.',
    items: [
      {
        nr: '2',
        text:
          'Szerokie łoże małżeńskie 160/200 cm oraz łóżko pojedyncze 90/200 cm, TV-SAT, mały przedpokoik, łazienka z prysznicem i umywalką, balkon od południowego zachodu, dostęp do kuchni.',
        images: ['grafika/gal2/pok2_0.jpg', 'grafika/gal2/pok2_1.jpg', 'grafika/gal2/pok2_2.jpg', 'grafika/gal2/pok2_3.jpg', 'grafika/gal2/pok2_4.jpg'],
      },
      {
        nr: '3',
        text: 'Łoże małżeńskie 140/200 cm oraz dostawka w formie amerykanki, TV-SAT, łazienka z prysznicem i umywalką, balkon od południa, dostęp do kuchni.',
        images: ['grafika/gal3/pok3_0.jpg', 'grafika/gal3/pok3_1.jpg', 'grafika/gal3/pok3_2.jpg', 'grafika/gal3/pok3_3.jpg', 'grafika/gal3/pok3_4.jpg'],
      },
      {
        nr: '15',
        text: 'Niezależne wejście, kanapa i dwa jednoosobowe tapczany, TV-SAT, lodówka, czajnik, kuchenka mikrofalowa, naczynia oraz łazienka z prysznicem i umywalką.',
        images: ['grafika/gal15/pok15_0.jpg', 'grafika/gal15/pok15_1.jpg', 'grafika/gal15/pok15_2.jpg', 'grafika/gal15/pok15_3.jpg', 'grafika/gal15/pok15_4.jpg'],
      },
    ],
  },
  {
    group: '4-osobowe',
    image: 'grafika/p16_01.jpg',
    description: 'Większe pokoje dla rodzin, także z własnym mini aneksem lub niezależniejszym układem pobytu.',
    items: [
      {
        nr: '14',
        text:
          'Pokój na poddaszu: dwie kanapy, w tym jedna z szezlongiem, dwa pojedyncze łóżka 90/200 cm, TV-SAT, mini aneks kuchenny, wanna i umywalka, dostęp do aneksu.',
        images: ['grafika/gal14/pok14_0.jpg', 'grafika/gal14/pok14_1.jpg', 'grafika/gal14/pok14_2.jpg', 'grafika/gal14/pok14_3.jpg', 'grafika/gal14/pok14_4.jpg'],
      },
      {
        nr: '16',
        text: 'Obszerne dwuosobowe łoże i kanapa, TV-SAT, lodówka, czajnik, kuchenka mikrofalowa, naczynia oraz łazienka z prysznicem i umywalką.',
        images: ['grafika/gal16/pok16_0.jpg', 'grafika/gal16/pok16_1.jpg', 'grafika/gal16/pok16_3.jpg', 'grafika/gal16/pok16_4.jpg', 'grafika/gal16/pok16_5.jpg', 'grafika/gal16/pok16_6.jpg', 'grafika/gal16/pok16_7.jpg', 'grafika/gal16/pok16_8.jpg'],
      },
    ],
  },
];

const priceRows = [
  ['1 osobowe', '100 zł', '-', '-'],
  ['2 osobowe', '160 zł', '210 zł', '260 zł'],
  ['2 osobowe z dostawką', '200 zł', '230 zł', '320 zł'],
  ['3 osobowe', '230 zł', '260 zł', '340 zł'],
  ['4 osobowy (poddasze)', '280 zł', '300 zł', '380 zł'],
  ['4 osobowy (łoże dwuosobowe i kanapa)', '-', '290 zł', '350 zł'],
];

const periods = [
  {
    name: 'Poza sezonem',
    dates: ['02.01 - 01.05', '03.05 - 01.06', '13.09 - 31.12'],
  },
  {
    name: 'Sezon',
    dates: ['01.05 - 03.05', '01.06 - 27.06', '27.08 - 13.09', '31.12 - 03.01.2027'],
  },
  {
    name: 'Szczyt sezonu',
    dates: ['27.06 - 27.08'],
  },
];

const saunaBenefits = [
  'wzmacnia odporność',
  'relaksuje i odpręża',
  'przyśpiesza metabolizm',
  'usuwa tłuszcz i toksyny',
  'oczyszcza i ujędrnia skórę',
  'eliminuje stres',
  'opóźnia starzenie się skóry',
  'pomaga wrócić do formy po wysiłku',
];

const attractions = [
  ['LOTY WIDOKOWE', 'grafika/atrakcje/atrakcja_0.jpg'],
  ['SPORTY WODNE', 'grafika/atrakcje/atrakcja_1.jpg'],
  ['SKANSEN FORTYFIKACJI', 'grafika/atrakcje/atrakcja_2.jpg'],
  ['LATARNIA MORSKA', 'grafika/atrakcje/atrakcja_3.jpg'],
  ['PORT RYBACKI', 'grafika/atrakcje/atrakcja_4.jpg'],
  ['CHATA RYBACKA', 'grafika/atrakcje/atrakcja_5.jpg'],
  ['ŚCIEŻKA ROWEROWA', 'grafika/atrakcje/atrakcja_6.jpg'],
  ['NURKOWANIE', 'grafika/atrakcje/atrakcja_7.jpg'],
  ['SPORTY WODNE', 'grafika/atrakcje/atrakcja_8.jpg'],
] as const;

const galleryImages = [
  'grafika/galeria/galeria_0.jpg',
  'grafika/galeria/galeria_1.jpg',
  'grafika/galeria/galeria_2.jpg',
  'grafika/galeria/galeria_3.jpg',
  'grafika/galeria/galeria_4.jpg',
  'grafika/galeria/galeria_5.jpg',
  'grafika/galeria/galeria_6.jpg',
  'grafika/galeria/galeria_7.jpg',
  'grafika/galeria/galeria_8.jpg',
  'grafika/hol/hol_0.jpg',
  'grafika/hol/hol_1.jpg',
  'grafika/hol/hol_2.jpg',
  'grafika/integracja/integracja_1.jpg',
  'grafika/kuchnia/kuchnia_0.jpg',
  'grafika/kuchniaA1/aneks1_0.jpg',
  'grafika/kuchniaA2/aneks2_1.jpg',
];

const childrenImages = Array.from({ length: 15 }, (_, index) => `grafika/galDzieci/dzieci_${index}.jpg`);

const nearby = [
  ['las', '60 m'],
  ['morze', '250 m'],
  ['bar na plaży', '260 m'],
  ['zatoka', '400 m'],
  ['szkółki sportów wodnych', '400 m'],
  ['najbliższa restauracja', '40 m'],
  ['sklepy', '50 m'],
  ['PKS', '100 m'],
  ['PKP Jastarnia Wczasy', '400 m'],
  ['ścieżka rowerowa', '100 m'],
  ['centrum', '600 m'],
  ['port rybacki', '900 m'],
  ['marina', '950 m'],
] as const;

const faq = [
  {
    question: 'Jaka pora roku jest najatrakcyjniejsza w regionie?',
    answer:
      'Jastarnia jest piękna cały rok. Latem morze chłodzi i sprzyja sportom wodnym, wiosną i jesienią warto spacerować, jeździć rowerem i korzystać z jodu, a zima daje ciszę, puste plaże i świetne warunki do obserwacji ptaków.',
  },
  {
    question: 'Jakie atrakcje są najbliżej?',
    answer:
      'Korab leży blisko lasu, morza i zatoki. W pobliżu są restauracje, sklepy, wypożyczalnia rowerów, szkółki windsurfingu i kitesurfingu, boisko Orlik, Chata Rybacka, port, marina i ścieżka rowerowa prowadząca w stronę Helu oraz Pucka.',
  },
  {
    question: 'Jak zarezerwować nocleg?',
    answer:
      'Najlepiej telefonicznie pod numerem 693 383 117 lub 605 305 190. Po rezerwacji obiekt czeka 7 dni na zadatek; zwykle jest to wartość przynajmniej dwóch dób.',
  },
  {
    question: 'Gdzie można dobrze zjeść?',
    answer:
      'W promieniu około 100 m znajdują się punkty gastronomiczne: restauracja, stołówka, bar i obiady domowe. Dla osób gotujących samodzielnie w pobliżu są sklepy spożywcze i Biedronka.',
  },
];

const regulations = [
  'Doba hotelowa rozpoczyna się o 15:00 i kończy o 10:00 następnego dnia.',
  'Goście dokonują meldunku w dniu przyjazdu i okazują dokument ze zdjęciem.',
  'Należność za pobyt i opłata klimatyczna pobierane są w dniu przyjazdu.',
  'Rezerwacja pokoju jest dokonywana na podstawie wpłaty zadatku.',
  'Cisza nocna obowiązuje od 22:00 do 7:00.',
  'Parking jest bezpłatny, niestrzeżony, ale monitorowany.',
  'W całym budynku obowiązuje zakaz palenia papierosów, z wyjątkiem balkonów.',
  'Zwierzęta mogą przebywać na terenie obiektu za dodatkową opłatą.',
];

type LightboxImage = {
  src: string;
  alt: string;
};

function useLightbox() {
  const [images, setImages] = React.useState<LightboxImage[]>([]);
  const [index, setIndex] = React.useState(0);

  const open = (items: LightboxImage[], selected = 0) => {
    setImages(items);
    setIndex(selected);
  };

  const close = () => setImages([]);
  const next = () => setIndex((current) => (current + 1) % images.length);
  const previous = () => setIndex((current) => (current - 1 + images.length) % images.length);

  React.useEffect(() => {
    if (!images.length) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') previous();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [images.length]);

  return { images, index, open, close, next, previous };
}

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('hashchange', closeMenu);
    return () => window.removeEventListener('hashchange', closeMenu);
  }, []);

  return (
    <header className="site-header">
      <a href="#start" className="brand" aria-label="KORAB Jastarnia">
        <img src={asset('LogoKorab.png')} alt="KORAB" />
        <span>Jastarnia</span>
      </a>
      <button className="icon-button menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Menu" title="Menu">
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Główna nawigacja">
        {navItems.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SectionHeading({ kicker, title, children }: { kicker: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="section-heading">
      <span>{kicker}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function Hero() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % heroImages.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="start" aria-label="Dom Wypoczynkowy KORAB">
      {heroImages.map((image, index) => (
        <img
          key={image}
          className={index === active ? 'hero-bg hero-bg-active' : 'hero-bg'}
          src={asset(image)}
          alt=""
          aria-hidden={index !== active}
        />
      ))}
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-copy">
          <img className="hero-logo" src={asset('LogoKorab.png')} alt="KORAB" />
          <p className="eyebrow">Dom Wypoczynkowy w Jastarni</p>
          <h1>KORAB</h1>
          <p className="hero-text">
            Rodzinny wypoczynek blisko lasu, morza i zatoki. Komfortowe pokoje, sauna, ogród, parking i spokojna okolica w centrum Półwyspu Helskiego.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#kontakt">
              <Phone size={18} /> Zadzwoń
            </a>
            <a className="button button-secondary" href="#pokoje">
              <Camera size={18} /> Zobacz pokoje
            </a>
          </div>
        </div>
        <div className="hero-facts" aria-label="Najważniejsze informacje">
          {highlights.map(({ icon: Icon, label, text }) => (
            <article key={label} className="fact">
              <Icon size={22} />
              <strong>{label}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="o-nas" className="section about-section">
      <div className="section-inner two-column">
        <div className="photo-stack">
          <img src={asset('grafika/korabnocS.jpg')} alt="Dom Wypoczynkowy Korab nocą" />
          <img src={asset('grafika/Okienko.jpg')} alt="Detal Domu Wypoczynkowego Korab" />
          <img src={asset('grafika/saunaS1.jpg')} alt="Sauna w Korabie" />
        </div>
        <div className="text-flow">
          <SectionHeading kicker="O nas" title="Naszym szczęściem jest dawać szczęście">
            Turystyką zajmujemy się od 1994 roku, a kontakt z obsługą Gości towarzyszył nam od dzieciństwa dzięki działalności rodziców i dziadków.
          </SectionHeading>
          <p>
            Najpierw udało się nam wybudować Korab Niebieski, potem powiększyć posesję, a w 2007 roku wybudować na niej Korab Brązowy. W ten sposób ziściliśmy własne marzenia, a teraz staramy się spełniać oczekiwania naszych Gości.
          </p>
          <p>
            Dom Wypoczynkowy Korab usytuowany jest w klimatycznym nadmorskim kurorcie Jastarnia, w centrum Półwyspu Helskiego, między Zatoką Pucką a Morzem Bałtyckim. Do plaży prowadzi około 250 m spaceru, a zatoka znajduje się niespełna 400 m od posesji.
          </p>
          <blockquote>Tu jest prawdziwa oaza spokoju i doskonałe miejsce na wypoczynek po całorocznym życiu w biegu i zgiełku.</blockquote>
          <p>
            Korab wyróżnia się eleganckimi, funkcjonalnymi wnętrzami. Oferujemy pokoje dwu-, trzy- i czteroosobowe z łazienkami i balkonami oraz dostępem do kuchni i aneksów kuchennych.
          </p>
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="oferta" className="section muted-section">
      <div className="section-inner">
        <SectionHeading kicker="Oferta" title="Doskonałe warunki przez cały rok">
          Pobyt dopasowany do rodzin, par, osób aktywnych, zmotoryzowanych, miłośników zwierząt i wszystkich, którzy szukają ciszy nad morzem.
        </SectionHeading>
        <div className="feature-grid">
          {featureItems.map(({ icon: Icon, title, text }) => (
            <article className="feature-card" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="wide-panel">
          <div>
            <h3>Ciesz się chwilą</h3>
            <p>
              Oprócz regenerujących seansów saunowych można zorganizować rejs pomeranką, wypłynięcie kutrem z możliwością wędkowania lub obserwacji ptaków, masaż oraz usługi kosmetyczne. Gospodarze mieszkają na wspólnej posesji, więc zawsze jest na miejscu osoba dyspozycyjna.
            </p>
          </div>
          <img src={asset('grafika/Port rybacki .jpg')} alt="Port rybacki w Jastarni" />
        </div>
      </div>
    </section>
  );
}

function Rooms({ openLightbox }: { openLightbox: (items: LightboxImage[], selected?: number) => void }) {
  const [selected, setSelected] = React.useState(rooms[0].items[0]);
  const selectedImages = selected.images.map((src) => ({ src, alt: `Pokój ${selected.nr}` }));

  return (
    <section id="pokoje" className="section">
      <div className="section-inner">
        <SectionHeading kicker="Pokoje" title="Wygodne pokoje z łazienkami">
          Każdy pokój ma sprzęt plażowy, TV-SAT, bezpłatny internet i dostęp do kuchni lub aneksu. Na życzenie dostępne są ręczniki, dodatkowy sprzęt plażowy i akcesoria dla małych dzieci.
        </SectionHeading>
        <div className="room-layout">
          <div className="room-groups">
            {rooms.map((group) => (
              <article className="room-group" key={group.group}>
                <img src={asset(group.image)} alt={group.group} />
                <div>
                  <h3>{group.group}</h3>
                  <p>{group.description}</p>
                  <div className="room-buttons" aria-label={`Pokoje ${group.group}`}>
                    {group.items.map((room) => (
                      <button
                        key={room.nr}
                        type="button"
                        className={selected.nr === room.nr ? 'room-button room-button-active' : 'room-button'}
                        onClick={() => setSelected(room)}
                      >
                        {room.nr}
                      </button>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <article className="room-detail">
            <div className="room-detail-header">
              <span>Pokój nr</span>
              <strong>{selected.nr}</strong>
            </div>
            <p>{selected.text}</p>
            <div className="room-gallery">
              {selected.images.slice(0, 4).map((image, index) => (
                <button key={image} type="button" onClick={() => openLightbox(selectedImages, index)} aria-label={`Otwórz zdjęcie pokoju ${selected.nr}`}>
                  <img src={asset(image)} alt={`Pokój ${selected.nr}, zdjęcie ${index + 1}`} />
                </button>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="cennik" className="section muted-section">
      <div className="section-inner">
        <SectionHeading kicker="Cennik" title="Ceny na rok 2026">
          Ceny podane za pokój za dobę. Osoba dodatkowa w pokoju otrzymuje dostawkę, komplet pościeli i ręczniki oraz płaci połowę ceny liczonej od osoby za dobę.
        </SectionHeading>
        <div className="period-grid">
          {periods.map((period) => (
            <article className="period-card" key={period.name}>
              <CalendarDays size={22} />
              <h3>{period.name}</h3>
              {period.dates.map((date) => (
                <p key={date}>{date}</p>
              ))}
            </article>
          ))}
        </div>
        <div className="table-wrap">
          <table className="price-table">
            <thead>
              <tr>
                <th>Pokoje</th>
                <th>Poza sezonem</th>
                <th>Sezon</th>
                <th>Szczyt sezonu</th>
              </tr>
            </thead>
            <tbody>
              {priceRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="notice-grid">
          <article>
            <Info size={22} />
            <h3>Dodatkowe informacje</h3>
            <p>Dzieci do lat 3 śpiące w łóżku rodziców bezpłatnie. Łóżeczko turystyczne: 20 zł/doba. Pralka: 20 zł, suszarka bębnowa: 20 zł. Pies lub kot: 20-30 zł/doba.</p>
          </article>
          <article>
            <Banknote size={22} />
            <h3>Opłaty i przelew</h3>
            <p>Opłata klimatyczna wynosi 3 zł od osoby za dobę. Numer konta PKO BP: 59 1020 1912 0000 9502 0113 0574.</p>
          </article>
          <article>
            <Clock3 size={22} />
            <h3>Doba noclegowa</h3>
            <p>Doba trwa od 15:00 do 10:00. Warunkiem rezerwacji jest dokonanie przedpłaty.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Sauna({ openLightbox }: { openLightbox: (items: LightboxImage[], selected?: number) => void }) {
  const saunaImages = ['grafika/sauna/sauna_6.jpg', 'grafika/sauna/sauna_0.jpg', 'grafika/sauna/sauna_1.jpg', 'grafika/sauna/sauna_2.jpg', 'grafika/sauna/sauna_3.jpg', 'grafika/sauna/sauna_s2.jpg', 'grafika/sauna/sauna_S3.jpg'].map((src) => ({
    src,
    alt: 'Sauna w Korabie',
  }));

  return (
    <section id="sauna" className="section">
      <div className="section-inner two-column sauna-layout">
        <div className="text-flow">
          <SectionHeading kicker="Sauna" title="Sauna fińska i infrared">
            Do dyspozycji Gości są sauna infrared do 50°C oraz sauna fińska, w której można wybrać temperaturę od 60°C do 110°C.
          </SectionHeading>
          <p>
            Strefa sauny wyposażona jest w inhalacyjne lampy solne, koloroterapię oraz wieżę z głośnikami. Znajdują się tu również łazienka, toaleta, kabina prysznicowa i pokój wypoczynku z leżankami.
          </p>
          <div className="benefit-list">
            {saunaBenefits.map((benefit) => (
              <span key={benefit}>
                <Heart size={16} /> {benefit}
              </span>
            ))}
          </div>
        </div>
        <div className="sauna-media">
          <button type="button" onClick={() => openLightbox(saunaImages, 0)}>
            <img src={asset('grafika/sauna/sauna_6.jpg')} alt="Sauna w Korabie" />
          </button>
          <div>
            {saunaImages.slice(1, 4).map((image, index) => (
              <button type="button" key={image.src} onClick={() => openLightbox(saunaImages, index + 1)}>
                <img src={asset(image.src)} alt={image.alt} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Attractions({ openLightbox }: { openLightbox: (items: LightboxImage[], selected?: number) => void }) {
  const lightboxItems = attractions.map(([label, src]) => ({ src, alt: label }));

  return (
    <section id="atrakcje" className="section muted-section">
      <div className="section-inner">
        <SectionHeading kicker="Atrakcje" title="Jastarnia i Półwysep Helski w zasięgu spaceru">
          Aktywny wypoczynek, kultura kaszubska, port, ścieżki rowerowe i sporty wodne tworzą naturalny rytm pobytu w Korabie.
        </SectionHeading>
        <div className="distance-grid">
          {nearby.map(([place, distance]) => (
            <article key={place}>
              <MapPin size={18} />
              <span>{place}</span>
              <strong>{distance}</strong>
            </article>
          ))}
        </div>
        <div className="image-grid labeled-grid">
          {attractions.map(([label, image], index) => (
            <button key={`${label}-${image}`} type="button" onClick={() => openLightbox(lightboxItems, index)}>
              <img src={asset(image)} alt={label} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ openLightbox }: { openLightbox: (items: LightboxImage[], selected?: number) => void }) {
  const images = galleryImages.map((src, index) => ({ src, alt: `Galeria Korab ${index + 1}` }));

  return (
    <section id="galeria" className="section">
      <div className="section-inner">
        <SectionHeading kicker="Galeria" title="Wnętrza, ogród i nadmorski klimat">
          Zdjęcia z oryginalnej strony, uporządkowane w lekką, responsywną galerię.
        </SectionHeading>
        <div className="image-grid gallery-grid">
          {images.map((image, index) => (
            <button key={image.src} type="button" onClick={() => openLightbox(images, index)}>
              <img src={asset(image.src)} alt={image.alt} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Children({ openLightbox }: { openLightbox: (items: LightboxImage[], selected?: number) => void }) {
  const images = childrenImages.map((src, index) => ({ src, alt: `Plac zabaw i udogodnienia dla dzieci ${index + 1}` }));

  return (
    <section id="dzieci" className="section muted-section">
      <div className="section-inner two-column child-layout">
        <div className="text-flow">
          <SectionHeading kicker="Dla dzieci" title="Bezpieczny pobyt dla rodzin">
            Bliskość plaży, spokojna okolica i ogrodzona posesja sprawiają, że Korab chętnie wybierają rodziny z dziećmi.
          </SectionHeading>
          <p>
            Na miejscu dostępne są łóżeczko turystyczne, wanienka, krzesełko do karmienia, podgrzewacz do butelek, bujaczek, podest, nocnik i nakładka sedesowa. Dzieci do lat 3 mogą nocować bezpłatnie, jeśli śpią w łóżku rodziców.
          </p>
          <p>
            Plac zabaw na posesji ma piaskownicę, domek ze ścianką wspinaczkową i zjeżdżalnią, ławkę bujaną, huśtawki, drabinki, stolik z krzesełkami, statek-bujak i trampolinę.
          </p>
        </div>
        <div className="children-gallery">
          {['grafika/PlacZabaw.jpg', 'grafika/placzabaw-19.jpg', 'grafika/dzieci__11.jpg', ...childrenImages.slice(0, 3)].map((image, index) => (
            <button key={image} type="button" onClick={() => openLightbox(images, Math.min(index, images.length - 1))}>
              <img src={asset(image)} alt="Dla dzieci w Korabie" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="section contact-section">
      <div className="section-inner contact-layout">
        <div className="contact-card">
          <SectionHeading kicker="Kontakt" title="Dom Wypoczynkowy KORAB">
            Preferujemy rozmowy telefoniczne. Zapraszamy do kontaktu przez cały tydzień w godzinach 9:00-22:00.
          </SectionHeading>
          <div className="contact-methods">
            <a href="tel:+48693383117">
              <Phone size={20} /> 693 383 117
            </a>
            <a href="tel:+48605305190">
              <Phone size={20} /> 605 305 190
            </a>
            <a href="mailto:wioletakohnke@gmail.com">
              <Mail size={20} /> wioletakohnke@gmail.com
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Ogrodowa%2067%2C%2084-140%20Jastarnia" target="_blank" rel="noreferrer">
              <MapPin size={20} /> ul. Ogrodowa 67, 84-140 Jastarnia
            </a>
          </div>
          <div className="bank-info">
            <strong>PKO BP</strong>
            <span>59 1020 1912 0000 9502 0113 0574</span>
            <span>IBAN: PL 59 1020 1912 0000 9502 0113 0574</span>
            <span>BIC/SWIFT: BPKOPLPW</span>
          </div>
        </div>
        <div className="map-panel">
          <iframe
            title="Mapa dojazdu do Domu Wypoczynkowego Korab"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9220.67785363131!2d18.656718174903478!3d54.706641621107735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdaa524a5dea13%3A0x8660ae8c172ff2a5!2sOgrodowa+67%2C+84-140+Jastarnia%2C+Polska!5e0!3m2!1spl!2spl!4v1427585816561"
            loading="eager"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Ogrodowa%2067%2C%2084-140%20Jastarnia" target="_blank" rel="noreferrer">
            <MapPin size={18} /> Otwórz mapę
          </a>
        </div>
      </div>
    </section>
  );
}

function FaqAndRules() {
  return (
    <section id="pytania" className="section">
      <div className="section-inner split-panel">
        <div>
          <SectionHeading kicker="Pytania" title="Najczęstsze pytania Gości" />
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading kicker="Regulamin" title="Najważniejsze zasady pobytu" />
          <ol className="rules-list">
            {regulations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Lightbox({
  images,
  index,
  close,
  next,
  previous,
}: {
  images: LightboxImage[];
  index: number;
  close: () => void;
  next: () => void;
  previous: () => void;
}) {
  if (!images.length) return null;
  const image = images[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Podgląd zdjęcia">
      <button className="lightbox-backdrop" type="button" onClick={close} aria-label="Zamknij podgląd" />
      <div className="lightbox-content">
        <button className="icon-button lightbox-close" type="button" onClick={close} aria-label="Zamknij" title="Zamknij">
          <X size={24} />
        </button>
        <button className="icon-button lightbox-prev" type="button" onClick={previous} aria-label="Poprzednie zdjęcie" title="Poprzednie">
          <ChevronLeft size={28} />
        </button>
        <img src={asset(image.src)} alt={image.alt} />
        <button className="icon-button lightbox-next" type="button" onClick={next} aria-label="Następne zdjęcie" title="Następne">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}

function App() {
  const lightbox = useLightbox();

  React.useLayoutEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const element = document.getElementById(id);
      if (!element) return;
      const top = element.getBoundingClientRect().top + window.scrollY - 76;
      const previousBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = previousBehavior;
      });
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Offer />
        <Rooms openLightbox={lightbox.open} />
        <Pricing />
        <Sauna openLightbox={lightbox.open} />
        <Attractions openLightbox={lightbox.open} />
        <Gallery openLightbox={lightbox.open} />
        <Children openLightbox={lightbox.open} />
        <Contact />
        <FaqAndRules />
      </main>
      <footer className="footer">
        <div>
          <img src={asset('LogoKorab.png')} alt="KORAB" />
          <span>Dom Wypoczynkowy KORAB</span>
        </div>
        <p>Wszelkie prawa zastrzeżone.</p>
      </footer>
      <Lightbox images={lightbox.images} index={lightbox.index} close={lightbox.close} next={lightbox.next} previous={lightbox.previous} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
