import * as React from 'react';
export class ChangeStylePayload {
    constructor(
        public id: number,
        public style: React.CSSProperties
    ) { }
}