import React, { useRef, useState, useEffect, ComponentType, FunctionComponent } from 'react';

interface WithLazyProps {
    [key: string]: unknown;
}

interface Extractor<T> {
    (module: T): unknown;
}

export const withLazy = <T, P extends WithLazyProps>(
    Component: ComponentType<P>,
    moduleImport: () => Promise<T>,
    extractor: Extractor<T>
): FunctionComponent<P> => {
    return (props: P) => {
        const lazyModuleRef = useRef<ReturnType<typeof extractor>>();
        const [isLoaded, setIsLoaded] = useState(false);

        useEffect(() => {
            moduleImport().then((module) => {
                lazyModuleRef.current = extractor(module);
                setIsLoaded(true);
                return module;
            });
        }, []);

        return isLoaded && lazyModuleRef.current ? <Component {...(lazyModuleRef.current as object)} {...props} /> : null;
    };
};
  