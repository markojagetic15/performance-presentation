import {lazy, Suspense} from 'react';

const DynamicComponent = lazy(() => import('./DynamicComponent'));

export const CodeSplitting = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent/>
    </Suspense>
);
