import { useRef, useState } from 'react'
import { SortConfig, SortValue } from '../types/table';

const sortOrder: SortValue[] = [null, 'asc', 'desc']

function useSortableHeader() {
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', direction: null });
    const sortOrderState = useRef<number>(0);

    const handleSort = (key: string) => {
        if (sortConfig.key !== key) {
            sortOrderState.current = 1;
        } else {
            sortOrderState.current = (sortOrderState.current + 1) % 3;
        }

        setSortConfig({
            key,
            direction: sortOrder[sortOrderState.current]
        });
    };

    return {
        handleSort,
        sortConfig,
    }
}

export default useSortableHeader;
