import './menu-item.scss'

export function MenuItem({title, imageUrl, size}) {
  return (
   
    <div className={`${size} menu-item`}  >
      <div className="background-image" style = {{backgroundImage: `url(${imageUrl})`}}

      />
      <div className="content">
            <h2 className="title"> {title.toUpperCase()}</h2>
            <span className="subtitle">shop now</span>
        </div>
      </div>      
    
  )
}
