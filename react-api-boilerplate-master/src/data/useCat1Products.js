import useSWR from 'swr';
import API from './index';

export const useCat1Products = ( id ) => {
    const { data, error, mutate } = useSWR( () => `/category1/${ id }/products`, API.fetcher );
    return {
        cat1: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};
