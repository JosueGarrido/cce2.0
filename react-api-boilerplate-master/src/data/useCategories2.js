/**
 * Created by chalosalvador on 8/18/20
 */
import useSWR from 'swr';
import API from './index';

export const useCategories2 = () => {
    const { data, error } = useSWR( `/category2`, API.fetcher );

    return {
        categories2: data && data.data,
        isLoading: !error && !data,
        isError: error
    };
};
