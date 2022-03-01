import CollectionItems from './collectection-items/CollectionItems'
import './shop-preview.scss'

export function CollectionPreview({title, items}) {
  return (
    <div className='collection-preview'>
        <h3 className='title'>{title.toUpperCase()}</h3>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4)
                .map(({id, ...otherItems}) => (
                    <CollectionItems key={id}  {...otherItems}/>
                ))
            }
        </div>
    </div>
  )
}
