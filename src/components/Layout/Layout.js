import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Styles from './Layout.module.css';

const layout = ( props ) => {
    return(
        <Aux>
            <div>
                Toolbar, SideDrawer, BackDrop
            </div>
            <main className = {Styles.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;