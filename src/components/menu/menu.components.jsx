import './menu.styles.scss'
import CategorieItem from '../categorie-item/categorie-item.components';

const Menu = ({ categories }) => {
    return (
        <div className='categories-container'>
            {categories.map(e => (
                <CategorieItem key={e.id} category={e} ></CategorieItem>
            )
            )}
        </div >
    )
}

export default Menu