import Intl from 'intl';
import locale from 'intl/locale-data/jsonp/pt-BR.js';

const options = { style: 'currency', currency: 'BRL' };
export default NumberFormatter = new Intl.NumberFormat('pt-BR', options);