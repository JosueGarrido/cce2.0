/**
 * Created by chalosalvador on 8/18/20
 */
import useSWR from 'swr';
import API from './index';

export const useUser = ( id, options= {} ) => {
    const { data, error, mutate } = useSWR( `/users/${ id }`, API.fetcher, options );

    return {
        user: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate

    };
};
