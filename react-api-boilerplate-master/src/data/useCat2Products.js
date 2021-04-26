import useSWR from 'swr';
import API from './index';

export const useCat2Products = ( id ) => {
    const { data, error, mutate } = useSWR( () => `/category2/${ id }/products`, API.fetcher );
    return {
        cat2: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};
