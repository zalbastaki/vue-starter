import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default () => {
    library.add(faChevronDown);

    Vue.component('fa-icon', FontAwesomeIcon);
};
