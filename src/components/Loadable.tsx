import { Suspense, LazyExoticComponent } from 'react';
import Splash from "./Splash";

export default function Loadable(Component: LazyExoticComponent<() => JSX.Element>) {
    return function Wrap(props: any) {
        return (
            <Suspense fallback={<Splash />}>
                <Component {...props} />
            </Suspense>
        );
    };
}