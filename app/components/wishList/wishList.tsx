'use client';
import React, { use } from 'react'
import Link from 'next/link'
import { getUser } from '../../api/users/usersApi';
import styles from './wishlist.module.scss';


export default function WishList() {

    const user = use(getUser("foo"));

    return (
        <section className={`${styles.wishlist}`}>
                { user.wishList.map((gift: any, iter: number) => {
                    return( 
                        <div key={iter} className={styles.card}>
                            <h1>{gift.title}</h1>
                            <p>{gift.description}</p>
                            <span>Find it <Link href={gift.storeUrl}>here</Link></span>
                        </div>
                    )
                })}
        </section>
    )
}
