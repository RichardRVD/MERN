import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card';

const PetCard = () => {
    const db = [
        {
          name: 'Pet # 1',
          url: './img/richard.jpg'
        },
        {
          name: 'Pet # 2',
          url: './img/erlich.jpg'
        },
        {
          name: 'Pet # 3',
          url: './img/monica.jpg'
        },
        {
          name: 'Pet # 4',
          url: './img/jared.jpg'
        },
        {
          name: 'Pet # 5',
          url: './img/dinesh.jpg'
        }
      ]

    const [pet, setPet] = useState()

    
        const [currentIndex, setCurrentIndex] = useState(db.length - 1)
        const [lastDirection, setLastDirection] = useState()
        // used for outOfFrame closure
        const currentIndexRef = useRef(currentIndex)
      
        const childRefs = useMemo(
          () =>
            Array(db.length)
              .fill(0)
              .map((i) => React.createRef()),
          []
        )
      
        const updateCurrentIndex = (val) => {
          setCurrentIndex(val)
          currentIndexRef.current = val
        }
      
        const canGoBack = currentIndex < db.length - 1
      
        const canSwipe = currentIndex >= 0
      
        // set last direction and decrease current index
        const swiped = (direction, nameToDelete, index) => {
          setLastDirection(direction)
          updateCurrentIndex(index - 1)
        }
      
        const outOfFrame = (name, idx) => {
          console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
          // handle the case in which go back is pressed before card goes outOfFrame
          currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
          // TODO: when quickly swipe and restore multiple times the same card,
          // it happens multiple outOfFrame events are queued and the card disappear
          // during latest swipes. Only the last outOfFrame event should be considered valid
        }
      
        const swipe = async (dir) => {
          if (canSwipe && currentIndex < db.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
          }
        }
      
        // increase current index and show card
        const goBack = async () => {
          if (!canGoBack) return
          const newIndex = currentIndex + 1
          updateCurrentIndex(newIndex)
          await childRefs[newIndex].current.restoreCard()
        }

return (
    <div>
    
    <h1>Pet Card</h1>
    <div className='cardContainer'>
      {db.map((character, index) => (
        <TinderCard
          ref={childRefs[index]}
          className='swipe'
          key={character.name}
          onSwipe={(dir) => swiped(dir, character.name, index)}
          onCardLeftScreen={() => outOfFrame(character.name, index)}
        >
          <div>
            <h3>{character.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
    <div className='buttons'>
      <button className='btn btn-danger m-2' style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>No thanks!</button>
      <button className='btn btn-info m-2' style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo!</button>
      <button className='btn btn-success m-2' style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Yes Please!</button>
    </div>
    {lastDirection ? (
      <h2 key={lastDirection} className='infoText'>
        You swiped {lastDirection}
      </h2>
    ) : (
      <h2 className='infoText'>
        Swipe a card or press a button to choose a pet!
      </h2>
    )}
  </div>
)
    }


export default PetCard