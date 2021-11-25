import React from 'react';

import trophy from '../../assets/icons/trophy.png'
import meditation from '../../assets/icons/meditation.png'
import cross from '../../assets/icons/cross.png'
import goal from '../../assets/icons/goal.png'
import ug from '../../assets/icons/ug.png'
import square from '../../assets/icons/square.png'
import run from '../../assets/icons/run.png'
import reading from '../../assets/icons/meditation.png'
import './animatedBG.css';
import {makeStyles} from "@material-ui/core";



export const useStyles = makeStyles((theme) => ({
    root: {
        margin:0,
        padding:0,
        width:"100%",
        height:400,
    }


}));

const AnimatedBg = () => {
    return (
        <div className="backwrap gradient">
            <div className="back-shapes">
                <img alt={"animated_elem"} src={meditation} className="floating"
                     style={{"top":"66.59856996935649%","left":"13.020833333333334%","animationDelay":"-0.9s"}}/>
                <img alt={"animated_elem"} src={trophy} className="floating"
                     style={{"top":"31.46067415730337%","left":"33.59375%","animationDelay":"-4.8s"}}/>
                <img alt={"animated_elem"} src={cross} className="floating"
                     style={{"top":"76.50663942798774%","left":"38.020833333333336%","animationDelay":"-4s"}}/>
                <img alt={"animated_elem"} src={goal} className="floating"
                     style={{"top":"21.450459652706844%","left":"14.0625%","animationDelay":"-2.8s"}}/>
                <img alt={"animated_elem"} src={square} className="floating"
                     style={{"top":"58.12053115423902%","left":"56.770833333333336%","animationDelay":"2.15s"}}/>
                <img alt={"animated_elem"} src={square} className="floating"
                     style={{"top":"8.682328907048008%","left":"72.70833333333333%","animationDelay":"-1.9s"}}/>
                <img alt={"animated_elem"} src={cross} className="floating"
                     style={{"top":"31.3585291113381%","left":"58.541666666666664%","animationDelay":"0.65s"}}/>
                <img alt={"animated_elem"} src={run} className="floating"
                     style={{"top":"69.96935648621042%","left":"81.45833333333333%","animationDelay":"-0.4s"}}/>
                <img alt={"animated_elem"} src={meditation} className="floating"
                     style={{"top":"15.117466802860061%","left":"32.34375%","animationDelay":"-4.1s"}}/>
                <img alt={"animated_elem"} src={trophy} className="floating"
                     style={{"top":"13.074565883554648%","left":"45.989583333333336%","animationDelay":"3.65s"}}/>
                <img alt={"animated_elem"} src={meditation} className="floating"
                     style={{"top":"55.87334014300306%","left":"27.135416666666668%","animationDelay":"2.25s"}}/>
                <img alt={"animated_elem"} src={reading} className="floating"
                     style={{"top":"34.62717058222676%","left":"49.635416666666664%","animationDelay":"1.55s"}}/>
                <img alt={"animated_elem"} src={cross} className="floating"
                     style={{"top":"33.19713993871297%","left":"86.14583333333333%","animationDelay":"0.95s"}}/>
                <img alt={"animated_elem"} src={square} className="floating"
                     style={{"top":"28.19203268641471%","left":"25.208333333333332%","animationDelay":"4.45s"}}/>
                <img alt={"animated_elem"} src={run} className="floating"
                     style={{"top":"2.860061287027579%","left":"47.864583333333336%","animationDelay":"1.75s"}}/>
                <img alt={"animated_elem"} src={reading} className="floating"
                     style={{"top":"71.3993871297242%","left":"66.45833333333333%","animationDelay":"1.25s"}}/>
                <img alt={"animated_elem"} src={run} className="floating"
                     style={{"top":"31.256384065372828%","left":"76.92708333333333%","animationDelay":"0.65s"}}/>
                <img alt={"animated_elem"} src={goal} className="floating"
                     style={{"top":"46.47599591419816%","left":"38.90625%","animationDelay":"0.35s"}}/>
                <img alt={"animated_elem"} src={run} className="floating"
                     style={{"top":"3.4729315628192032%","left":"19.635416666666668%","animationDelay":"-4.3s"}}/>
                <img alt={"animated_elem"} src={reading} className="floating"
                     style={{"top":"3.575076608784474%","left":"6.25%","animationDelay":"4.05s"}}/>
                <img alt={"animated_elem"} src={reading} className="floating"
                     style={{"top":"77.3237997957099%","left":"4.583333333333333%","animationDelay":"3.75s"}}/>
                <img alt={"animated_elem"} src={cross} className="floating"
                     style={{"top":"0.9193054136874361%","left":"71.14583333333333%","animationDelay":"-3.3s"}}/>
                <img alt={"animated_elem"} src={ug} className="floating"
                     style={{"top":"23.6976506639428%","left":"63.28125%","animationDelay":"-2.1s"}}/>
                <img alt={"animated_elem"} src={ug} className="floating"
                     style={{"top":"81.30745658835546%","left":"45.15625%","animationDelay":"1.75s"}}/>
                <img alt={"animated_elem"} src={meditation} className="floating"
                     style={{"top":"60.9805924412666%","left":"42.239583333333336%","animationDelay":"1.45s"}}/>
                <img alt={"animated_elem"} src={ug} className="floating"
                     style={{"top":"29.009193054136876%","left":"93.90625%","animationDelay":"1.05s"}}/>
                <img alt={"animated_elem"} src={trophy} className="floating"
                     style={{"top":"52.093973442288046%","left":"68.90625%","animationDelay":"-0.7s"}}/>
                <img alt={"animated_elem"} src={ug} className="floating"
                     style={{"top":"81.51174668028601%","left":"83.59375%","animationDelay":"0.35s"}}/>
                <img alt={"animated_elem"} src={goal} className="floating"
                     style={{"top":"11.542390194075587%","left":"91.51041666666667%","animationDelay":"-0.1s"}}/>
            </div>
        </div>
    );
};

export default AnimatedBg;