import React from 'react';
import closeIcon from './icons/noun_Close_3610311.png'
import SimpleBar from 'simplebar-react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles'

import 'simplebar/dist/simplebar.min.css';
import fire from '../fire';

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

export class PatchBrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: null
        }
        this.user = this.props.user;
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    render() {

        let dataArr = [
            {
                user: "pranavchintal",
                patchName: "3x Osc",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },
            {
                user: "pranavchintal",
                patchName: "Dream Strings",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },
            {
                user: "pranavchintal",
                patchName: "Neurobass",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },
            {
                user: "pranavchintal",
                patchName: "Pluck",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },
            {
                user: "pranavchintal",
                patchName: "Celestial Voices",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },
            {
                user: "pranavchintal",
                patchName: "Rhodes-alike",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },
            {
                user: "pranavchintal",
                patchName: "Huge Pad",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },
            {
                user: "pranavchintal",
                patchName: "Acid Bass",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },
            {
                user: "pranavchintal",
                patchName: "Squelch Lead",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },
            {
                user: "pranavchintal",
                patchName: "Power Bass",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },
            {
                user: "pranavchintal",
                patchName: "Dubby Sub",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },
            {
                user: "pranavchintal",
                patchName: "Juno Chords",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },
            {
                user: "pranavchintal",
                patchName: "Supersaw",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },
            {
                user: "pranavchintal",
                patchName: "JP-08 Factory 35",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },
            {
                user: "pranavchintal",
                patchName: "Elseq",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper augue sem, vitae lobortis tortor lacinia vitae."
            },

            

        ];
        if(this.props.patchName!=='')
        {
            dataArr.push({
                user: "pranavchintal",
                patchName: this.props.patchName,
                desc: this.props.patchDescription
            })
            var docRef = fire.firestore().collection("patch").doc(this.user.uid)
            docRef.get().then(docSnapshot => {
                docRef.set({
                    check : "hello"
                  })
              })
        }

        const items = dataArr.filter((data) => {
            if (this.state.search == null)
                return data;
            else if (data.patchName.toLowerCase().includes(this.state.search.toLowerCase())) {
                return data;
            }
        }).map(data => {
            return (
                <div className="table-row">
                    <div className="table-cell">
                        <span>{data.user}</span>
                    </div>
                    <div className="table-cell">
                        <span>{data.patchName}</span>
                    </div>
                    <div className="table-cell">
                        <span>{data.desc}</span>
                    </div>
                </div>
            )
        })

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
                                <CssTextField label="Search by patch name" onChange={(e) => this.searchSpace(e)} />
                                {/* <TextField label="Search by patch name" onChange={(e) => this.searchSpace(e)} /> */}
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
                                    {/* <div className="table-row">
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
                                    </div> */}
                                    {items}
                                </div>
                            </SimpleBar>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}