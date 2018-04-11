import React from 'react';

import BaseComponent from '../BaseComponent';

export default class InputBase extends BaseComponent {
    constructor(props, context) {
        super(props, context);
    }

    mapItem = (item) => {
        if (typeof item === 'string') {
            return {
                label: item,
                value: item
            }
        }
        return item;
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };
}