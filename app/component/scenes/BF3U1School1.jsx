'use client';
import React, { useEffect, useState } from 'react';
import { SpinePlayer } from '@esotericsoftware/spine-player';
import sceneStyles from '../../styles/Scene.module.css';
import useSound from 'use-sound';
import Link from 'next/link';
import Image from 'next/image';
// import NavArrow from '../../img/buttons/navArrow.svg';

// import schoolAmbience from '../sounds/schoolambience.mp3';

const init = () => {
  const playerWidth = 1030;
  const playerHeight = 579;

  return new SpinePlayer('container', {
    jsonUrl: '/scenes/bf3school/bf3school.json',
    atlasUrl: '/scenes/bf3school/bf3school.atlas',
    animation: 'idle',
    premultipliedAlpha: true,
    backgroundColor: '#282c34',
    viewport: {
      x: -playerWidth / 2,
      y: -playerHeight / 2,
      width: playerWidth,
      height: playerHeight,
      padLeft: 0,
      padRight: 0,
      padTop: 0,
      padBottom: 0,
      debugRender: false,
    },
    showControls: false,

    success: (player) => {
      var animationState = player.animationState;
      var pianofingering = animationState.setAnimation(
        1,
        'pianofingering',
        true
      );
      var pianoheadturn = animationState.setAnimation(
        2,
        'pianoheadturn',
        true
      );
      var pianolean = animationState.setAnimation(
        3,
        'pianolean',
        true
      );
      var mtkidsdance = animationState.setAnimation(
        4,
        'mtkidsdance',
        true
      );
      mtkidsdance.timeScale = 0.7;
      var etteacher = animationState.setAnimation(
        5,
        'etgesturing',
        true
      );
      var etkid2 = animationState.setAnimation(
        6,
        'etkid2nodding',
        true
      );
      var etkid4 = animationState.setAnimation(
        7,
        'etkid4nodding',
        true
      );
      var bus = animationState.setAnimation(8, 'bus', true);
      var principaltype1 = animationState?.setAnimation(
        9,
        'principaltyping1',
        true
      );
      var principaltype2 = animationState?.setAnimation(
        10,
        'principaltyping2',
        true
      );
      var secretary = animationState?.setAnimation(
        11,
        'secretary',
        true
      );
      var kidsplaying = animationState?.setAnimation(
        12,
        'kidsplaying',
        true
      );
      kidsplaying.timeScale = 0.5;
      var gatekeeper = animationState.setAnimation(
        13,
        'gatekeeper',
        true
      );
      var gymteacher = animationState?.setAnimation(
        14,
        'gymteacher',
        true
      );
      var janitor = animationState?.setAnimation(15, 'janitor', true);

      //initial sound
      // schoolSound();
    },

    frame: (player) => {
      var animationState = player.animationState;
      var sceneContainer = document.getElementById('sceneContainer');
      const zoomstatus = sceneContainer.dataset.zoomstatus;
      console.log(zoomstatus);
      if (sceneContainer === null) return;
      if (zoomstatus === 'music') {
        var zoomMusic = animationState.setAnimation(
          25,
          'zoommusicclassroom',
          false
        );
        sceneContainer.dataset.zoomstatus = 'null';
      }
      if (zoomstatus === 'english') {
        var zoomMusic = animationState.setAnimation(
          25,
          'zoomenglishclassroom',
          false
        );
        sceneContainer.dataset.zoomstatus = 'null';
      }
      if (zoomstatus === 'office') {
        var zoomMusic = animationState.setAnimation(
          25,
          'zoomoffice',
          false
        );
        var fadeOutBus = animationState?.setAnimation(
          26,
          'fadeoutbus',
          false
        );
        sceneContainer.dataset.zoomstatus = 'null';
      }
      if (zoomstatus === 'gym') {
        var zoomMusic = animationState.setAnimation(
          25,
          'zoomgym',
          false
        );
        var fadeOutBus = animationState?.setAnimation(
          26,
          'fadeoutbus',
          false
        );
        sceneContainer.dataset.zoomstatus = 'null';
      }
      if (zoomstatus === 'gate') {
        var zoomMusic = animationState.setAnimation(
          25,
          'zoomgate',
          false
        );
        var fadeOutBus = animationState?.setAnimation(
          26,
          'fadeoutbus',
          false
        );
        sceneContainer.dataset.zoomstatus = 'null';
      }
      if (zoomstatus === 'outfrommusic') {
        var zoomOutMusic = animationState.setAnimation(
          25,
          'zoomoutfrommusic',
          false
        );
        sceneContainer.dataset.zoomstatus = 'null';
      }
      if (zoomstatus === 'outfromenglish') {
        var zoomOutMusic = animationState.setAnimation(
          25,
          'zoomoutfromenglish',
          false
        );
        sceneContainer.dataset.zoomstatus = 'null';
      }
      if (zoomstatus === 'outfromoffice') {
        var zoomOutMusic = animationState.setAnimation(
          25,
          'zoomoutfromoffice',
          false
        );
        var fadeInBus = animationState?.setAnimation(
          26,
          'fadeinbus',
          false
        );
        sceneContainer.dataset.zoomstatus = 'null';
      }
      if (zoomstatus === 'outfromgym') {
        var zoomOutMusic = animationState.setAnimation(
          25,
          'zoomoutfromgym',
          false
        );
        var fadeInBus = animationState?.setAnimation(
          26,
          'fadeinbus',
          false
        );
        sceneContainer.dataset.zoomstatus = 'null';
      }
      if (zoomstatus === 'outfromgate') {
        var zoomOutMusic = animationState.setAnimation(
          25,
          'zoomoutfromgate',
          false
        );
        var fadeInBus = animationState?.setAnimation(
          26,
          'fadeinbus',
          false
        );
        sceneContainer.dataset.zoomstatus = 'null';
      }
    },
  });
};

