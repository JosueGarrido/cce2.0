import useSWR from 'swr';
import API from './index';

export const useUserList = () => {
    const { data, error, mutate } = useSWR( `/users`, API.fetcher );

    return {
        users: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};
