function temporary(queryKey: string | Array<number | string | null>): string | string[] {
    if (Array.isArray(queryKey)) {
        queryKey.unshift('temporary');

        return queryKey.map((k) => k?.toString() || 'UNSEPECIFIED');
    }

    return ['temporary', queryKey];
}

const queriesKeys = {
    account: temporary(['account']),
}

export default queriesKeys;