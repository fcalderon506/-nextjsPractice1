import React from 'react'
import { useRouter} from 'next/router'

const ProductId = () => {
    const router = useRouter()

    const {
        query: {id},
    } = useRouter();

    
    return(
        <div>
            <h1>Hi ProductId {router.query.id} Next</h1>
            <h1>Hi ProductId2 {id} Next</h1>
        </div>
    )
}

export default ProductId