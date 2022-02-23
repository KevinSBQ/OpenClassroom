function CareScale({ scaleValue, careType }) {
    // ICI ON A
    // const {scaleValue, careType} = props  DEPUIS ES6
    // alors la ligne dessus est equivaent a function CareScale(propos)
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div>
            {range.map( (rangeElem) => scaleValue >= rangeElem ? 
            <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

/*

function CareScale(props) {
    const scaleValue = props.scaleValue

    const range = [1, 2, 3]

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
            )}
        </div>
    )
}

COMPENENT WRITES:
使用 props.参数名 来读取传入参数
<CareScale scaleValue={plant.light} />

*/

// Faites descendre les données, des parents vers les enfants - un flux de données unidirectionnel.
// Une prop est toujours passée par un composant parent à son enfant : c’est le seul moyen normal de transmission.
// Une prop est considérée en lecture seule dans le composant qui la reçoit.
// Dans notre exemple, CareScale est l'enfant, et ShoppingList est le parent.

export default CareScale



/*
LA PROPS TECHNIQUE : CHILDREN
<Parent>
    <Enfant1 />
    <Enfant2 />
</Parent>

<Banner>
    <img src={logo} alt='La maison jungle' />
    <h1 className='lmj-title'>La maison jungle</h1>
</Banner>

Et on peut accéder à ces nœuds enfants de Banner dans ses paramètres:

function Banner({ children }) {
    return <div className='lmj-banner'>{children}</div>
}
在children事先未知的情况下，此函数可以实现对Banner的子组件进行一些操作

Cette manière d'utiliser  children   est particulièrement utile lorsqu'un composant ne connaît pas ses enfants à l'avance, par exemple pour une barre de navigation (Sidebar) ou bien pour une modale.

*/