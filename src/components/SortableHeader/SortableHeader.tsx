import { SortConfig } from '../../types/table';

function SortableHeader({
    label,
    sortKey,
    currentSort,
    onSort
}: {
    label: string;
    sortKey: string;
    currentSort: SortConfig;
    onSort: (key: string) => void;
}) {
    return (
        <th
            className="sortable position-relative"
            onClick={() => onSort(sortKey)}
            style={{ cursor: 'pointer' }}
        >
            {label}
            <span className="position-absolute" style={{ right: '8px' }}>
                {currentSort.key === sortKey && currentSort.direction !== null && (
                    currentSort.direction === 'asc' ? '↑' : '↓'
                )}
            </span>
        </th>
    );
}

export default SortableHeader