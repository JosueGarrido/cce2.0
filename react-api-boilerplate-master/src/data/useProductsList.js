import useSWR from 'swr';
import API from './index';

export const useProductsList = (id) => {
    const { data, error, mutate } = useSWR( `/users/${ id }/products`, API.fetcher );

    return {
        products: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};
