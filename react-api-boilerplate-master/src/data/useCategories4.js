/**
 * Created by chalosalvador on 8/18/20
 */
import useSWR from 'swr';
import API from './index';

export const useCategories4 = () => {
    const { data, error } = useSWR( `/category4`, API.fetcher );

    return {
        categories4: data && data.data,
        isLoading4: !error && !data,
        isError4: error
    };
};
