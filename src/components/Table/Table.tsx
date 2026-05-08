import { useState } from 'react';
import styles from './Table.module.scss';
import DownArrow from '@icons/arrow_drop_down.svg?react';
import UpArrow from '@icons/arrow_drop_up.svg?react';

interface IColumn {
  key: string;
  title: string;
}

interface ISortItem {
  key: string;
  direction: 'asc' | 'desc';
}

export interface ITableProps {
  data: Record<string, string | number>[];
  columns: IColumn[];
}

export const Table = ({ data, columns }: ITableProps) => {
  const [sortStack, setSortStack] = useState<ISortItem[]>([]);

  const handleSort = (key: string) => {
    setSortStack((state) => {
      const existing = state.find((item) => item.key === key);
      if (!existing) {
        return [{ key, direction: 'desc' }, ...state];
      }
      return [
        {
          key,
          direction: existing.direction === 'asc' ? 'desc' : 'asc',
        },
        ...state.filter((item) => item.key !== key),
      ];
    });
  };

  const getDirection = (key: string) => sortStack.find((item) => item.key === key)?.direction;

  const sortedData = [...data].sort((a, b) => {
    for (const rule of sortStack) {
      const aValue = a[rule.key];
      const bValue = b[rule.key];
      let result = 0;
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        result = aValue - bValue;
      } else {
        result = String(aValue).localeCompare(String(bValue));
      }
      if (result !== 0) {
        return rule.direction === 'asc' ? result : -result;
      }
    }
    return 0;
  });

  return (
    <table className={styles.table}>
      <colgroup className={styles.table__group}>
        {columns.map((column) => (
          <col key={column.key} />
        ))}
      </colgroup>

      <thead className={styles.table__head}>
        <tr>
          {columns.map((column) => {
            const direction = getDirection(column.key);
            return (
              <th key={column.key} onClick={() => handleSort(column.key)}>
                <span className={styles.table__topItem}>
                  {column.title}
                  {(!direction || direction === 'asc') && <UpArrow />}
                  {direction === 'desc' && <DownArrow />}
                </span>
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody className={styles.table__body}>
        {sortedData.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.key}>{String(row[column.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
