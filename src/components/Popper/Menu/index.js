import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';
import Wrapper from '../Wrapper';
import Tippy from '@tippyjs/react/headless';
import MenuItem from '~/components/Popper/Menu/MenuItem';
import Language from '~/components/Popper/Menu/Language';
import { useState } from 'react';

const cx = classNames.bind(Styles);


function Menu({
                  children, items = [], onChange = () => {
    },
              }) {

    const [his, setHis] = useState([{ data: items }]);
    const current = his[his.length - 1];
    const renderItem = () => {
        return (
            current.data.map((item, index) => {
                    const isParent = !!item.children;
                    return <MenuItem key={index} data={item} onClick={() => {
                        if (isParent) {
                            setHis((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }} />;
                },
            ));
    };

    return (
        <Tippy
            interactive={true}
            delay={[0, 700]}
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex='-1' {...attrs}>
                    <Wrapper>
                        {his.length > 1 && <Language title='Ngôn ngữ' onBack={() => {
                            setHis((prev) => prev.slice(0, prev.length - 1),
                            );
                        }} />}
                        {renderItem()}
                    </Wrapper>
                </div>
            )}
            onHide={() => {
                setHis(prev => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;