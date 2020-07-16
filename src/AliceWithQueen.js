import React, { useEffect } from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import './Main.css';

function AliceWithQueen() {

    const sceneryFrames = {
        transform: ['translateX(100%)', 'translateX(-100%)']
    };

    const refBackground1 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: {
            duration: 36000,
            iterations: Infinity
        }
    });

    const refBackground2 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: {
            duration: 36000,
            iterations: Infinity
        }
    });

    const refForeground1 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: {
            duration: 12000,
            iterations: Infinity
        }
    });

    const refForeground2 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: {
            duration: 12000,
            iterations: Infinity
        }
    });

    const refQueen = useWebAnimations({
        keyframes: {
            transform: ['translateY(0)', 'translateY(-100%)']
        },
        timing: {
            duration: 600,
            iterations: Infinity,
            direction: 'reverse',
            easing: 'steps(7, end)',
        },
        playbackRate: 1,
    });

    useEffect(() => {
        const sceneries = [refBackground1.getAnimation(), refBackground2.getAnimation(), refForeground1.getAnimation(), refForeground2.getAnimation()];
        const queenAnimation = refQueen.getAnimation();

        const adjustPlaybackRates = () => {
            if (queenAnimation.playbackRate < .8) {
                sceneries.forEach((scene) => {
                    scene.playbackRate = queenAnimation.playbackRate / 2 * -1;
                });
            } else if (queenAnimation.playbackRate > 1.2) {
                sceneries.forEach((scene) => {
                    scene.playbackRate = queenAnimation.playbackRate / 2;
                });
            } else {
                sceneries.forEach((scene) => {
                    scene.playbackRate = 0;
                });
            }
        }

        setInterval(() => {
            if (queenAnimation.playbackRate > .4) {
                queenAnimation.playbackRate *= .9;
            }
            adjustPlaybackRates();
        }, 3000);

        const runFaster = () => {
            queenAnimation.updatePlaybackRate(queenAnimation.playbackRate * 1.1);
            adjustPlaybackRates();
        }

        document.addEventListener("click", runFaster);
        document.addEventListener("touchstart", runFaster);
        
    }, [refQueen, refBackground1, refBackground2, refForeground1, refForeground2]);

    return (
        <div className="wrapper">
            <div className="sky" />

            <div className="earth">
                <div id="red-queen_and_alice">
                    <img id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" ref={refQueen.ref} srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
                </div>
            </div>

            <div className="scenery" id="foreground1" ref={refForeground1.ref}>
                <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" "/>
            </div>

            <div className="scenery" id="foreground2" ref={refForeground2.ref}>
                <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
                <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
            </div>

            <div className="scenery" id="background1" ref={refBackground1.ref}>
                <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "/>
                <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "/>
                <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "/>
            </div>

            <div className="scenery" id="background2" ref={refBackground2.ref}>
                <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "/>
                <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/>
                <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "/>
            </div>
        </div>
    );
}

export default AliceWithQueen;
