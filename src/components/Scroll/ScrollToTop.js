import { useEffect, useState } from 'react';
import {SlArrowUpCircle} from 'react-icons/sl';
import {classNames} from '../../data/classNames';
import {
	ScrollButton
} from './ScrollStyles';

export const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth',
        });
    };

    useEffect (() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }

    },[])


    return (
        <div className='fixed bottom-2 right-2'>
            <button onClick={scrollToTop} className={classNames(
                    isVisible ? 'opacity-100' : 'opacity-0',
            )}>
               <ScrollButton> <SlArrowUpCircle/></ScrollButton>
            </button>
        </div>
    )

};

export default ScrollToTop