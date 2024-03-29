import heart from 'components/specialists/img/heart.png';
import message from 'components/specialists/img/massage.png';
import nurses from 'components/specialists/img/nurses.png';
import therapy from 'components/specialists/img/therapy.png';

import magnifier from 'components/how-it-works/img/magnifier.svg';
import mouse from 'components/how-it-works/img/mouse.svg';
import hourglass from 'components/how-it-works/img/hourglass.svg';
import dollar from 'components/how-it-works/img/dollar.svg';

import user1 from 'components/recalls/img/user1.jpg';
import user2 from 'components/recalls/img/user2.jpg';

const description = '10,000 zarejestrowanych opiekunów czeka na bezpośredni kontakt z poszukującymi opieki';
export const SPECIALISTS = [
    {
        id: 1,
        src: heart,
        title: 'Opiekunowie z doświadczeniem',
        description,
    },
    {
        id: 2,
        src: message,
        title: 'Masażyści',
        description,
    },
    {
        id: 3,
        src: nurses,
        title: 'Pielęgniarki i opiekunowie medyczni',
        description,
    },
    {
        id: 4,
        src: therapy,
        title: 'Fizjoterapeuci',
        description,
    },
];

export const ROAD_POINTS =  [
    {
        img: {
            src: magnifier,
            alt: 'magnifier',
        },
        label: 'Search a Caregiver',
        text: 'Ustalasz kryteria wyboru i  wyszukujesz opiekuna z  wymaganymi',
    },
    {
        img: {
            src: mouse,
            alt: 'mouse',
        },
        label: 'Select a Caregiver',
        text: 'Decydujesz na podstawie  weryfikacji profilu i opinii inyych  o',
    },
    {
        img: {
            src: hourglass,
            alt: 'hourglass',
        },
        label: 'Test Period',
        text: 'Opiekun rozpoczyna okres próbny  i jeśli jesteście zadowoleni,',
    },
    {
        img: {
            src: dollar,
            alt: 'dollar',
        },
        label: 'Pay after Start',
        text: 'Opiekun dostaje wynagrodzenie dopiero po rozpoczęciu pracy. Po',
    },
];


export const RECALLS = [
    {
        text: 'Moja mama zachorowała jakiś czas temu i nie jest już zupełnie samodzielna. Sama przestałam dawac radę zajmować się własnym domem ..',
        img: {
            src: user1,
            alt: 'Aneta, 39l',
        },
        name: 'Aneta, 39l',
        type: 'Service provider',
    },
    {
        text: 'Jestem zadowolona z korzystania z portalu. Nic mnie to nie kosztuje, a mam dostęp do ogłoszeń o pracy z Polski i zagraicy. Byłam już w pracy ..',
        img: {
            src: user2,
            alt: 'Katarzyna, 51 lat',
        },
        name: 'Katarzyna, 51 lat',
        type: 'Client',
    },
];

export const OUR_PREFERENCES = [
    '10,000 zarejestrowanych opiekunów czeka na bezpośredni kontakt  z poszukującymi opieki',
    'Gwarantujemy bezpieczeństwo przelewów pieniężnych oraz zapłatę za pracę, kontrakt reguluje współpracę.',
    'Nie jesteśmy agencją. Nasza prowizja to jedynie 10% od ceny opieki pobierane od klienta. Dla opiekunek portal jest darmowy.',
    'Samemu określasz długość płatnego okresu próbnego i okresu wypowiedzenia',
    'Oferujemy usługi dodatkowe: ubezpieczenie i assistance 24h poprzez konsultantów w Help Center oraz rabaty na kursy językowe i szkolenia opiekunów',
    'Pewność kogo zatrudniasz: przeprowadzamy interview pod kątem jezyków obcych, sprawdzamy referencje i ukończone dyplomy. Dodatkowo po każdej pracy wystawiane są opinie, także wybierając opiekuna bazujesz na doświadczeniach innych z wybraną osobą.',
];

export const FOOTER_COLUMNS = [
    {
        label: 'O portalu',
        text: `Kim jesteśmy
               O nas w mediach
               Zasady i regulaminy`,
    },
    {
        label: 'Współpraca',
        text: `Zostań naszym partnerem
               Praca`,
    },
    {
        label: 'Centrum Pomocy',
        text: `Opiekunowie
               Poszukujący opieki
               Kontakt`,
    },
];
