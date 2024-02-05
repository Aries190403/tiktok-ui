import { forwardRef, useState } from 'react';
import Images from '~/assets/images';

function Image({ alt, src, fallback : CustomFallback =Images.noImage ,...props }, ref) {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(CustomFallback);
    };
    return <img ref={ref} src={fallBack || src} alt={alt} {...props} onError={handleError} />;
}

export default forwardRef(Image);