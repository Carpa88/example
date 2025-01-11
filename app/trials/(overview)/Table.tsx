'use client'
import { DeleteButton, UpdateButtonIcon } from '@app/_ui/buttons';
import { colTrials } from '../consts';
import { deleteTrial, fetchFilteredTrials } from './actions';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ITrial } from '@app/trials/types';

const Table = ({ 
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
})  => {
  const [currentData, setCurrentData] = useState<ITrial[] | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFilteredTrials(query, currentPage);
        if (!result || result.length === 0) {
          alert('Данные не найдены');
          setCurrentData(null); // Set state to null if no data
        } else {
          setCurrentData(result); // Update state with fetched data
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setCurrentData(null); // Handle errors by setting state to null
      }
    };

    fetchData(); // Call the async function inside useEffect
  }, [query, currentPage]); // Re-fetch data when query or currentPage changes
  
    console.log(currentData);

  const handleClick = async(id: string): Promise<void> => {
    const result = await deleteTrial(id);
    if (!result.success) {
      alert(result.message);
    } else {
      setCurrentData((currentData || []).filter(item => item.id !== id))
      console.log(result.message);
    }
  }
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-slate-50 p-2 md:pt-0">
          <div className="md:hidden">
            {currentData?.map((item) => (
              <div
                key={item.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex w-full items-center justify-between">
                  <div>
                    <p className="text-xl font-medium text-slate-900">
                      <Link href={`/trials/${item.id}/details`}>{item.name}</Link>
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateButtonIcon href={`/trials/${item.id}/edit`} />
                    <DeleteButton onClick={()=>handleClick(item.id)}/>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>
                        <span className="text-sm text-slate-500 font-machine">
                          судья:
                        </span>{' '}
                        {item.judge_id}
                      </p>
                    </div>
                    <p className="text-sm text-slate-500">
                      {item.start_at} - {item.ends_on}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-slate-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                {colTrials.map(
                  (item) =>
                    item !== 'id' && (
                      <th
                        scope="col"
                        className="px-4 py-5 font-medium sm:pl-6"
                        key={item}
                      >
                        {item}
                      </th>
                    )
                )}
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Исправить</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {currentData?.map((item) => (
                <tr
                  key={item.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  {Object.entries(item).map(([key, value]) => {
                    if (key !== 'id') {
                      return key === 'name' ? (
                        <Link href={`/trials/${item.id}/details`} key={key}>
                          <td className="whitespace-nowrap py-3 pr-3">
                            {value}
                          </td>
                        </Link>
                      ) : (
                        <td className="whitespace-nowrap py-3 pr-3" key={key}>
                          {value}
                        </td>
                      );
                    }})}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateButtonIcon href={`/trials/${item.id}/edit`} />
                      <DeleteButton onClick={() => handleClick(item.id)}/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
