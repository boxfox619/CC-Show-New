import * as React from 'react';

function getFormData<T>(e: React.FormEvent): T {
    e.preventDefault();
    const form = (e.target as HTMLFormElement);
    const formData = new FormData(form);
    const data: any = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    return data as T;
}

export default getFormData;