import React from 'react'
import Card from './Card';
/** Le wrapper peut lui-même faire appel à différents composants */
/** Par exemple des "cards " qui vont rendre le html définitif */

function Wrapper() {
  return (
            <>
            <section>
                <h2>Titre de la section 1</h2>

                <Card
                    title={"titre card 1"}
                    text={
                        "Lorem ipsum dolor sit ."
                    }
                />
                <Card
                    title={"titre card 2"}
                    text={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    }
                />
            </section>

            <section>
                <h2>Titre section 2</h2>
                <article>
                    <h3>Article du titre de la section 2</h3>
                </article>
            </section>
        </>
    );
}

export default Wrapper