// eslint-disable-next-line react/display-name
const BF3School = React.memo(() => {
  const [zoomStatus, setZoomStatus] = useState('out');
  const [soundsStarted, setSoundsStarted] = useState(false);
  const [schoolSound, schoolsound] = useSound(
    '/sounds/schoolambience.mp3',
    { volume: 0.8 }
  );
  const [pianoSound, pianosound] = useSound('/sounds/piano.mp3', {
    loop: true,
  });
  const [officeSound, officesound] = useSound('/sounds/office.mp3', {
    loop: true,
  });
  const [playgroundSound, playgroundsound] = useSound(
    '/sounds/playground.mp3',
    {
      loop: true,
    }
  );
  const [classroomSound, classroomsound] = useSound(
    '/sounds/classroom.mp3',
    {
      loop: true,
    }
  );

  useEffect(() => {
    var player = init();

    return () => {
      player.dispose();
    };
  }, []);
  const setZoomMusic = (e) => {
    if (!e || !e.currentTarget) return;
    const element = e.target
    const elementID = element.id;
    if (!soundsStarted) {
      console.log('sounds not started')
      schoolSound();
      pianoSound();
      classroomSound();
      officeSound();
      playgroundSound();
      setSoundsStarted(true);
    }
    if (pianosound && pianosound.sound) {
      pianosound.sound.fade(1, 0, 0);
    }
    if (classroomsound && classroomsound.sound) {
      classroomsound.sound.fade(1, 0, 0);
    }
    if (playgroundsound && playgroundsound.sound) {
      playgroundsound.sound.fade(1, 0, 0);
    }
    if (officesound && officesound.sound) {
      officesound.sound.fade(1, 0, 0);
    }
    if (elementID === 'musicClick') {
      if (schoolsound && schoolsound.sound) {
        schoolsound.sound.fade(1, 0.2, 200);
      }

      if (pianosound && pianosound.sound) {
        pianosound.sound.fade(0, 1, 50);
      }

      // pianoSound();
      return setZoomStatus('music');
    }
    if (elementID === 'officeClick') {
      if (schoolsound && schoolsound.sound) {
        schoolsound.sound.fade(1, 0.2, 200);
      }
      if (officesound && officesound.sound) {
        officesound.sound.fade(0, 1, 50);
      }
      return setZoomStatus('office');
    }
    if (elementID === 'gymClick') {
      if (schoolsound && schoolsound.sound) {
        schoolsound.sound.fade(1, 0.2, 200);
      }
      if (playgroundsound && playgroundsound.sound) {
        playgroundsound.sound.fade(0, 1, 50);
      }
      return setZoomStatus('gym');
    }
    if (elementID === 'gateClick') {
      if (schoolsound && schoolsound.sound) {
        schoolsound.sound.fade(1, 0.2, 200);
      }
      return setZoomStatus('gate');
    }
    if (elementID === 'englishClick') {
      if (schoolsound && schoolsound.sound) {
        schoolsound.sound.fade(1, 0.2, 200);
      }
      if (classroomsound && classroomsound.sound) {
        classroomsound.sound.fade(0, 1, 50);
      }
      return setZoomStatus('english');
    }
    if (zoomStatus === 'music') {
      if (pianosound && pianosound.sound) {
        pianosound.sound.fade(1, 0, 500);
      }
      if (schoolsound && schoolsound.sound) {
        schoolsound.sound.fade(0.2, 1, 200);
      }
      return setZoomStatus('outfrommusic');
    }
    if (zoomStatus === 'office') {
      if (officesound && officesound.sound) {
        officesound.sound.fade(1, 0, 500);
      }
      if (schoolsound && schoolsound.sound) {
        schoolsound.sound.fade(0.2, 1, 200);
      }
      return setZoomStatus('outfromoffice');
    }
    if (zoomStatus === 'english') {
      if (classroomsound && classroomsound.sound) {
        classroomsound.sound.fade(1, 0, 500);
      }
      if (schoolsound && schoolsound.sound) {
        schoolsound.sound.fade(0.2, 1, 200);
      }
      return setZoomStatus('outfromenglish');
    }
    if (zoomStatus === 'gym') {
      if (playgroundsound && playgroundsound.sound) {
        playgroundsound.sound.fade(1, 0, 500);
      }
      if (schoolsound && schoolsound.sound) {
        schoolsound.sound.fade(0.2, 1, 200);
      }
      return setZoomStatus('outfromgym');
    }
    if (zoomStatus === 'gate') {
      if (schoolsound && schoolsound.sound) {
        schoolsound.sound.fade(0.2, 1, 200);
      }

      return setZoomStatus('outfromgate');
    }
  };
  const stopAllSounds = () => {
    schoolsound.sound.stop();
    classroomsound.sound.stop();
    playgroundsound.sound.stop();
    pianosound.sound.stop();
    officesound.sound.stop();
  };
  return (
    <div
      id={'sceneContainer'}
      className={sceneStyles.sceneContainer}
      data-zoomstatus={zoomStatus}
      onClick={setZoomMusic}
    >
      <Link href="/scene">
        {/* <Image
          src={NavArrow}
          width={100}
          height={100}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transform: 'rotate(180deg)',
          }}
          alt="nav arrow to go back"
          onClick={stopAllSounds}
        /> */}
      </Link>
      {/* <div id="container" style={{display:"grid", placeItems:"center"}}> */}

      
      <div
        
        style={{
          maxWidth: '1030px',
          aspectRatio: '16/9',
          margin: 'auto',
          display: 'grid',
          gridTemplateColumns:'1fr',
          justifyContent: 'center',
        }}
      >
        <div id="container" style={{width:'100%', height:'100%', gridRowStart:1,
              gridColumnStart:1,overflow:'hidden'}}></div>
        {/* <div
          id="sceneoverlay"
          style={{width:'100vw'}}
        > */}
          {zoomStatus.match('out') && (
            <div style={{position:'relative', width:'100%',aspectRatio:'16/9', top:0, left:0, zIndex:20,
              gridRowStart:1,
              gridColumnStart:1,
              overflow:'hidden'}}>
              <div
                className={sceneStyles.clickable}
                id="musicClick"
                style={{
                  width: '35%',
                  height: '35%',
                  // background: 'rgba(150,0,150,0.5)',
                  position: 'relative',
                  left: '15%',
                  top: '10%',
                  zIndex:20,
                }}
              ></div>
              <div
                className={sceneStyles.clickable}
                id="englishClick"
                style={{
                  width: '35%',
                  height: '35%',
                  // background: 'rgba(0,150,150,0.5)',
                  position: 'relative',
                  left: '50%',
                  top: '-30%',
                }}
              ></div>
              <div
                className={sceneStyles.clickable}
                id="officeClick"
                style={{
                  width: '35%',
                  height: '35%',
                  // background: 'rgba(0,0,150,0.5)',
                  position: 'relative',
                  left: '10%',
                  top: '-30%',
                }}
              ></div>
              <div
                className={sceneStyles.clickable}
                id="gymClick"
                style={{
                  width: '20%',
                  height: '30%',
                  // background: 'yellow',
                  position: 'relative',
                  left: '50%',
                  top: '-58%',
                }}
              ></div>
              <div
                className={sceneStyles.clickable}
                id="gateClick"
                style={{
                  width: '20%',
                  height: '25%',
                  // background: 'red',
                  position: 'relative',
                  left: '40%',
                  top: '-60%',
                }}
              ></div>
            </div>
          )}
        {/* </div> */}
      </div>
    </div>
  );
});

export default BF3School;
