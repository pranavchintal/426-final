import React, { useState } from 'react';
import closeIcon from './icons/noun_Close_3610311.png'
import SimpleBar from 'simplebar-react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles'

import 'simplebar/dist/simplebar.min.css';

export class PatchBrowser extends React.Component {

    render() {

        const CssTextField = withStyles({
            root: {
              '& label.Mui-focused': {
                color: 'white',
                fontFamily: "futura-pt"
              },
              '& .MuiFormLabel-root': {
                color: 'white',
                fontFamily: "futura-pt"
              },
              '& .MuiInputBase-root': {
                color: 'white',
              },
              '& .MuiInput-underline:before': {
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white',
              },
            },
          })(TextField);
          
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

        return (
            <div className={showHideClassName}>
                <section className="browser">
                    <div className="browser-main">
                        <div className="browser-positioner">
                            <h1 className="browser-title">
                                PATCH BROWSER
                            </h1>
                            <div className="browser-search">
                                <CssTextField id="standard-basic" label="Search by patch name" value=""/>
                            </div>
                            <img src={closeIcon} className="browser-close-button" alt="close" onClick={this.props.handleClose} />
                            <div className="table-header">
                                <div className="header-cell">
                                    <span>USER</span>
                                </div>
                                <div className="header-cell">
                                    <span>PATCH NAME</span>
                                </div>
                                <div className="header-cell">
                                    <span>DESCRIPTION</span>
                                </div>
                            </div>
                            <SimpleBar style={{ maxHeight: "40vh" }}>
                                <div className="table-body">
                                    <div className="table-row">
                                        <div className="table-cell">
                                            <span>pranavchintal</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>3x Osc</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae.</span>
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">
                                            <span>pranavchintal</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Dub Bass</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae.</span>
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">
                                            <span>pranavchintal</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>SynBrass</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae.</span>
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">
                                            <span>pranavchintal</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Wide Pad</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae.</span>
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">
                                            <span>pranavchintal</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Choir</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae.</span>
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">
                                            <span>pranavchintal</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Warbly Strings</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae.</span>
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">
                                            <span>pranavchintal</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>3x Osc</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae.</span>
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">
                                            <span>pranavchintal</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>3x Osc</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae.</span>
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">
                                            <span>pranavchintal</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>3x Osc</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae.</span>
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">
                                            <span>pranavchintal</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>3x Osc</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae.</span>
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">
                                            <span>pranavchintal</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>3x Osc</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae.</span>
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">
                                            <span>pranavchintal</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>3x Osc</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae.</span>
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">
                                            <span>pranavchintal</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>3x Osc</span>
                                        </div>
                                        <div className="table-cell">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae.</span>
                                        </div>
                                    </div>
                                </div>
                            </SimpleBar>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}