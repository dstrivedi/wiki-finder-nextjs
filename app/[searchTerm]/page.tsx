import React from 'react';
import getWikiResults from '@/lib/getWikiResults';
import Item from './components/Item';

type Props = {
    params:  {
        searchTerm: string
    }
}

export async function generateMetadata({params: {searchTerm}}:Props) {
    const response : Promise<SearchResult> = getWikiResults(searchTerm);
    const data = await response;
    const displayTerm = searchTerm.replaceAll('%20',' ');

    if(!data?.query?.pages) {
        return {
            title: `${displayTerm} Not found`
        }
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}

export default async function SearchTerm({params: {searchTerm}}: Props) {
    const response : Promise<SearchResult> = getWikiResults(searchTerm);
    const data = await response;
    const results: Result[]  | undefined = data?.query?.pages;
    const content = (
        <main className='w-[100vh] m-auto'>
            {results ? Object.values(results).map(result => {
                return  <Item key={result.title} result={result} />
                }) : <h2 className='pt-[50px] flex items-center justify-center text-3xl font-bold'>{`${searchTerm} not found!, search something else.`}</h2>
            } 
        </main>
    )
    return content;
}