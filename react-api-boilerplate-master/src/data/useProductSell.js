import useSWR from 'swr';
import API from './index';

export const useProductSell = ( id ) => {
    const { data, error, mutate } = useSWR( () => `/products/${ id }/sales`, API.fetcher );
    return {
        sales: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};
