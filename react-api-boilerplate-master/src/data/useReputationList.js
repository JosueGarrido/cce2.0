import useSWR from 'swr';
import API from './index';

export const useReputationList = (id) => {
    const { data, error, mutate } = useSWR( `/users/${ id }/reputations`, API.fetcher );

    return {
        reputations: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};
