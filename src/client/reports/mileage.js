/* Copyright (c) 2016 Grant Miner */
'use strict';
import {translate as t} from '../i18n';
const m = require('mithril');
const moment = require('moment');
const tohms = require('./tohms');
const street = require('../../common/addressdisplay').street;
const city = require('../../common/addressdisplay').city;
const state = require('../../common/addressdisplay').state;
const tomiles = require('../tomiles');
const _ = require('lodash');
const isUserMetric = require('../isUserMetric');

export function view(ctrl, args, extras) {

    if (!(args.result() && args.result().vehicles && args.result().results)) {
        return '';
    }

	return m('div', [
		m('div', [
			m('table.table-condensed table-bordered table-striped dataTable', [
				m('thead', [
					m('td', t('State')),
					m('td', isUserMetric() ? t('Kilometers') : t('Miles'))
				]),
				m('tbody', _.map(Object.keys(args.result().vehicles), function(vid) {
					return [
						m('tr', m('td[colspan=7].group', args.result().vehicles[vid].name)),
						Object.keys(args.result().results[vid]).map( function(key) {
							return m('tr', [
								m('td', key),
    							m('td', tomiles(args.result().results[vid][key]))
						   ])
						})
					]
				}))
			])
		]),

		m('br'),

		args.result() && args.result().vehicles ? m('div', [
			m('table.table-condensed table-bordered table-striped dataTable', [
				m('thead', [
					m('td', t('State')),
					m('td', isUserMetric() ? t('Kilometers') : t('Miles'))
				]),
				m('tbody', _.map(Object.keys(args.result().totals), function(key) {
					return m('tr', [
						m('td', key),
						m('td', tomiles(args.result().totals[key]))
					])
				}))
			])
		]) : '',
	]);
}
