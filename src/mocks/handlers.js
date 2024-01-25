import {HttpResponse, http} from 'msw';
import currencies from './data/currencies.json';
import {lastRates} from './data/rates';
import {historyRates} from './data/historyRates';

export const handlers = [
    /** список валют. */
    http.get('currencies', () => HttpResponse.json(currencies)),
    /** курсы валют. */
    http.get('rate/latest', () => HttpResponse.json(lastRates)),
    /** исторические курсы валют. */
    http.get('history', ({request}) => {
        const base = new URL(request.url).searchParams.get('base');
        const code = new URL(request.url).searchParams.get('code');

        return HttpResponse.json(historyRates({base, code}));
    }),
];
