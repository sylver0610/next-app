import { useRouter } from 'next/router';
import * as React from 'react';

export interface IPostDetailPageProps {
}

export default function PostDetailPage (props: IPostDetailPageProps) {
    const router = useRouter()
    return (
        <div>
            <h1>Post Detail page {JSON.stringify(router.query)}</h1>
        </div>
    );
}
