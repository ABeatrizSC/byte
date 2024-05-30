import React from 'react'
import './style.css'
import { Item } from '../Item'
import { SearchFilter } from '../SearchFilter'

export function ManagementSection( { title, filterPlaceholder, subtitle, itemList } ) {
    return (
    <section className='management-section'>
        <h1 className='management-section__title'>{title}</h1>
        <div className='management-section__controls-container'>
            <SearchFilter filterPlaceholder={filterPlaceholder}/>
            <button className='controls-container__add-product-button'>Adicionar {title}</button>
        </div>
        <div className='management-section__products-list-container'>
            <h2>{subtitle}:</h2>
            <ul>
                {itemList.map((item, index) => (
                <li key={index}>
                    <Item {...item} />
                </li>
                ))}
            </ul>
        </div>
    </section>
    )
}
