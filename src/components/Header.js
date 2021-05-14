const selectors = ['DM', 'TV', 'OOH', 'PPC'];

const Header = (props) => {
    return(
        <div className='flex justify-between back-black color-white'>
            <div className='p-h-10 p-v-25 roboto-bold'> Ebiquity code test</div>
            <div className='flex'>
                {selectors.map((selector,index) => {
                    return(
                        <div 
                            key={index}
                            className={`p-h-10 p-v-25 hovered header-element ${props.selectorKey === selector ? 'active' : ''}`}
                            onClick={() => props.handleSelector(selector)}>
                            {selector}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Header;