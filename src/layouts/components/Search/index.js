import classNames from 'classnames/bind';
import Style from '~/layouts/components/Header/Header.module.scss';
import Wrapper from '../../../components/Popper/Wrapper';
import AccountItem from '~/layouts/components/AccountItem';
import useDebounce from '~/components/hooks/useDebounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import * as searchServices from '~/services/searchServices';

const cx = classNames.bind(Style);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debounce = useDebounce(searchValue, 800);

    useEffect(() => {
        if (!debounce) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        const fecthApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounce);
            setSearchResult(result);
            setLoading(false);
        };
        fecthApi();
    }, [debounce]);

    const handleHiddenResult = () => {
        setShowResult(false);
    };

    const handleClearButton = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleChangeInput = (event) => {
        if (!event.target.value.startsWith(' '))
            setSearchValue(event.target.value);
    };

    return (
        <Tippy
            interactive
            appendTo={()=>document.body}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                    <Wrapper>
                        <h4 className={cx('search-tittle')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </Wrapper>
                </div>
            )}
            onClickOutside={handleHiddenResult}
        >
            <div className={cx('search')}>
                <input ref={inputRef} value={searchValue} type='text' placeholder='Tìm kiếm' spellCheck='false'
                       onChange={handleChangeInput} onFocus={() => setShowResult(true)} />
                {!!searchValue && !loading && (
                    <button className={cx('clear')}><FontAwesomeIcon icon={faCircleXmark} onClick={handleClearButton} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('load')} icon={faSpinner} />}
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()} ><FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;